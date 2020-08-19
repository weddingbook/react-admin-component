import React, { CSSProperties, useRef, useCallback, useEffect } from 'react';
import './ImageSlider.scss';
import Icon from 'react-eva-icons';

type Props = {
    style?: CSSProperties
    imageUrlList: string[]
    imageWidth?: number
    imageHeight?: number
}

const ImageSlider = ({ style, imageUrlList, imageWidth = 90, imageHeight = 60 }: Props) => {
    const innerRef = useRef<HTMLUListElement>(null)
    const outerRef = useRef<HTMLDivElement>(null);

    const onClickSliderArrow = useCallback((direction: string) => {
        if (innerRef.current && outerRef.current) {
            let nowWidth = 0;
            innerRef.current.style.transform && (nowWidth = Math.abs(parseInt(innerRef.current.style.transform.split('(')[1], 10)));

            if (direction === 'back') {
                innerRef.current.style.transform = `translateX(-${nowWidth - (imageWidth + 8)}px)`;
            } else {
                const outerWidth = outerRef.current?.offsetWidth;
                if ((imageWidth + 8) * imageUrlList.length - nowWidth < outerWidth) {
                    return;
                }
                innerRef.current.style.transform = `translateX(-${nowWidth + imageWidth + 8}px)`;
            }
        }
    }, [innerRef.current, outerRef.current])

    const onClickImageItem = (url: string) => {
        window.open(url, '_black')
    }
    return (
        <div className='image-slider-container' style={{ ...style }}>
            <span className={`arrow`} onClick={() => onClickSliderArrow('back')}>
                <Icon name='arrow-ios-back-outline' fill='#dedede' size='35' />
            </span>
            <div className='image-outer-slider' ref={outerRef}>
                <ul className='image-inner-slider' ref={innerRef}>
                    {
                        imageUrlList.map((value, index) => (
                            <li onClick={() => onClickImageItem(value)} key={`${value}-${index}`}>
                                <img width={imageWidth} height={imageHeight} src={value} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <span className={`arrow`} onClick={() => onClickSliderArrow('forward')}>
                <Icon name='arrow-ios-forward-outline' fill='#dedede' size='35' />
            </span>
        </div>
    )
}

export default ImageSlider

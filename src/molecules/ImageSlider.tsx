import React, { CSSProperties, useRef, useCallback, useState, useEffect } from 'react';
import './ImageSlider.scss';
import Icon from 'react-eva-icons';

type Props = {
    style?: CSSProperties
    imageUrlList: string[]
    imageWidth?: number
    imageHeight?: number
}

const ImageSlider = ({ style, imageUrlList, imageWidth = 90, imageHeight = 60 }: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isRefScroll, setIsRefScroll] = useState(false);
    const [isRefScrollEnd, setIsRefScrollEnd] = useState(false);
    const [refScrollLeft, setRefScrollLeft] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const { scrollWidth, offsetWidth } = ref.current;
            setIsRefScroll(scrollWidth > offsetWidth)
        }
    }, [ref.current])

    const onClickSliderArrow = useCallback((direction: string) => {
        if (ref.current) {
            const { scrollLeft, scrollWidth, offsetWidth } = ref.current;
            if (direction === 'back') {
                ref.current.scrollLeft -= imageWidth + 8
                console.log(ref.current.offsetWidth)
                setRefScrollLeft(ref.current?.scrollLeft)
                setIsRefScrollEnd(scrollLeft === scrollWidth - offsetWidth)
            } else {
                ref.current.scrollLeft += imageWidth + 8
                setRefScrollLeft(scrollLeft)
                setIsRefScrollEnd(scrollLeft === scrollWidth - offsetWidth)
            }
        }
    }, [ref.current])

    const onClickImageItem = (url: string) => {
        window.open(url, '_black')
    }
    return (
        <div className='image-slider' style={{ ...style }}>
            <span className={`arrow ${(isRefScroll && refScrollLeft) ? 'on' : ''}`} onClick={() => onClickSliderArrow('back')}>
                <Icon name='arrow-ios-back-outline' fill='#dedede' size='35' />
            </span>
            <div className='image-item-wrapper' ref={ref}>
                {
                    imageUrlList.map((value, index) => (
                        <img onClick={() => onClickImageItem(value)} key={`${value}-${index}`} width={imageWidth} height={imageHeight} src={value} />
                    ))
                }
            </div>
            <span className={`arrow ${(isRefScroll && !isRefScrollEnd) ? 'on' : ''}`} onClick={() => onClickSliderArrow('forward')}>
                <Icon name='arrow-ios-forward-outline' fill='#dedede' size='35' />
            </span>
        </div>
    )
}

export default ImageSlider

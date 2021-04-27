import React, { useState, useRef, useEffect, CSSProperties, ReactComponentElement } from 'react';
import './InputRecommend.scss';
import { IRecommendOption } from './Input';
type Props = {
    options: IRecommendOption[];
    style?: CSSProperties;
    recommendType?: 'normal' | 'thumbnail';
    recommendListButton?: ReactComponentElement<'button'>
    onSelectOptionSet: (option: IRecommendOption) => void
    invalid: boolean
    informationMessage: string
}

const InputRecommend = ({ options, style, recommendType = 'normal', recommendListButton, onSelectOptionSet, invalid, informationMessage }: Props) => {
    const [isShowList, setShowList] = useState<boolean>(true)
    const [marginTop, setMarginTop] = useState<string>('0');

    const selectListRef = useRef<HTMLUListElement>(null)
    const handleEventListener = (e: any) => {
        if (isShowList && (e.target !== selectListRef.current)) {
            setShowList(!isShowList)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleEventListener)
        return function cleanup() {
            document.removeEventListener('click', handleEventListener)
        }
    }, [isShowList]);

    // 더 좋은 방법이 있다면 추후 수정 예정
    useEffect(() => {
        if (invalid && informationMessage) setMarginTop('-28px');
        if (!invalid && informationMessage) setMarginTop('-14px');
    }, [invalid, informationMessage, setMarginTop])

    useEffect(() => {
        setShowList(true)
    }, [options]);

    const onClickOption = (option: IRecommendOption) => {
        onSelectOptionSet!(option);
    }
    return (
        <>
            {isShowList && <ul
                ref={selectListRef}
                className='input-recommend'
                style={{ ...style, marginTop }}
            >
                {options.map(option => (
                    <li
                        key={option.value}
                        onClick={() => { onClickOption(option) }}
                    >
                        {recommendType === 'normal' &&
                        <>{option.name}</>
                        }
                        {recommendType === 'thumbnail' &&
                        <div className="input-recommend-thumb-wrap">
                            <div className="input-recommend-thumb" style={{backgroundImage: `url(${option.thumbnail})`}} />
                            <div className="input-recommend-thumb-info">
                                <em>{option.name}</em>
                                <span>{option.subName}</span>
                            </div>
                        </div>
                        }
                    </li>
                ))}
                {recommendListButton &&
                <div className='button-area'>
                    {recommendListButton}
                </div>
                }
            </ul>}
        </>
    )
}

export default InputRecommend

import React, { useState, useRef, useEffect, CSSProperties, ReactComponentElement } from 'react';
import './InputRecommend.scss';

type Props = {
    options: Array<any>
    style?: CSSProperties
    recommendListButton?: ReactComponentElement<'button'>
    onSelectOptionSet: (option: any) => void
    invalid: boolean
    informationMessage: string
}

const InputRecommend = ({ options, style, recommendListButton, onSelectOptionSet, invalid, informationMessage }: Props) => {
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

    const onClickOption = (option: any) => {
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
                        key={option}
                        onClick={() => { onClickOption(option) }}
                    >
                        {option}
                    </li>
                ))}
                <div className='button-area'>
                    {recommendListButton}
                </div>
            </ul>}
        </>
    )
}

export default InputRecommend

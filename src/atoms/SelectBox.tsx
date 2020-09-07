import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import './SelectBox.scss';
import Icon from 'react-eva-icons';

type Props = {
    options: {value: any, name: string}[],
    selectedOption: {value: any, name: string},
    style?: CSSProperties
    onSelectOptionSet: (option: any) => void
}

const SelectBox = ({ options, selectedOption, style, onSelectOptionSet }: Props) => {
    const selectedRef = useRef<HTMLDivElement>(null)
    const selectBoxRef = useRef<HTMLDivElement>(null)
    const selectListRef = useRef<HTMLUListElement>(null)

    const [isShowList, setShowList] = useState<boolean>(false)

    let selectItem = selectedRef.current
    let listHeight;

    const handleEventListener = (e: any) => {
        if (isShowList && (e.target !== selectBoxRef.current || e.target !== selectedRef.current || e.target !== selectListRef.current)) {
            setShowList(!isShowList)
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleEventListener)
        return function cleanup() {
            document.removeEventListener('click', handleEventListener)
        }
    }, [isShowList]);

    const onClickOption = (option: {value: any, name: string}) => {
        onSelectOptionSet!(option);
        selectItem && (selectItem.style.marginBottom = '0');
        setShowList(false)
    }
    const onToggleSelectBox = () => {
        if (!isShowList) {
            // 리스트가 열린다면?
            let wh = window.innerHeight;
            let magicNumber = 3; // selectItem의 위 아래 border(2) + list의 하단 border(1)
            let listMaxHeight = 0;

            if (selectItem) {
                listMaxHeight = wh - (selectItem.getBoundingClientRect().top + selectItem.clientHeight) - magicNumber;
            }
            let maxStretchSize = 50; //
            let liHeight = 36;

            let originListHeight = liHeight
            if (originListHeight > 268) {
                originListHeight = 268;
            }

            if (originListHeight > listMaxHeight) {
                let bottomSpace;
                if (originListHeight - listMaxHeight > maxStretchSize) {
                    bottomSpace = originListHeight - listMaxHeight - maxStretchSize;
                } else {
                    bottomSpace = originListHeight - listMaxHeight;
                }
                listHeight = listMaxHeight + bottomSpace;
            } else {
                listHeight = originListHeight;
            }
        } else {
            selectItem && (selectItem.style.marginBottom = '0');
        }
        setShowList(!isShowList)
    };
    return (
        <div tabIndex={0} ref={selectBoxRef} className='select-box' onClick={onToggleSelectBox} style={{ ...style }}>
            <div
                ref={selectedRef}
                className='selected-item'
            >
                {selectedOption.name}
            </div>
            <Icon
                name='arrow-ios-downward-outline'
                size='18'
            />
            {isShowList && <ul
                ref={selectListRef}
                className='list'
                style={{ height: `${listHeight + 'px'}` }}
            >
                {options.map(option => (
                    <li
                        key={option.name}
                        onClick={() => { onClickOption(option) }}
                    >
                        {option.name}
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default SelectBox

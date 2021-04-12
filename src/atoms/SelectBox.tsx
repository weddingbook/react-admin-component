import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import './SelectBox.scss';
import Icon from 'react-eva-icons';
import Input from './Input';

export interface ISelectBoxOption {
	value: any;
	name: string;
	additionalHtml?: {
		position?: 'before' | 'after';
		html: JSX.Element
	};
}
type Props = {
    options: ISelectBoxOption[],
    selectedOption: ISelectBoxOption,
    style?: CSSProperties
    onSelectOptionSet: (option: any) => void
    disabled?: boolean
}

const SelectBox = ({ options, selectedOption, style, onSelectOptionSet, disabled }: Props) => {
    const selectedRef = useRef<HTMLDivElement>(null)
    const selectBoxRef = useRef<HTMLDivElement>(null)
    const selectListRef = useRef<HTMLUListElement>(null)
    const [isShowList, setShowList] = useState<boolean>(false)
    const [listPosition, setListPosition] = useState<'top'|'bottom'>('bottom');

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

    const onClickOption = (option: { value: any, name: string }) => {
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

            let originListHeight = liHeight * options.length;
            if (originListHeight > 268) {
                originListHeight = 268;
            }
            if (wh - originListHeight < selectedRef.current!.getBoundingClientRect().y) {
                // 화면 하단에 위치해서 li가 안보여질 수 있음
                setListPosition('top');
            } else {
                setListPosition('bottom');
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
    {
        return disabled
            ? <Input disabled={true} />
            : <div tabIndex={0} ref={selectBoxRef} className='select-box' onClick={onToggleSelectBox} style={{ ...style }}>
                <div
                    ref={selectedRef}
                    className='selected-item'
                >
					{selectedOption.additionalHtml
						? <>
							{selectedOption.additionalHtml.position === 'before' && 
								selectedOption.additionalHtml.html
							}
							<span style={{verticalAlign: 'middle'}}>{selectedOption.name}</span>
							{selectedOption.additionalHtml.position === 'after' && 
								selectedOption.additionalHtml.html
							}
						</>
						: selectedOption.name
					}
                </div>
                <Icon
                    name='arrow-ios-downward-outline'
                    size='18'
                />
                {isShowList && <ul
                    ref={selectListRef}
                    className={`list list-${listPosition}`}
                    style={{ height: `${listHeight + 'px'}` }}
                >
                    {options.map(option => (
                        <li
                            key={option.name}
                            onClick={() => { onClickOption(option) }}
                        >
							{option.additionalHtml
								? <>
									{option.additionalHtml.position === 'before' && 
										option.additionalHtml.html
									}
									<span style={{verticalAlign: 'middle'}}>{option.name}</span>
									{option.additionalHtml.position === 'after' && 
										option.additionalHtml.html
									}
								</>
								: option.name
							}
                            
                        </li>
                    ))}
                </ul>}
            </div>
    }
}

export default SelectBox

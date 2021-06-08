import './MultiSelectBox.scss';
import React, { useState, useEffect, useRef } from 'react';
import Input, { Props as InputProps } from './Input';
import Icon from 'react-eva-icons';
import { ISelectBoxOption } from './SelectBox';

interface Props extends InputProps {
    multiSelect?: boolean;
    styleSelectBox: any;
    selectPrefix?: string;
    options: ISelectBoxOption[];
    selectedOptions: ISelectBoxOption[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectBoxOption[]>>;
    clickOption?: (item: ISelectBoxOption) => void;
}
const MultiSelectBox = ({ styleSelectBox = { width: 100 }, selectPrefix = '', multiSelect = false, options, selectedOptions, setSelectedOptions, clickOption, ...rest }: Props) => {
    const [inputValue, setInputValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const optionRef = useRef<HTMLUListElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const selectedRef = useRef<HTMLDivElement | null>(null);
    const [filtered, setFiltered] = useState<ISelectBoxOption[]>(options.filter(option => option.name.indexOf(inputValue) !== -1));
    const onClickList = (item: ISelectBoxOption) => {
        if (typeof clickOption === 'function') {
            clickOption(item);
            setInputValue('');
            setShowOptions(false);
        }
    }
    const onFocusInput = () => {
        setShowOptions(true);
    }
    const isSelected = (item: ISelectBoxOption) => {
        if (!selectedOptions.length) return false;
        return selectedOptions.filter(option => option.value === item.value).length > 0;
    }
    useEffect(() => {
        setFiltered(
            options.filter(option => option.name.indexOf(inputValue) !== -1)
        );
    }, [inputValue, selectedOptions]);
    useEffect(() => {
        const hideOptions = (e: MouseEvent) => {
            if (optionRef.current!.contains(e.target as Node) || inputRef.current?.contains(e.target as Node)) {

            } else {
                setShowOptions(false);
            }
        }
        window.addEventListener('click', hideOptions);
        return () => {
            window.removeEventListener('click', hideOptions);
        }
    }, []);
    return (
        <div className="auto-complete-wrap" style={styleSelectBox}>
            <div ref={inputRef}>
                {selectedOptions.length > 0 &&
                    <div className="selected-option-wrap" ref={selectedRef}>
                        {selectedOptions.map(option => <span className="selected-option-name" key={`multi-select-selected-${option.value}`}>{selectPrefix}{option.name}</span>)}
                    </div>
                }
                <Input
                    {...rest}
                    style={{ width: '100%' }}
                    className="auto-complete-input"
                    value={inputValue}
                    inputStyle={{ ...rest.inputStyle, paddingLeft: selectedOptions.length > 0 ? selectedRef.current?.clientWidth! - 12 : 0 }}
                    onFocus={onFocusInput}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyDown={e => {
                        if (e.keyCode === 8 && inputValue === '' && selectedOptions.length > 0) {
                            setSelectedOptions(selectedOptions.slice(0, selectedOptions.length - 1));
                        }
                    }}
                />
            </div>
            <ul
                className="auto-complete-list"
                style={{ display: showOptions ? 'block' : 'none' }}
                ref={optionRef}
            >
                {filtered.map(item => (
                    <li
                        className={isSelected(item) ? 'selected' : ''}
                        onClick={() => onClickList(item)}
                        key={`multi-select-option-${item.value}`}
                    >
                        <span style={{ marginRight: 6 }}>{item.name}</span>
                        <span style={{ display: isSelected(item) ? 'inline-block' : 'none' }}>
                            <Icon name="checkmark-outline" size="14" fill="#296df1" />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MultiSelectBox;

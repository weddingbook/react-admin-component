import './MultiSelectBox.scss';
import React, { useState, useEffect, useRef } from 'react';
import Input, { Props as InputProps } from './Input';
import Icon from 'react-eva-icons';
import { ISelectBoxOption } from './SelectBox';

interface Props extends InputProps {
	multiSelect?: boolean;
	selectPrefix?: string;
	options: ISelectBoxOption[];
	selectedOptions: ISelectBoxOption[];
	clickOption?: (item: ISelectBoxOption) => void;
}
const MultiSelectBox = ({selectPrefix = '', multiSelect = false, options, selectedOptions, clickOption, ...rest}: Props) => {
	const [inputValue, setInputValue] = useState('');
	const [showOptions, setShowOptions] = useState(false);
	const optionRef = useRef<HTMLUListElement|null>(null);
	const inputRef = useRef<HTMLInputElement|null>(null);
	const selectedRef = useRef<HTMLDivElement|null>(null);
	const [filtered, setFiltered] = useState<ISelectBoxOption[]>(options.filter(option => option.name.indexOf(inputValue) !== -1));
	const onClickList = (item: ISelectBoxOption) => {
		if (typeof clickOption === 'function') {
			clickOption(item);
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
	}, [inputValue]);
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
		<div className="auto-complete-wrap">
			<div ref={inputRef}>
				{selectedOptions.length > 0 &&
				<div className="selected-option-wrap" ref={selectedRef}>
					{selectedOptions.map(option => <span className="selected-option-name" key={`multi-select-selected-${option.value}`}>{selectPrefix}{option.name}</span>)}
				</div>
				}
				<Input 
					{...rest}
					value={inputValue}
					inputStyle={{...rest.inputStyle, paddingLeft: selectedOptions.length > 0 ? selectedRef.current?.clientWidth! - 12 : 0 }} 
					onFocus={onFocusInput}
					onChange={e => setInputValue(e.target.value)}
				/>
			</div>
			<ul 
				className="auto-complete-list" 
				style={{display: showOptions ? 'block' : 'none'}}
				ref={optionRef}
			>
				{filtered.map(item => (
					<li 
						className={isSelected(item) ? 'selected' : ''} 
						onClick={() => onClickList(item)}
						key={`multi-select-option-${item.value}`}
					>
						<span style={{marginRight: 6}}>{item.name}</span>
						{isSelected(item) &&
						<Icon name="checkmark-outline" size="14" fill="#296df1" />
						}
					</li>
				))}
			</ul>
		</div>
	)
}

export default MultiSelectBox;

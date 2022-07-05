import './MultiSelectBox.scss';
import React, { useState, useEffect, useRef } from 'react';
import Input, { Props as InputProps } from './Input';
import Icon from 'react-eva-icons';
import { ISelectBoxOption } from './SelectBox';

interface Props extends InputProps {
	multiSelect?: boolean;
	width?: string;
	height?: string;
	styleSelectBox?: any;
	selectPrefix?: string;
	options: ISelectBoxOption[];
	selectedOptions: ISelectBoxOption[];
	setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectBoxOption[]>>;
	clickOption?: (item: ISelectBoxOption) => void;
	bottomButton?: {
		title: string;
		className?: string;
		style?: React.CSSProperties;
		action: (value: string) => void;
		callback?: {
			focus?: boolean;
			removeInput?: boolean;
		}
	}
}
const MultiSelectBox = ({
	width,
	height,
	selectPrefix = '',
	multiSelect = false,
	options,
	selectedOptions,
	setSelectedOptions,
	clickOption,
	bottomButton,
	...rest
}: Props) => {
	const [inputValue, setInputValue] = useState('');
	const [showOptions, setShowOptions] = useState(false);
	const optionRef = useRef<HTMLUListElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const selectedRef = useRef<HTMLDivElement | null>(null);
	const [filtered, setFiltered] = useState<ISelectBoxOption[]>(
		options.filter((option) => option.name.indexOf(inputValue) !== -1)
	);
	const onClickList = (item: ISelectBoxOption) => {
		if (typeof clickOption === 'function') {
			clickOption(item);
			setInputValue('');
			setShowOptions(false);
		}
	};
	const onFocusInput = () => {
		setShowOptions(true);
	};
	const setFocusInput = () => {
		inputRef.current?.childNodes.forEach((node: HTMLElement) => {
			if (node.className.indexOf('input-component') !== -1) {
				node.getElementsByTagName('input')[0].focus();
			}
		});
	};
	const setInputOffset = (x: number, y: number) => {
		inputRef.current?.childNodes.forEach((node: HTMLElement) => {
			if (node.className.indexOf('input-component') !== -1) {
				node.style.top = y + 'px';
				node.style.left = x + 'px';
			}
		});
	};
	const isSelected = (item: ISelectBoxOption) => {
		if (!selectedOptions.length) return false;
		return (
			selectedOptions.filter((option) => option.value === item.value).length > 0
		);
	};

	useEffect(() => {
		setFiltered(
			options.filter(
				(option) =>
					option.name.toLocaleLowerCase().indexOf(inputValue.toLowerCase()) !==
					-1
			)
		);
	}, [inputValue, options]);

	useEffect(() => {
		let autoElements = document.getElementsByClassName(
			'auto-complete-wrap'
		) as HTMLCollectionOf<HTMLElement>;
		if (selectedRef.current) {
			if (selectedRef.current.clientHeight + 18 > 55) {
				// input box more 2 lines
				autoElements[0].style.height = selectedRef.current?.clientHeight + 18 + 'px';
			}
		}
		if (selectedOptions.length > 0) {
			const child = selectedRef.current?.children!;
			const last = child[child?.length - 1];
			const rect = last.getBoundingClientRect();
			const parentRect = inputRef.current!.getBoundingClientRect(); // offset x, offset y, width, height
			setInputOffset(
				rect.x - parentRect.x + rect.width + 6,
				rect.y - parentRect.y - 2
			);
		} else {
			setInputOffset(8, 0);
		}
	}, [selectedOptions]);

	useEffect(() => {
		const hideOptions = (e: MouseEvent) => {
			if (
				optionRef.current!.contains(e.target as Node) ||
				inputRef.current?.contains(e.target as Node)
			) {
			} else {
				setShowOptions(false);
			}
		};
		window.addEventListener('click', hideOptions);
		return () => {
			window.removeEventListener('click', hideOptions);
		};
	}, []);

	return (
		<div
			className='auto-complete-wrap'
			style={{ width: width, height: height }}
			onClick={setFocusInput}>
			<div ref={inputRef}>
				{selectedOptions.length > 0 && (
					<div className='selected-option-wrap' ref={selectedRef}>
						{selectedOptions.map((option) => (
							<span
								className='selected-option-name'
								key={`multi-select-selected-${option.value}`}>
								{selectPrefix}
								{option.name}
							</span>
						))}
					</div>
				)}
				<Input
					{...rest}
					style={{ width: '100%' }}
					className='auto-complete-input'
					value={inputValue}
					inputStyle={{
						...rest.inputStyle,
						padding: '2px 0',
						height: '100%',
					}}
					onFocus={onFocusInput}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => {
						if (
							e.keyCode === 8 &&
							inputValue === '' &&
							selectedOptions.length > 0
						) {
							setSelectedOptions(
								selectedOptions.slice(0, selectedOptions.length - 1)
							);
						}
					}}
				/>
			</div>
			<div
				className={`auto-complete-list-wrap ${bottomButton ? 'has-bottom-button' : ''}`}
				style={{ display: showOptions ? 'block' : 'none' }}
			>
				<ul
					className='auto-complete-list'
					ref={optionRef}>
					{filtered.length > 0 ? (
						filtered.map((item) => (
							<li
								className={isSelected(item) ? 'selected' : ''}
								onClick={() => onClickList(item)}
								key={`multi-select-option-${item.value}`}>
								{item.additionalHtml?.position === 'before' && item.additionalHtml.html}
								<span style={{ marginRight: 6 }}>{item.name}</span>
								{item.additionalHtml?.position === 'after' && item.additionalHtml.html}
								<span
									style={{ display: isSelected(item) ? 'inline-block' : 'none' }}>
									<Icon name='checkmark-outline' size='14' fill='#296df1' />
								</span>
							</li>
						))
					) : (
						<li>No result found</li>
					)}
				</ul>
				{bottomButton && 
				<button 
					className={`bottom-button ${bottomButton.className ? bottomButton.className : ''}`}
					style={bottomButton.style} 
					onClick={() => {
						bottomButton.action(inputValue);
						if (bottomButton.callback) {
							if (bottomButton.callback.focus) {
								setFocusInput();
							}
							if (bottomButton.callback.removeInput) {
								setInputValue('');
							}
						}
					}}
				>
					{bottomButton.title}
				</button>
				}
			</div>
		</div>
	);
};

export default MultiSelectBox;

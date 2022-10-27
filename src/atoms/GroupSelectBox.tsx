import React, { useState, useRef, useEffect, CSSProperties } from 'react';
import './GroupSelectBox.scss';
import Icon from 'react-eva-icons';
import Input from './Input';
import { ISelectBoxOption } from './SelectBox';

type Props = {
	options: ISelectBoxOption[];
	selectedOption: ISelectBoxOption;
	style?: CSSProperties;
	onSelectOptionSet: (option: any, group: any) => void;
	disabled?: boolean;
};

const GroupSelectBox = ({
	options,
	selectedOption,
	style,
	onSelectOptionSet,
	disabled,
}: Props) => {
	const selectedRef = useRef<HTMLDivElement>(null);
	const selectBoxRef = useRef<HTMLDivElement>(null);
	const selectListRef = useRef<HTMLUListElement>(null);
	const [isShowList, setShowList] = useState<boolean>(false);
	const [listPosition, setListPosition] = useState<'top' | 'bottom'>('bottom');
	const additionalHtml = selectedOption.additionalHtml || {position: null, html: null};

	const groupedOptions = {};

	options.forEach((option) => {
		if (!option.optgroup) return;
		if (!groupedOptions[option.optgroup]) groupedOptions[option.optgroup] = [];
		const item: any = {
			value: option.value,
			name: option.name,
			disable: option.disable ? option.disable : false
		};
		if (option.additionalHtml) {
			item.additionalHtml = option.additionalHtml;
		}
		groupedOptions[option.optgroup].push(item);
	});

	let selectItem = selectedRef.current;
	let listHeight;

	const handleEventListener = (e: any) => {
		if (
			isShowList &&
			(e.target !== selectBoxRef.current ||
				e.target !== selectedRef.current ||
				e.target !== selectListRef.current)
		) {
			setShowList(!isShowList);
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleEventListener);
		return function cleanup() {
			document.removeEventListener('click', handleEventListener);
		};
	}, [isShowList]);

	const onClickOption = (
		option: { value: any; name: string },
		group: string
	) => {
		onSelectOptionSet(option, group);
		// selectItem && (selectItem.style.marginBottom = '0');
		setShowList(false);
	};
	const onToggleSelectBox = () => {
		if (!isShowList) {
			// 리스트가 열린다면?
			let wh = window.innerHeight;
			let magicNumber = 3; // selectItem의 위 아래 border(2) + list의 하단 border(1)
			let listMaxHeight = 0;

			if (selectItem) {
				listMaxHeight =
					wh -
					(selectItem.getBoundingClientRect().top + selectItem.clientHeight) -
					magicNumber;
			}
			let maxStretchSize = 50; //
			let liHeight = 36;

			let originListHeight = liHeight * options.length;
			if (originListHeight > 268) {
				originListHeight = 268;
			}
			if (
				wh - originListHeight <
				selectedRef.current!.getBoundingClientRect().y
			) {
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
		setShowList(!isShowList);
	};

	// console.log('object', groupedOptions, selectedOption);

	return disabled ? (
		<Input disabled={true} value={selectedOption.name} />
	) : (
		<div
			tabIndex={0}
			ref={selectBoxRef}
			className='select-box'
			onClick={onToggleSelectBox}
			style={{ ...style }}>
			
			<div ref={selectedRef} className='selected-item'>
				<>
				{additionalHtml.position === 'before' && 
					additionalHtml.html
				}
				</>
				<span style={{margin: (additionalHtml.position === 'before' && additionalHtml.position !== null) ? '0 0 0 8px' : '0 8px 0 0'}}>
					{selectedOption.name}
				</span>
				<>
				{additionalHtml.position === 'after' && 
					additionalHtml.html
				}
				</>
			</div>
			
			<Icon name='arrow-ios-downward-outline' size='18' />
			{isShowList && (
				<ul
					ref={selectListRef}
					className={`list list-${listPosition}`}
					style={{ height: `${listHeight + 'px'}` }}>
					{Object.keys(groupedOptions).map((group, index) => {
						return (
							<li className="option list-group" key={`list-group-${group}-${index}`}>
								<span className="group-select-label">{group}</span>
								<ul>
								 	{groupedOptions[group].map((option: any) => {
										return (
											<li
												className={`option-item ${selectedOption.value === option.value ? 'selected' : ''} ${option.disable ? 'disable' : ''}`}
												key={option.name}
												onClick={() => {
													if (!option.disable) {
														onClickOption(option, group);
													}
												}}>
												{option.additionalHtml !== undefined
													? <>
														{option.additionalHtml.position === 'before' && 
															option.additionalHtml.html
														}
														<span style={{margin: option.additionalHtml.position === 'before' ? '0 0 0 8px' : '0 8px 0 0'}}>
															{option.name}
														</span>
														{option.additionalHtml.position === 'after' && 
															option.additionalHtml.html
														}
													</>
													: option.name
												}
												{/* {option.name} */}
											</li>
										);
									})}
								</ul>
							</li>
							// <optgroup className='option' key={index} label={group}>
							// 	{groupedOptions[group].map((option: any) => {
							// 		return (
							// 			<option
							// 				className={`option-item ${selectedOption.value === option.value ? 'selected' : ''} ${option.disable ? 'disable' : ''}`}
							// 				key={option.name}
							// 				onClick={() => {
							// 					if (!option.disable) {
							// 						onClickOption(option, group);
							// 					}
							// 				}}>
							// 				{option.additionalHtml !== undefined
							// 					? <>
							// 						{option.additionalHtml.position === 'before' && 
							// 							option.additionalHtml.html
							// 						}
													
							// 							{option.name}
													
							// 						{option.additionalHtml.position === 'after' && 
							// 							option.additionalHtml.html
							// 						}
							// 					</>
							// 					: option.name
							// 				}
							// 				{/* {option.name} */}
							// 			</option>
							// 		);
							// 	})}
							// </optgroup>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default GroupSelectBox;

import './Counter.scss';
import React, { useState, useEffect, CSSProperties } from 'react';
import Button from '../atoms/Button';
export interface Props {
    style?: CSSProperties;
	defaultValue?: number;
	min?: number;
	max?: number;
}
const Counter = ({ style, defaultValue = 0, min = 0, max }: Props) => {
	if (min < 0) {
		console.warn('props min must be greater than 0');
		min = 0;
	}
	if (defaultValue < min) {
		defaultValue = min;
	}
	const [value, setValue] = useState<number|''>(defaultValue);
	const [buttonState, setButtonState] = useState({
		minus: true,
		plus: true
	});
	const validateCheck = (eventType = 'change') => {
		if (min !== undefined) {
			if (value <= min) {
				setButtonState({
					...buttonState,
					minus: false
				});
				if (min === 0 || eventType === 'blur') setValue(min);
			} else if (!buttonState.minus) {
				setButtonState({
					...buttonState,
					minus: true
				});
			}
		}
		if (max !== undefined) {
			if (value >= max) {
				setButtonState({
					...buttonState,
					plus: false
				});
				setValue(max);
			} else if (!buttonState.plus) {
				setButtonState({
					...buttonState,
					plus: true
				});
			}
		}
	}
	useEffect(() => {
		if (value === '') return;
		console.log(value);
		validateCheck();
	}, [value]);
	return (
		<div className="counter-wrap" style={{...style}}>
			{buttonState.minus
			? <Button 
				size="xs"
				iconName='minus-outline'
				iconSize="8"
				type='lightsolid'
				onClick={() => {
					setValue(+value -1);
					// validateCheck();
				}}
			/>
			: <Button 
				size="xs"
				iconName='minus-outline'
				iconSize="8"
				iconFill="red"
				type='lightsolid'
				disabled
			/>
			}
			<input 
				style={{width: value.toString().length * 9 + 22}}
				type="text"
				value={value}
				onChange={e => {
					if (e.target.value === '') {
						setValue('');
					} else {
						setValue(+e.target.value.replace(/[^0-9]/gi, ''))
					}
				}}
				onBlur={() => validateCheck('blur')}
			/>
			{buttonState.plus
			? <Button 
				size='xs'
				iconName='plus-outline'
				iconSize="9"
				type='lightsolid'
				onClick={() => {
					console.log(value)
					setValue(+value + 1);
					// validateCheck();
				}}
			/>
			: <Button 
				size="xs"
				iconName='plus-outline'
				iconSize="9"
				iconFill="red"
				type='lightsolid'
				disabled
			/>
			}
			
		</div>
	)
}

export default Counter;

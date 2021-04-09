import './Counter.scss';
import React, { useState, useEffect, CSSProperties } from 'react';
import Button from '../atoms/Button';
interface Props {
    style?: CSSProperties;
	defaultValue?: number;
	min?: number;
	max?: number;
}
const Counter = ({ style, defaultValue = 0, min = 0, max }: Props) => {
	const [value, setValue] = useState(defaultValue);
	const [buttonState, setButtonState] = useState({
		minus: true,
		plus: true
	});
	useEffect(() => {
		if (min !== undefined) {
			if (value <= min) {
				setButtonState({
					...buttonState,
					minus: false
				});
				setValue(min);
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
	}, [value]);
	return (
		<div className="counter-wrap" style={{...style}}>
			{buttonState.minus
			? <Button 
				size="xs"
				iconName='minus-outline'
				iconSize="8"
				type='lightsolid'
				onClick={() => setValue(value -1)}
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
					setValue(+e.target.value.replace(/[^0-9]/gi, ''))
				}}
			/>
			{buttonState.plus
			? <Button 
				size='xs'
				iconName='plus-outline'
				iconSize="9"
				type='lightsolid'
				onClick={() => setValue(value + 1)}
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

import './DatePicker.scss';
import React from 'react';
import { DatePicker as AntDatePicker, DatePickerProps } from 'antd';
const DatePicker = (props: DatePickerProps) => {
	return (
		<AntDatePicker
			className="wb-datepicker"
			{...props}
		/>
	)
}

export default DatePicker;

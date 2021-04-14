import './RangePicker.scss';
import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
const AntRangePicker = AntDatePicker.RangePicker;

const RangePicker = (props: React.ComponentProps<typeof AntRangePicker>) => {
	return (
		<AntRangePicker
			className="wb-rangepicker"
			separator="~"
			{...props}
		/>
	)
}

export default RangePicker;

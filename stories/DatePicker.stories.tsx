import React from 'react';
import { DatePicker } from 'antd';

export default {
    title: 'DatePicker',
    component: DatePicker,
    decorators: []
};

const { RangePicker } = DatePicker;

export const DatePickerStory = () => {
    return (
        <DatePicker placeholder='0000-00-00' />
    )
}

export const RangePickerStory = () => {
    return (
        <RangePicker placeholder={['0000-00-00', '0000-00-00']} />
    )
}
import React from 'react';
import { TimePicker } from 'antd';

export default {
    title: 'TimePicker',
    component: TimePicker,
    decorators: []
};

export const TimePickerStory = () => {
    return (
        <TimePicker placeholder='00:00' use12Hours format='h:mm a' minuteStep={5} />

    )
}

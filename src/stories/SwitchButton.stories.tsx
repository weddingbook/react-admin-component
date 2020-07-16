import React, { useState } from 'react';
import { SwitchButton } from '../index';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs'

export default {
    title: '토글 스위치',
    component: SwitchButton,
    decorators: [withKnobs]
};

export const ToggleButtonStory = () => {
    const [toggle, setToggle] = useState(false);

    return <SwitchButton
        toggleHeight={number('토글 높이', 24)}
        toggleType={select('토글 타입', {
            normal: 'normal',
            text: 'text'
        }, 'normal')}
        onText={text('토글 on 텍스트', '영업')}
        offText={text('토글 off 텍스트', '휴무')}
        toggleValue={boolean('토글값', toggle)}
        onClick={setToggle}
    />
}
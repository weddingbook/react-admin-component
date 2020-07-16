import React from 'react';
import { Button } from '../index'
import { withKnobs } from '@storybook/addon-knobs'
import { PopupArea, createPopup } from '../molecules/Popup';


export default {
    title: '팝업',
    component: PopupArea,
    decorators: [withKnobs]
};

export const PopupStory = () => {
    const onCreatePopup = () => {
        createPopup({
            type: 'alert',
            message: '안녕하세요',
            closeOnClickOutside: true,
            button: {
                'label': '확인',
                'action': () => {},
            },
        })
    }
    return (
        <>
            <Button onClick={onCreatePopup}>팝업</Button>
        </>
    )
}


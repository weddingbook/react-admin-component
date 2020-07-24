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
            button: {
                'label': '확인',
                'action': () => { },
            },
        })
    }
    const onCreatePopup2 = () => {
        createPopup({
            type: 'confirm',
            messageType: 'fail',
            message: '안녕하세요',
            closeOnClickOutside: false,
            buttons: [{
                'label': '취소',
                'type': 'line',
                'action': () => { },
            }, {
                'label': '확인',
                'color': 'red',
                'action': () => { },
            }],
        })
    }
    return (
        <>
            <Button onClick={onCreatePopup}>1버튼 팝업</Button>
            <Button onClick={onCreatePopup2}>2버튼 팝업</Button>
        </>
    )
}


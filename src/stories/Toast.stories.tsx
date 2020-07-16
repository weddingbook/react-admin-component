import React from 'react';
import { Button, ToastContainer } from '../index'
import { withKnobs } from '@storybook/addon-knobs'
import { useToast } from '../hooks/useToast';


export default {
    title: '토스트',
    component: ToastContainer,
    decorators: [withKnobs]
};

export const ToastStory = () => {
    const { toasts, removeToast, removeToastState, createToast } = useToast();
    return (
        <>
            <Button onClick={() => {
                createToast({ id:'1', removeToast, removeToastState, messageType: 'success', delay: 3000, message: `1,000 포인트 지급되었습니다.`, position: 'RIGHT_TOP', color: 'red' });
            }}>RGHT_TOP</Button>
            <ToastContainer
                toasts={toasts}
                removeToast={removeToast}
                removeToastState={removeToastState}
            />
        </>
    )
}


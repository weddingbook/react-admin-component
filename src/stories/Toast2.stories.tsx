import React from 'react';
import { Button } from '../index'
import { withKnobs } from '@storybook/addon-knobs'
import ToastContainer2 from '../molecules/ToastContainer'
import { useToast2 } from '../hooks/useToast2';


export default {
    title: '토스트2',
    component: ToastContainer2,
    decorators: [withKnobs]
};

export const ToastStory = () => {
    const { toastList, setToastList, createToast, removeToast } = useToast2()
    return (
        <>
            <Button onClick={() => {
                createToast({ id: '1', removeToast, color: 'yellow' });
            }}>RGHT_TOP</Button>
            <ToastContainer2 toastList={toastList} setToastList={setToastList}/>
        </>
    )
}


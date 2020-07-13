import React from 'react';
import Popup from '../components/molecules/Popup'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Button from '../components/atoms/Button';

export default {
    title: '팝업',
    component: Popup,
    decorators: [withKnobs]
};
const onClick = () => {};

export const PopupStoryZeroButton = () => <Popup
    children={text('팝업 내용', '1,000 포인트 지급되었습니다.')}
    color={select('색깔', {
        green: 'green',
        yellow: 'yellow',
        red: 'red'
    }, 'green')}
/>

export const PopupStoryOneButton = () => <Popup
    children={text('팝업 내용', '용량 초과로 업로드에 실패했습니다.')}
    color={select('색깔', {
        green: 'green',
        yellow: 'yellow',
        red: 'red'
    }, 'red')}
    actionButtonComponent={<Button onClick={onClick} size='small' type='solid'>확인</Button>}
/>

export const PopupStoryTwoButton = () => <Popup
    children={text('팝업 내용', '정말 메시지를 삭제하시겠습니까? 삭제하시면 다시 돌이킬 수 없습니다.')}
    color={select('색깔', {
        green: 'green',
        yellow: 'yellow',
        red: 'red'
    }, 'red')}
    cancelButtonComponent={<Button onClick={onClick} size='small' type='line'>취소</Button>}
    actionButtonComponent={<Button onClick={onClick} size='small' color='red' type='solid'>삭제</Button>}
/>
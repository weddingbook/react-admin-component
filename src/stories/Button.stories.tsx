import React from 'react';
import { Button } from '../index'
import { withKnobs, text, select } from '@storybook/addon-knobs'


export default {
    title: '버튼',
    component: Button,
    decorators: [withKnobs]
};

export const ButtonStory = () => <Button
    children={text('버튼내용', '버튼')}
    type={select('버튼타입', {
        solid: 'solid',
        line: 'line',
        text: 'text',
        link: 'link'
    }, 'solid')}
    color={select('색깔', {
        blue: 'blue',
        green: 'green',
        yellow: 'yellow',
        red: 'red'
    }, 'blue')}
    size={select('사이즈', {
        large: 'large',
        middle: 'middle',
        small: 'small',
        xs: 'xs'
    }, 'middle')}
    iconName={select('아이콘', {
        none: '',
        'trash-2-outline': 'trash-2-outline',
        'search-outline': 'search-outline',
        'headphones-outline': 'headphones-outline',
    }, '')}
/>

export const ButtonStoryDisabled = () => <Button
    type={select('버튼타입', {
        solid: 'solid',
        line: 'line',
        text: 'text',
        link: 'link'
    }, 'solid')}
    color={select('색깔', {
        blue: 'blue',
        green: 'green',
        yellow: 'yellow',
        red: 'red'
    }, 'blue')}
    disabled={true}
/>
export const ButtonStoryText = () => <Button type="text" color="red" />
export const ButtonStoryWithIcon = () =>
    <>
        <Button size='small' iconName='search-outline' type='line' ></Button>
        <Button size='small' iconName='search-outline' type='line' >아이콘</Button>
        <Button type='line' size='small'>수정</Button>
        <Button size='xs' iconName='search-outline' type='line' ></Button>
        <Button size='xs' iconName='search-outline' type='line' >아이콘</Button>
        <Button type='line' size='xs'>수정</Button>
        <Button size='large' iconName='search-outline' type='line' ></Button>
        <Button size='large' iconName='search-outline' type='line' >아이콘</Button>
        <Button type='line' size='large'>수정</Button>
        <Button iconName='search-outline' type='line' ></Button>
        <Button iconName='search-outline' type='line' >아이콘</Button>
        <Button type='line' >수정</Button>
    </>
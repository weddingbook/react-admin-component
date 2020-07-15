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
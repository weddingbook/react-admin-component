import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Tag from '../components/atoms/Tag';


export default {
    title: '태그',
    component: Tag,
    decorators: [withKnobs]
};

export const ButtonStory = () => <Tag
    children={text('태그내용', '태그')}
    color={select('색깔', {
        green: 'green',
        yellow: 'yellow',
        red: 'red'
    }, 'green')}
/>
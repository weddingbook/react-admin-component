import React from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import RadioAndCheckBoxInput from './RadioAndCheckBoxInput';

export default {
    title: 'RadioAndCheckBoxInput',
    component: RadioAndCheckBoxInput,
    decorators: [withKnobs]
};

export const RadioAndCheckBoxInputStory = () => {
    return (
        <RadioAndCheckBoxInput/>
    )
}
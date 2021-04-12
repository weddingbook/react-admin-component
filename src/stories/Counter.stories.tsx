import React from 'react';
import { Counter } from '../index'
import {withKnobs, number, text, select} from '@storybook/addon-knobs'


export default {
    title: 'Counter',
	component: Counter,
    decorators: [withKnobs],
	parameters: {
		backgrounds: {
			default: 'white'
		}
	}
};
export const CounterStory = () => {
	return (
		<Counter defaultValue={number('defaultValue', 2)} max={number('max', 20)} />
	)
}
export const CounterHasMinStory = () => {
	return (
		<Counter min={number('min', 5)} />
	)
}
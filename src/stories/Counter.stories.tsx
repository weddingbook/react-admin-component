import React from 'react';
import { Counter } from '../index'
import {withKnobs, text, select} from '@storybook/addon-knobs'


export default {
    title: 'Counter',
    decorators: [withKnobs],
	parameters: {
		backgrounds: {
			default: 'white'
		}
	}
};
export const CounterStory = () => {
	return (
		<Counter />
	)
}
export const CounterMaxStory = () => {
	return (
		<Counter max={10} />
	)
}
// import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

export const parameters = {
	docs: {
		container: DocsContainer,
		page: DocsPage
	},
	backgrounds: {
		default: 'light-blue',
		values: [
			{
				name: 'white',
				value: '#fff',
			},
			{
				name: 'light-blue',
				value: '#eef2fa',
			}
		],
	},
};
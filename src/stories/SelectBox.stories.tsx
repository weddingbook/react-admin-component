import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
	SelectBox,
	MultiSelectBox,
	ISelectBoxOption,
	GroupSelectBox,
} from '../index';

export default {
	title: 'SelectBox',
	component: SelectBox,
	decorators: [withKnobs],
};

const optionList = [
	'안녕',
	'길다길어셀렉트 길다길어 셀렉트2',
	'길다길어셀렉트 길다길어 셀렉트3',
	'ㅇㅇ',
	'ㄴㄴ',
];
const optionList2 = optionList.map((value) => ({ name: value, value }));
const optionList3: ISelectBoxOption[] = [
	{ name: 'hi', value: 'hi' },
	{ name: 'second', value: 2 },
	{
		name: 'test',
		value: 'test',
		additionalHtml: {
			position: 'before',
			html: <span style={{ color: 'red' }}>additional html before</span>,
		},
	},
	{
		name: 'test2',
		value: 'test2',
		additionalHtml: {
			position: 'after',
			html: <span style={{ color: 'blue' }}>additional html after</span>,
		},
	},
];

const options = [
	{
		value: 'G1-1',
		name: 'One',
		optgroup: 'Group 1',
	},
	{
		value: 'G1-2',
		name: 'Two',
		optgroup: 'Group 1',
	},
	{
		value: 'G1-3',
		name: 'Three',
		optgroup: 'Group 1',
	},
	{
		value: 'G1-4',
		name: 'Four',
		optgroup: 'Group 1',
	},
	{
		value: 'G2-1',
		name: 'One',
		optgroup: 'Group 2',
	},
	{
		value: 'G2-2',
		name: 'Two',
		optgroup: 'Group 2',
	},
	{
		value: 'G2-3',
		name: 'Three',
		optgroup: 'Group 3',
	},
	{
		value: 'G2-4',
		name: 'Four',
		optgroup: 'Group 4',
	},
];

export const SelectBoxStory = () => {
	const [selectedOption, onSelectedOptionSet] = useState({
		name: '안녕',
		value: '안녕',
	});

	const onSet = (option: any) => {
		onSelectedOptionSet(option);
	};

	return (
		<SelectBox
			style={{ width: '300px' }}
			selectedOption={selectedOption}
			options={optionList2}
			onSelectOptionSet={onSet}
		/>
	);
};

export const SelectBoxStoryWithDisabled = () => {
	const [selectedOption, onSelectedOptionSet] = useState({
		name: '안녕',
		value: '안녕',
	});

	const onSet = (option: any) => {
		onSelectedOptionSet(option);
	};

	return (
		<SelectBox
			disabled={true}
			style={{ width: '300px' }}
			selectedOption={selectedOption}
			options={optionList2}
			onSelectOptionSet={onSet}
		/>
	);
};
export const selectBoxAdditionalHtml = () => {
	const [selectedOption, onSelectedOptionSet] = useState({
		name: 'hi',
		value: 'hi',
	});

	const onSet = (option: any) => {
		onSelectedOptionSet(option);
	};
	return (
		<SelectBox
			style={{ width: '300px' }}
			selectedOption={selectedOption}
			options={optionList3}
			onSelectOptionSet={onSet}
		/>
	);
};
export const SelectBoxPositionBottom = () => {
	const [selectedOption, onSelectedOptionSet] = useState({
		name: '안녕',
		value: '안녕',
	});

	const onSet = (option: any) => {
		onSelectedOptionSet(option);
	};
	return (
		<div style={{ position: 'absolute', bottom: 0, left: 0 }}>
			<SelectBox
				style={{ width: '300px' }}
				selectedOption={selectedOption}
				options={optionList2}
				onSelectOptionSet={onSet}
			/>
		</div>
	);
};

export const MultiSelectBoxStory = () => {
	const [data, setData] = useState<ISelectBoxOption[]>([
		{ name: 'Hi1', value: 'hi1' },
		{ name: 'Hi2', value: 'hi2' },
		{ name: 'Hi3', value: 'hi3' },
		{ name: 'Hi4', value: 'hi4' },
		{ name: 'Hi5', value: 'hi5' },
		{ name: 'hi6', value: 'hi6' },
		{ name: 'hi7', value: 'hi7' },
		{ name: 'hi8', value: 'hi8' },
		{ name: 'hi9', value: 'hi9' },
	]);
	const [selectedOptions, setSelectedOptions] = useState<ISelectBoxOption[]>(
		[]
	);
	return (
		<MultiSelectBox
			width='200px'
			style={{ minWidth: '200px' }}
			options={data}
			selectedOptions={selectedOptions}
			setSelectedOptions={setSelectedOptions}
			selectPrefix='@'
			bottomButton={{
				title: 'button',
				action: () => {
					alert('click button');
				}
			}}
			clickOption={(item) => {
				if (
					selectedOptions.filter((option) => option.value === item.value).length
				) {
					setSelectedOptions(
						selectedOptions.filter((option) => option.value !== item.value)
					);
				} else {
					setSelectedOptions([...selectedOptions, item]);
				}
			}}
		/>
	);
};

export const GroupSelectBoxStoryBox = () => {
	const [selectedOption, onSelectedOptionSet] = useState({
		name: 'G2-4',
		value: 'Four',
		optgroup: 'Group 4',
	});

	const onSet = (option: any, group: any) => {
		console.log('object', option, group);
		onSelectedOptionSet(option);
	};
	return (
		<GroupSelectBox
			style={{ width: '300px' }}
			selectedOption={selectedOption}
			options={options}
			onSelectOptionSet={onSet}
		/>
	);
};

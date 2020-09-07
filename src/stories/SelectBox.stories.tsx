import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import { SelectBox } from '../index';

export default {
    title: 'SelectBox',
    component: SelectBox,
    decorators: [withKnobs]
};

const optionList = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3', 'ㅇㅇ', 'ㄴㄴ']
const optionList2 = optionList.map(value => ({ name: value, value }))

export const SelectBoxStory = () => {
    const [selectedOption, onSelectedOptionSet] = useState({ name: '안녕', value: '안녕' });
    const [options, setOptions] = useState(optionList2);

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }
    return (
        <SelectBox style={{ width: '300px' }} selectedOption={selectedOption} options={options} onSelectOptionSet={onSet} />
    )
}
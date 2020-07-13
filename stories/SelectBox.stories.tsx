import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import SelectBox from '../components/atoms/SelectBox';

export default {
    title: 'SelectBox',
    component: SelectBox,
    decorators: [withKnobs]
};

export const SelectBoxStory = () => {
    const [selectedOption, onSelectedOptionSet] = useState('안녕');
    const [options, setOptions] = useState(['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3', 'ㅇㅇ', 'ㄴㄴ']);

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }
    return (
        <SelectBox style={{ width: '300px'}}  selectedOption={selectedOption} options={options} onSelectOptionSet={onSet}/>
    )
}
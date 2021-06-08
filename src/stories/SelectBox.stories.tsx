import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import { SelectBox, MultiSelectBox, ISelectBoxOption } from '../index';

export default {
    title: 'SelectBox',
    component: SelectBox,
    decorators: [withKnobs]
};

const optionList = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3', 'ㅇㅇ', 'ㄴㄴ']
const optionList2 = optionList.map(value => ({ name: value, value }))
const optionList3: ISelectBoxOption[] = [
    { name: 'hi', value: 'hi' },
    { name: 'second', value: 2 },
    {
        name: 'test',
        value: 'test',
        additionalHtml: {
            position: 'before',
            html: <span style={{ color: 'red' }}>additional html before</span>
        }
    },
    {
        name: 'test2',
        value: 'test2',
        additionalHtml: {
            position: 'after',
            html: <span style={{ color: 'blue' }}>additional html after</span>
        }
    }
]

export const SelectBoxStory = () => {
    const [selectedOption, onSelectedOptionSet] = useState({ name: '안녕', value: '안녕' });

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }

    return (
        <SelectBox style={{ width: '300px' }} selectedOption={selectedOption} options={optionList2} onSelectOptionSet={onSet} />
    )
}

export const SelectBoxStoryWithDisabled = () => {
    const [selectedOption, onSelectedOptionSet] = useState({ name: '안녕', value: '안녕' });

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }

    return (
        <SelectBox disabled={true} style={{ width: '300px' }} selectedOption={selectedOption} options={optionList2} onSelectOptionSet={onSet} />
    )
}
export const selectBoxAdditionalHtml = () => {
    const [selectedOption, onSelectedOptionSet] = useState({ name: 'hi', value: 'hi' });

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }
    return (
        <SelectBox style={{ width: '300px' }} selectedOption={selectedOption} options={optionList3} onSelectOptionSet={onSet} />
    )
}
export const SelectBoxPositionBottom = () => {
    const [selectedOption, onSelectedOptionSet] = useState({ name: '안녕', value: '안녕' });

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }
    return (
        <div style={{ position: 'absolute', bottom: 0, left: 0 }}>
            <SelectBox style={{ width: '300px' }} selectedOption={selectedOption} options={optionList2} onSelectOptionSet={onSet} />
        </div>
    )
}

export const MultiSelectBoxStory = () => {
    const [data, setData] = useState<ISelectBoxOption[]>([{ name: 'hi1', value: 'hi1' }, { name: 'hi2', value: 'hi2' }, { name: 'hi3', value: 'hi3' }]);
    const [selectedOptions, setSelectedOptions] = useState<ISelectBoxOption[]>([]);
    return (
        <MultiSelectBox
            style={{ minWidth: '200px' }}
            options={data}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            selectPrefix="@"
            clickOption={item => {
                if (selectedOptions.filter(option => option.value === item.value).length) {
                    setSelectedOptions(selectedOptions.filter(option => option.value !== item.value));
                } else {
                    setSelectedOptions([...selectedOptions, item]);
                }
            }}
        />
    )
}
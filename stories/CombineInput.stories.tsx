import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import CombineInput from '../components/molecules/CombineInput';
import SelectBox from '../components/atoms/SelectBox';
import SpecialInput from '../components/atoms/SpecialInput';

import InputWrapper from '../components/molecules/InputWrapper';

export default {
    title: 'Combine Input',
    component: CombineInput,
    decorators: [withKnobs]
};

export const CombineInputStoryWithSelectBox = () => {
    const [selectedOption, onSelectedOptionSet] = useState('안녕');
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }
    return <CombineInput title='Combined'>
        <SelectBox options={options} style={{ width: '300px' }} selectedOption={selectedOption} onSelectOptionSet={onSet} />
        <input placeholder='혼나자'></input>
        <SpecialInput iconName='people-outline' afterString='명'>
            <input placeholder='보증인원'></input>
        </SpecialInput>
    </CombineInput>
}

export const CombineInputStoryOnlyInputText = () => {
    return <CombineInput title='Combined'>
        <input placeholder='placeholder'></input>
        <input placeholder='안녕'></input>
        <input placeholder='혼나자'></input>
    </CombineInput>
}

export const CombineInputStoryWithNormalSpecialWrapper = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];


    return <CombineInput title='input > CombineInput'>
        <input placeholder='일반 input'></input>
        <SpecialInput iconName='people-outline' afterString='명'>
            <input placeholder='보증인원'></input>
        </SpecialInput>
        <InputWrapper options={options} onSelectOptionSet={onSetInputValue}>
            <input placeholder='추천 검색어 있는 input' value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }} />
        </InputWrapper>
    </CombineInput>
}

export const CombineInputStoryWithSpecialWrapperNormal = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return <CombineInput title='InputWrapper > CombineInput'>
        <SpecialInput style={{ width: '400px' }} iconName='search-outline'>
            <input placeholder='입력하면 바로 검색합니다.'></input>
        </SpecialInput>
        <InputWrapper options={options} onSelectOptionSet={onSetInputValue}>
            <input placeholder='추천 검색어 있는 input' value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }} />
        </InputWrapper>
        <input placeholder='보증인원'></input>
    </CombineInput>
}

export const CombineInputStoryWithWrapperNormalSpecial = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return < CombineInput title='SpecialInput > CombineInput' >
        <InputWrapper options={options} onSelectOptionSet={onSetInputValue}>
            <input placeholder='추천 검색어 있는 input' value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }} />
        </InputWrapper>
        <input placeholder='보증인원'></input>
        <SpecialInput style={{ width: '400px' }} iconName='search-outline'>
            <input placeholder='입력하면 바로 검색합니다.'></input>
        </SpecialInput>
    </CombineInput >
}

export const CombineInputStoryWithSpecialNormalWrapper = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return <CombineInput title='input > CombineInput'>
        <SpecialInput style={{ width: '400px' }} iconName='search-outline'>
            <input placeholder='입력하면 바로 검색합니다.'></input>
        </SpecialInput>
        <input placeholder='보증인원'></input>
        <InputWrapper options={options} onSelectOptionSet={onSetInputValue}>
            <input placeholder='추천 검색어 있는 input' value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }} />
        </InputWrapper>
    </CombineInput>
}

export const CombineInputStoryNormalWrapperSpecial = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return <CombineInput title='InputWrapper > CombineInput'>
        <input placeholder='보증인원'></input>
        <InputWrapper options={options} onSelectOptionSet={onSetInputValue}>
            <input placeholder='추천 검색어 있는 input' value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }} />
        </InputWrapper>
        <SpecialInput style={{ width: '400px' }} iconName='search-outline'>
            <input placeholder='입력하면 바로 검색합니다.'></input>
        </SpecialInput>
    </CombineInput>
}

export const CombineInputStorySpecialNormalWrapper = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return <CombineInput title='SpecialInput > CombineInput'>
        <InputWrapper options={options} onSelectOptionSet={onSetInputValue}>
            <input placeholder='추천 검색어 있는 input' value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }} />
        </InputWrapper>
        <SpecialInput style={{ width: '400px' }} iconName='search-outline'>
            <input placeholder='입력하면 바로 검색합니다.'></input>
        </SpecialInput>
        <input placeholder='보증인원'></input>
    </CombineInput>
}
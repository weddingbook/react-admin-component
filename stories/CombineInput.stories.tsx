import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import CombineInput from '../components/molecules/CombineInput';
import SelectBox from '../components/atoms/SelectBox';
import Input from '../components/atoms/Input';

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
        <Input iconName='people-outline' afterString='명' placeholder='보증인원'/>
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
        <Input iconName='people-outline' afterString='명' placeholder='보증인원'/>
        <Input placeholder='추천 검색어 있는 input' 
            value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }}
            recommendOptions={options} onSelectRecommendOptionSet={onSetInputValue}
        />
    </CombineInput>
}

export const CombineInputStoryWithSpecialWrapperNormal = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return <CombineInput title='InputComponent > CombineInput'>
        <Input style={{width: '400px'}} iconName='search-outline' placeholder='입력하면 바로 검색합니다.'/>
        <Input placeholder='추천 검색어 있는 input' 
            value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }}
            recommendOptions={options} onSelectRecommendOptionSet={onSetInputValue}
        />
        <input placeholder='보증인원'></input>
    </CombineInput>
}

export const CombineInputStoryWithWrapperNormalSpecial = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return < CombineInput title='InputComponent > CombineInput' >
        <Input placeholder='추천 검색어 있는 input' 
            value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }}
            recommendOptions={options} onSelectRecommendOptionSet={onSetInputValue}
        />
        <input placeholder='보증인원'></input>
        <Input style={{width: '400px'}} iconName='search-outline' placeholder='입력하면 바로 검색합니다.'/>
    </CombineInput >
}

export const CombineInputStoryWithSpecialNormalWrapper = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return <CombineInput title='input > CombineInput'>
        <Input style={{width: '400px'}} iconName='search-outline' placeholder='입력하면 바로 검색합니다.'/>
        <input placeholder='보증인원'></input>
        <Input placeholder='추천 검색어 있는 input' 
            value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }}
            recommendOptions={options} onSelectRecommendOptionSet={onSetInputValue}
        />
    </CombineInput>
}

export const CombineInputStoryNormalWrapperSpecial = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return <CombineInput title='InputComponent > CombineInput'>
        <input placeholder='보증인원'></input>
        <Input placeholder='추천 검색어 있는 input' 
            value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }}
            recommendOptions={options} onSelectRecommendOptionSet={onSetInputValue}
        />
        <Input style={{width: '400px'}} iconName='search-outline' placeholder='입력하면 바로 검색합니다.'/>
    </CombineInput>
}

export const CombineInputStorySpecialNormalWrapper = () => {
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    return <CombineInput title='InputComponent > CombineInput'>
        <Input placeholder='추천 검색어 있는 input' 
            value={inputValue} onChange={(e) => { defaultInputValue(e.target.value) }}
            recommendOptions={options} onSelectRecommendOptionSet={onSetInputValue}
        />
        <Input style={{width: '400px'}} iconName='search-outline' placeholder='입력하면 바로 검색합니다.'/>
        <input placeholder='보증인원'></input>
    </CombineInput>
}
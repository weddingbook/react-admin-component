import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import Section from '../components/molecules/Section';
import InputWrapper from '../components/molecules/InputWrapper';
import CombineInput from '../components/molecules/CombineInput';
import SpecialInput from '../components/atoms/SpecialInput';
import { TimePicker, DatePicker } from 'antd';

export default {
    title: 'Input',
    component: Section,
    decorators: [withKnobs]
};

export const InputStory = () => {
    const [options, setOptions] = useState(['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3', 'ㅇㅇ', 'ㄴㄴ']);
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    return (
        <Section title='Input Story'>
            <div className='section-box-item'>
                <label>Normal</label>
                <input placeholder='placeholder'></input>
            </div>
            <div className='section-box-item'>
                <label>Error</label>
                <InputWrapper invalid={true}>
                    <input required={true}></input>
                </InputWrapper>
            </div>
            <div className='section-box-item'>
                <label>Disabled</label>
                <input placeholder='placeholder' disabled></input>
            </div>
            <div className='section-box-item'>
                <label>Info</label>
                <InputWrapper informationMessage='information'>
                    <input placeholder='placeholder'></input>
                </InputWrapper>
            </div>
            <CombineInput title='Combined'>
                <DatePicker placeholder='0000-00-00' />
                <TimePicker placeholder='23:59' use12Hours format="h:mm a" minuteStep={5} />
                <SpecialInput iconName='people-outline' afterString={'명'}>
                    <input placeholder='보증인원'></input>
                </SpecialInput>
                <input placeholder='홀이름' />
            </CombineInput>
            <CombineInput>
                <SpecialInput iconName='people-outline' afterString={'명'}>
                    <input placeholder='보증인원'></input>
                </SpecialInput>
                <input placeholder='홀이름' />
            </CombineInput>
            <div className='section-box-item'>
                <label>Combined</label>
                <textarea style={{ height: '100px' }} />
            </div>
            <div className='section-box-item'>
                <label>Info</label>
                <SpecialInput iconName='search-outline'>
                    <InputWrapper>
                        <input value={inputValue} placeholder='키워드 검색' onChange={(e) => (onSetInputValue(e.target.value))}></input>
                    </InputWrapper>
                </SpecialInput>
            </div>
            <CombineInput>
                <SpecialInput iconName='people-outline' afterString={'명'}>
                    <input placeholder='보증인원'></input>
                </SpecialInput>
                <input placeholder='홀이름' />
                <InputWrapper>
                    <input required={true}></input>
                </InputWrapper>
            </CombineInput>
        </Section>
    )
}
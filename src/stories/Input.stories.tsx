import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import { Section, CombineInput, Input } from '../index'
import { TimePicker, DatePicker } from 'antd';
import Button from '../atoms/Button';

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
                <Input required={true} />
            </div>
            <div className='section-box-item'>
                <label>Disabled</label>
                <input placeholder='placeholder' disabled></input>
            </div>
            <div className='section-box-item'>
                <label>Info</label>
                <Input informationMessage='information' placeholder='placeholder' />
            </div>
            <CombineInput title='Combined'>
                <DatePicker placeholder='0000-00-00' />
                <TimePicker placeholder='23:59' use12Hours format='h:mm a' minuteStep={5} />
                <Input iconName='people-outline' afterString='명' placeholder='보증인원' />
                <input placeholder='홀이름' />
            </CombineInput>
            <CombineInput>
                <Input iconName='people-outline' afterString='명' placeholder='보증인원' />
                <input placeholder='홀이름' />
            </CombineInput>
            <div className='section-box-item'>
                <label>Combined</label>
                <textarea style={{ height: '100px' }} />
            </div>
            <div className='section-box-item'>
                <label>Info</label>
                <Input iconName='search-outline' placeholder='키워드 검색' />
            </div>
            <CombineInput>
                <Input
                    recommendOptions={options}
                    placeholder='hihi'
                    value={inputValue}
                    onChange={(e) => { onSetInputValue(e.target.value) }}
                />
                <Input
                    informationMessage='hihi'
                    value={inputValue}
                    recommendOptions={options}
                    onSelectRecommendOptionSet={onSetInputValue}
                    onChange={(e) => { onSetInputValue(e.target.value) }}
                />
                <Input
                    iconName='people-outline'
                    informationMessage='hihi'
                    afterString='명'
                    recommendOptions={options}
                    placeholder='hihi'
                    value={inputValue}
                    onChange={(e) => { onSetInputValue(e.target.value) }}
                />
            </CombineInput>
        </Section>
    )
}

export const InputStoryWithAutoComplete = () => {
    const [options, setOptions] = useState(['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3', 'ㅇㅇ', 'ㄴㄴ']);
    const [inputValue, defaultInputValue] = useState('')
    const onSetInputValue = (value: string) => {
        defaultInputValue(value)
    }
    return (
        <Section title='Input Story'>
            <Input
                value={inputValue}
                recommendListButton={<>
                    <Button>안녕하세요</Button>
                    <Button size='large' color='yellow'>어서오세요</Button>
                    <Button type='line' size='xs' color='green'>안녕하세요</Button>
                    <Button color='red'>어서오세요</Button>
                </>}
                recommendOptions={options}
                onSelectRecommendOptionSet={onSetInputValue}
                onChange={(e) => { onSetInputValue(e.target.value) }}
            />
        </Section>
    )
}
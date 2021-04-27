import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import { Section, CombineInput, Input } from '../index'
import { TimePicker, DatePicker } from 'antd';
import Button from '../atoms/Button';
import { IRecommendOption } from './../atoms/Input';

export default {
    title: 'Input',
    component: Section,
    decorators: [withKnobs]
};

export const InputStory = () => {
    const [options, setOptions] = useState(
        ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3', 'ㅇㅇ', 'ㄴㄴ'].map(item => ({ name: item, value: item }))
    );
    const [inputValue, defaultInputValue] = useState({ name: '', value: '' })
    const onSetInputValue = (value: ({ name: string, value: any })) => {
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
                    value={inputValue.name}
                    onChange={(e) => { onSetInputValue({ name: e.target.value, value: e.target.value }) }}
                />
                <Input
                    informationMessage='hihi'
                    value={inputValue.name}
                    recommendOptions={options}
                    onSelectRecommendOptionSet={onSetInputValue}
                    onChange={(e) => { onSetInputValue({ name: e.target.value, value: e.target.value }) }}
                />
                <Input
                    iconName='people-outline'
                    informationMessage='hihi'
                    afterString='명'
                    recommendOptions={options}
                    placeholder='hihi'
                    value={inputValue.name}
                    onChange={(e) => { onSetInputValue({ name: e.target.value, value: e.target.value }) }}
                />
            </CombineInput>
        </Section>
    )
}

export const InputStoryWithAutoComplete = () => {
    const [options, setOptions] = useState(
        ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3', 'ㅇㅇ', 'ㄴㄴ'].map(item => ({ name: item, value: item }))
    );
    const [inputValue, defaultInputValue] = useState({ name: '', value: '' })
    const onSetInputValue = (value: ({ name: string, value: any })) => {
        defaultInputValue(value)
    }
    return (
        <Section title='Input Story'>
            <Input
                value={inputValue.name}
                recommendListButton={<>
                    <Button>안녕하세요</Button>
                    <Button size='large' color='yellow'>어서오세요</Button>
                    <Button type='line' size='xs' color='green'>안녕하세요</Button>
                    <Button color='red'>어서오세요</Button>
                </>}
                recommendOptions={options}
                onSelectRecommendOptionSet={onSetInputValue}
                onChange={(e) => { onSetInputValue({ name: e.target.value, value: e.target.value }) }}
                />
        </Section>
    )
}

export const InputStoryWithThumbAutoComplete = () => {
    const options = useState([
        {name: 'title', subName: 'UPGRADE', value: 'title', thumbnail: 'http://placehold.it/400x400'},
        {name: 'title2', subName: 'BITE', value: 'title2', thumbnail: 'http://placehold.it/200x200'}
    ])[0];
    const [inputValue, defaultInputValue] = useState({ name: '', value: '' })
    const onSetInputValue = (value: IRecommendOption) => {
        defaultInputValue(value)
    }
    const onClickRecommend = (value: IRecommendOption) => {
        defaultInputValue({name: '', value: ''});
        alert('click ' + value.name);
    }
    return (
        <Section title='Input Story'>
            <Input
                value={inputValue.name}
                recommendType="thumbnail"
                recommendOptions={options}
                onSelectRecommendOptionSet={onClickRecommend}
                onChange={(e) => { onSetInputValue({ name: e.target.value, value: e.target.value }) }}
                />
        </Section>
    )
}
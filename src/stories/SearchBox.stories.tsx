import React, { useState } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs'
import { Input, SelectBox, CombineInput, InputContainer, SearchBox } from '../index';

export default {
    title: '검색박스',
    component: SearchBox,
    decorators: [withKnobs]
};

export const SearchBoxStory = () => {
    const [selectedOption, onSelectedOptionSet] = useState('안녕');
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }
    const onClickSearchButton = () => {

    };

    return <SearchBox stage={select('1단, 2단 선택', {
        '1': 1,
        '2': 2
    }, 1)} buttonTitle='검색하기' onClickSearchButton={onClickSearchButton}>
        <div className='search-box-item'>
            <label>검색</label>
            <Input iconName='search-outline' placeholder='입력하면 바로 검색합니다.'/>
        </div>
        <div className='search-box-item'>
            <label>기간</label>
            <Input iconName='search-outline' afterString='명' placeholder='입력하면 바로 검색합니다.'/>
        </div>
        <InputContainer title='카테고리'>
            <input className='checkbox-input' type='checkbox' id='checkbox-input' />
            <label htmlFor='checkbox-input' >준비방</label>
            <input className='checkbox-input' type='checkbox' id='checkbox-input' />
            <label htmlFor='checkbox-input' >n월방</label>
            <input className='checkbox-input' type='checkbox' id='checkbox-input' />
            <label htmlFor='checkbox-input' >새댁방</label>
            <input className='checkbox-input' type='checkbox' id='checkbox-input' />
            <label htmlFor='checkbox-input' >지역방</label>
        </InputContainer>
        <InputContainer title='상태'>
            <input className='checkbox-input' type='checkbox' id='checkbox-input' />
            <label htmlFor='checkbox-input' >인기</label>
            <input className='checkbox-input' type='checkbox' id='checkbox-input' />
            <label htmlFor='checkbox-input' >민망</label>
            <input className='checkbox-input' type='checkbox' id='checkbox-input' />
            <label htmlFor='checkbox-input' >삭제</label>
        </InputContainer>
        <CombineInput title='Combined'>
            <Input iconName='calendar-outline' afterString='명' placeholder='보증인원'/>
            <input placeholder='혼나자'></input>
            <Input iconName='calendar-outline' afterString='명' placeholder='보증인원'/>
        </CombineInput>
        <CombineInput title='Combined'>
            <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            <input placeholder='혼나자'></input>
            <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
        </CombineInput>
        <CombineInput title='Combined'>
            <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            <input placeholder='혼나자'></input>
        </CombineInput>
        <CombineInput title='Combined'>
            <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            <input placeholder='혼나자'></input>
            <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            <input placeholder='혼나자'></input>
            <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            <input placeholder='혼나자'></input>
            <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            <input placeholder='혼나자'></input>
        </CombineInput>
    </SearchBox>
}
import React, { useState } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs'
import SearchBox from '../components/molecules/SearchBox';
import SpecialInput from '../components/atoms/SpecialInput';
import InputContainer from '../components/molecules/InputContainer';
import CombineInput from '../components/molecules/CombineInput';
import SelectBox from '../components/atoms/SelectBox';

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

    return <SearchBox stage={select('1단, 2단 선택', {
        '1': 1,
        '2': 2
    }, 1)}>
        <div className='search-box-item'>
            <label>검색</label>
            <SpecialInput iconName='search-outline'>
                <input placeholder='입력하면 바로 검색합니다.'></input>
            </SpecialInput>
        </div>
        <div className='search-box-item'>
            <label>기간</label>
            <SpecialInput iconName='search-outline' afterString='명'>
                <input placeholder='입력하면 바로 검색합니다.'></input>
            </SpecialInput>
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
            <SpecialInput iconName='calendar-outline' afterString='명'>
                <input placeholder='보증인원'></input>
            </SpecialInput>
            <input placeholder='혼나자'></input>
            <SpecialInput iconName='calendar-outline' afterString='명'>
                <input placeholder='보증인원'></input>
            </SpecialInput>
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
import React from 'react';
import InputContainer from '../components/molecules/InputContainer';
import useRadioBox from '../hooks/useRadioBox';
import useCheckBox from '../hooks/useCheckBox';

const RadioAndCheckBoxInput = () => {
    const { list: checkBoxList, onChange: onChange2 } = useCheckBox([
        {
            id: '42123',
            name: '웨딩홀',
            checked: false
        },
        {
            id: '12123',
            name: '가전가구',
            checked: false
        },
        {
            id: '22123',
            name: '스드메',
            checked: false
        }
    ])
    const { list: radioButtonList, onChange } = useRadioBox([
        {
            id: '42123',
            name: '웨딩홀',
            checked: true
        },
        {
            id: '12123',
            name: '가전가구',
            checked: false
        },
        {
            id: '22123',
            name: '스드메',
            checked: false
        }
    ])
    return (
        <>
            <InputContainer>
                {checkBoxList.map((value) => (<React.Fragment key={value.id}>
                    <input type='checkbox' className='checkbox-input' value={value.id} checked={value.checked} onChange={(e) => { onChange2(e, value) }}></input>
                    <label>{value.name}</label>
                </React.Fragment>))}
            </InputContainer>
            <div>
                선택된 체크박스 항목: {JSON.stringify(checkBoxList.filter(value => value.checked).map(value => value.name))}
            </div>
            <InputContainer>
                {radioButtonList.map((value) => (<React.Fragment key={value.id}>
                    <input type='radio' className='radio-input' value={value.id} checked={value.checked} onChange={() => { onChange(value) }}></input>
                    <label>{value.name}</label>
                </React.Fragment>))}
            </InputContainer>
            <div>
                선택된 라디오박스 항목: {radioButtonList.filter(value => value.checked).map(value => value.name)}
            </div>
        </>
    )
}

export default RadioAndCheckBoxInput;
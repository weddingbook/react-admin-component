import React, { useState } from 'react';
import DefinitionTag from '../components/atoms/DefinitionTag'
import DefinitionTagContainer from '../components/molecules/DefinitionTagContainer';
import { withKnobs, select } from '@storybook/addon-knobs'
import Button from '../components/atoms/Button';
import Modal from '../components/molecules/Modal';
import SelectBox from '../components/atoms/SelectBox';
import useModal from '../hooks/useModal';
import CombineInput from '../components/molecules/CombineInput';
import SpecialInput from '../components/atoms/SpecialInput';

export default {
    title: '모달',
    component: Modal,
    decorators: [withKnobs]
};

const onClick = () => {
    console.log('hi')
}

export const ModalStory = () => <Modal size={select('사이즈', {
    small: 'small',
    medium: 'medium',
    large: 'large'
}, 'small')} actionButtonComponent={<Button onClick={onClick} size='small' type='solid' disabled={true}>확인</Button>}>
    <DefinitionTagContainer>
        <DefinitionTag title='휴대폰정보' direction='row'>
            아이폰, 앱버전 : 4.20.0, OS버전 : 13.2.2 <br />
            3783c640-d39f-11e8-b933-0aea5320e7f2
        </DefinitionTag>
    </DefinitionTagContainer>
    <DefinitionTagContainer>
        <DefinitionTag title='닉네임' direction='row'>
            띄지않고최대여덟
        </DefinitionTag>
    </DefinitionTagContainer>
    <DefinitionTagContainer>
        <DefinitionTag title='상태' direction='row'>
            활성
        </DefinitionTag>
    </DefinitionTagContainer>
</Modal>

export const ModalStoryWithLong = () => {
    const { modalToggle, onCloseModal, onOpenModal } = useModal();

    const [selectedOption, onSelectedOptionSet] = useState('안녕');
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'];

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }

    return <>
        <Button onClick={onOpenModal}>모달나와라</Button>
        {modalToggle && <Modal
            size={select('사이즈', {
                small: 'small',
                medium: 'medium',
                large: 'large'
            }, 'small')}
            onClickInBackground={onCloseModal}
            cancelButtonComponent={<Button onClick={onCloseModal} size='small' type='line'>취소</Button>}
            actionButtonComponent={<Button onClick={onClick} size='small' type='solid'>수정</Button>}
            footerComponent={
                <>
                    <Button onClick={onClick} size='xs' type='text'>새등록</Button>
                    <Button onClick={onClick} size='xs' type='text'>수정</Button>
                    <Button onClick={onClick} size='xs' color='red' type='text'>삭제</Button>
                </>
            }
        >
            <div className='modal-item'>
                <label>저장된 메시지</label>
                <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            </div>
            <div className='modal-item'>
                <label>문자 제목</label>
                <input />
            </div>
            <div className='modal-item'>
                <label>문자 내용</label>
                <textarea />
            </div>
            <div className='modal-item'>
                <label>받는 번호</label>
                <input />
            </div>
            <div className='modal-item'>
                <label>보내는 번호</label>
                <input />
            </div>
            <div className='modal-item'>
                <label>문자 제목</label>
                <input />
            </div>
            <div className='modal-item'>
                <label>문자 내용</label>
                <textarea />
            </div>
            <div className='modal-item'>
                <label>받는 번호</label>
                <input />
            </div>
            <div className='modal-item'>
                <label>보내는 번호</label>
                <input />
            </div>
            <div className='modal-item'>
                <label>문자 제목</label>
                <input />
            </div>
            <div className='modal-item'>
                <label>문자 내용</label>
                <textarea />
            </div>
            <div className='modal-item'>
                <label>받는 번호</label>
                <input />
            </div>
            <div className='modal-item'>
                <label>보증 인원</label>
                <SpecialInput iconName='calendar-outline' afterString='명'>
                    <input placeholder='보증인원'></input>
                </SpecialInput>
            </div>

            <div className='modal-item'>
                <label>보내는 번호</label>
                <input />
            </div>
            <CombineInput title='Combined1'>
                <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
                <input placeholder='혼나자'></input>
                <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            </CombineInput>
            <CombineInput title='Combined2'>
                <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
                <input placeholder='혼나자'></input>
            </CombineInput>
            <CombineInput title='Combined3'>
                <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
                <input placeholder='혼나자'></input>
                <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
                <SpecialInput iconName='calendar-outline' afterString='명'>
                    <input placeholder='보증인원'></input>
                </SpecialInput>
                <input placeholder='안녕'></input>
            </CombineInput>
        </Modal>}
    </>
}
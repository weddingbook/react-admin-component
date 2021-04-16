import React, { useState } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs'
import { useModal } from '../index';
import { DatePicker, TimePicker } from 'antd';
import { Divider, ModalItem, ButtonTypeInput, InputContainer, Input, CombineInput, SelectBox, Modal, Button, DefinitionTag, DefinitionTagContainer, SectionContainer, Section } from '../index';
import useRadioBox from '../hooks/useRadioBox';
import useCheckBox from '../hooks/useCheckBox';
import TabMenu from '../atoms/TabMenu';
import SwitchButton from '../atoms/SwitchButton';


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

export const ModalStoryWithTab = () => {
    const menuList = ['Tab active', 'Tab2', 'Tab3'].map((item, index) => ({ name: item, value: index}));

    const [selectedMenu, setSelectedMenu] = useState(menuList[0]);
    const onSelectMenu = (menu: {name: string, value: any}) => {
        setSelectedMenu(menu)
    }
    return <Modal size={select('사이즈', {
        small: 'small',
        medium: 'medium',
        large: 'large'
    }, 'small')} actionButtonComponent={<Button onClick={onClick} size='small' type='solid' disabled={true}>확인</Button>}>
        <TabMenu tabList={menuList} onSelectMenu={onSelectMenu} selectedMenu={selectedMenu} />
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
}
export const ModalStoryWithToggleSwitch = () => {
    const [switchToggle, setSwitchToggle] = useState(false);
    const [keyword, setKeyword] = useState('')

    // actions
    const onChange = (e: any) => {
        setKeyword(e.target.value)
    }
    return <Modal size={select('사이즈', {
        small: 'small',
        medium: 'medium',
        large: 'large'
    }, 'medium')} actionButtonComponent={<Button onClick={onClick} size='small' type='solid' disabled={true}>확인</Button>}>
        <ModalItem>
            <label>Team Member</label>
            <Input value={keyword} onChange={(e) => { onChange(e) }} placeholder='Type MemberName Or Email..' />
        </ModalItem>
        <ModalItem className='checkbox-radio'>
            <label className='checkbox-radio'>Toggle</label>
            <InputContainer>
                <SwitchButton
                    toggleValue={switchToggle}
                    onClick={setSwitchToggle}
                />
            </InputContainer>
        </ModalItem>
    </Modal>
}

export const ModalStoryWithCheckBoxAndRadioBox = () => {
    const [keyword, setKeyword] = useState('')

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
    const { list: radioButtonList, onChange: onChangeRadioBox } = useRadioBox([
        {
            id: 1,
            name: 'LEADER',
            value: 'LEADER',
            checked: false,
        },
        {
            id: 2,
            name: 'MEMBER',
            value: 'MEMBER',
            checked: true
        },
    ])
    // actions
    const onChange = (e: any) => {
        setKeyword(e.target.value)
    }
    return <Modal size={select('사이즈', {
        small: 'small',
        medium: 'medium',
        large: 'large'
    }, 'small')} actionButtonComponent={<Button onClick={onClick} size='small' type='solid' disabled={true}>확인</Button>}>
        <ModalItem>
            <label>Team Member</label>
            <Input value={keyword} onChange={(e) => { onChange(e) }} placeholder='Type MemberName Or Email Or TeamName OR Grade...' />
        </ModalItem>
        <ModalItem className='checkbox-radio'>
            <label className='checkbox-radio'>체크박스</label>
            <InputContainer>
                {checkBoxList.map((value) => (<React.Fragment key={value.id}>
                    <input type='checkbox' className='checkbox-input' value={value.id} checked={value.checked} onChange={(e) => { onChange2(e, value) }}></input>
                    <label>{value.name}</label>
                </React.Fragment>))}
            </InputContainer>
        </ModalItem>
        <ModalItem className='checkbox-radio'>
            <label className='checkbox-radio'>Grade</label>
            <InputContainer>
                {radioButtonList.map((value) => (<React.Fragment key={value.id}>
                    <input type='radio' className='radio-input' value={value.value} checked={value.checked} onChange={() => { onChangeRadioBox(value) }}></input>
                    <label>{value.name}</label>
                </React.Fragment>))}
            </InputContainer>
        </ModalItem>
    </Modal>
}

export const ModalStoryWithoutScroll = () => {
    const [selectedOption, onSelectedOptionSet] = useState({ name: '안녕', value: '안녕' });

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }

    const optionList = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3', 'ㅇㅇ', 'ㄴㄴ']
    const optionList2 = optionList.map(value => ({ name: value, value }))

    return(
        <Modal noScroll>
            <p style={{marginBottom: 20, lineHeight: 1.5}}>
                모달이 스크롤 되지 않기를 원할때 {`<Modal noScroll>`} 사용<br/>
                (아래처럼 셀렉트박스 사용시 같은 경우)
            </p>
            <SelectBox style={{ width: '300px' }} selectedOption={selectedOption} options={optionList2} onSelectOptionSet={onSet} />
        </Modal>
    )
}

export const ModalStoryWithLong = () => {
    const { modalToggle, onCloseModal, onOpenModal } = useModal();

    const [selectedOption, onSelectedOptionSet] = useState({ name: '안녕', value: '안녕' });
    const options = ['안녕', '길다길어셀렉트 길다길어 셀렉트2', '길다길어셀렉트 길다길어 셀렉트3'].map(value => ({ value, name: value }));

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
            <ModalItem>
                <label>저장된 메시지</label>
                <SelectBox options={options} selectedOption={selectedOption} onSelectOptionSet={onSet} />
            </ModalItem>
            <ModalItem>
                <label>문자 제목</label>
                <input />
            </ModalItem>
            <ModalItem>
                <label>문자 내용</label>
                <textarea />
            </ModalItem>
            <ModalItem>
                <label>받는 번호</label>
                <input />
            </ModalItem>
            <ModalItem>
                <label>보내는 번호</label>
                <input />
            </ModalItem>
            <ModalItem>
                <label>문자 제목</label>
                <input />
            </ModalItem>
            <ModalItem>
                <label>문자 내용</label>
                <textarea />
            </ModalItem>
            <ModalItem>
                <label>받는 번호</label>
                <input />
            </ModalItem>
            <ModalItem>
                <label>보내는 번호</label>
                <input />
            </ModalItem>
            <ModalItem>
                <label>문자 제목</label>
                <input />
            </ModalItem>
            <ModalItem>
                <label>문자 내용</label>
                <textarea />
            </ModalItem>
            <ModalItem>
                <label>받는 번호</label>
                <input />
            </ModalItem>
            <ModalItem>
                <label>보증 인원</label>
                <Input iconName='calendar-outline' afterString='명' placeholder='보증인원' />
            </ModalItem>

            <ModalItem>
                <label>보내는 번호</label>
                <input />
            </ModalItem>
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
                <Input iconName='calendar-outline' afterString='명' placeholder='보증인원' />
            </CombineInput>
            <CombineInput title='Combined3'>
                <input placeholder='혼나자'></input>
                <Input iconName='calendar-outline' afterString='명' placeholder='보증인원' />
            </CombineInput>
        </Modal>}
    </>
}

export const ModalStoryWithInform = () => {
    const { modalToggle, onCloseModal, onOpenModal } = useModal();

    const [selectedOption, onSelectedOptionSet] = useState({ name: '대기', value: '대기' });
    const [selectedRebateOption, onSelectedRebateOptionSet] = useState({ name: '최초', value: '최초' });
    const [selectedPriceUnitOption, onSelectedPriceUnitOptionSet] = useState({ name: '원', value: '원' });

    const options = ['대기', '반려', '승인'].map(value => ({ value, name: value }));
    const rebateOptions = ['최초'].map(value => ({ value, name: value }));
    const priceUnitOptions = ['원', '달러'].map(value => ({ value, name: value }));

    const onSet = (option: any) => {
        onSelectedOptionSet(option)
    }

    return <>
        <Button onClick={onOpenModal}>선인폼 수정</Button>
        {modalToggle && <Modal
            size={select('사이즈', {
                small: 'small',
                medium: 'medium',
                large: 'large'
            }, 'medium')}
            title='선인폼 수정'
            cancelButtonComponent={<Button onClick={onCloseModal} size='small' type='line'>취소</Button>}
            actionButtonComponent={<Button onClick={onClick} size='small' type='solid'>수정하기</Button>}
        >
            <DefinitionTagContainer>
                <DefinitionTag title='방문예약신청' direction='row'>
                    2019-12-29 07:23
                </DefinitionTag>
            </DefinitionTagContainer>
            <DefinitionTagContainer>
                <DefinitionTag title='업체' direction='row'>
                    파티움하우스 더 그레이스켈리 수원(구 엘리제웨딩홀)
                </DefinitionTag>
            </DefinitionTagContainer>
            <DefinitionTagContainer>
                <DefinitionTag title='업체연락처' direction='row'>
                    02-123-1234
                </DefinitionTag>
            </DefinitionTagContainer>

            <Divider />

            <DefinitionTagContainer>
                <DefinitionTag title='신청자/연락처' direction='row'>
                    홍길동 신부님 010-1234-1234
                </DefinitionTag>
            </DefinitionTagContainer>
            <DefinitionTagContainer>
                <DefinitionTag title='배우자/연락처' direction='row'>
                    김길동 010-1234-1234
                </DefinitionTag>
            </DefinitionTagContainer>
            <DefinitionTagContainer>
                <DefinitionTag title='희망예식정보' direction='row'>
                    택일 2021-06-20 12~14시
                </DefinitionTag>
            </DefinitionTagContainer>
            <DefinitionTag title='' direction='row' style={{ marginTop: '8px' }}>
                희망 2021-06 토요일 12~14시, 17시 이후
            </DefinitionTag>
            <DefinitionTag title='' direction='row' style={{ marginTop: '8px' }}>
                희망 2021-06 일요일 11~13시, 15~16시
            </DefinitionTag>
            <DefinitionTag title='' direction='row' style={{ marginTop: '8px' }}>
                최대보증인원 300명
                </DefinitionTag>
            <DefinitionTag title='' direction='row' style={{ marginTop: '8px' }}>
                음 견적 알려주세요. 궁금해요 호호.
            </DefinitionTag>
            <div style={{ width: '100%', backgroundColor: '#fafafa', marginTop: '24px', padding: '20px 20px 24px 0' }}>
                <CombineInput title='가능일시/보증인원'>
                    <DatePicker placeholder='0000-00-00' />
                    <TimePicker placeholder='23:59' use12Hours format='h:mm a' minuteStep={5} />
                    <Input iconName='calendar-outline' afterString='명' placeholder='보증인원' />
                    <Input placeholder='홀이름' />
                </CombineInput>
                <ModalItem>
                    <label></label>
                    <Button type='text' size='small'>추가</Button>
                </ModalItem>
                <CombineInput title='홀사용료(정가/할인가)' style={{ marginTop: '24px' }}>
                    <Input afterString='만원' placeholder='정가' />
                    <Input afterString='만원' placeholder='할인가' />
                </CombineInput>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>추가 메시지</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem style={{ marginLeft: '24px', marginTop: '8px' }}>
                    <label></label>
                    <Input placeholder='메시지 입력' disabled />
                </ModalItem>
                <CombineInput title='1인식사비(정가/할인가)' style={{ marginTop: '24px' }}>
                    <Input afterString='원' placeholder='정가' />
                    <Input afterString='원' placeholder='할인가' />
                </CombineInput>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>포함</label>
                        <ButtonTypeInput type='checkbox' title='음주류' checked={false} onChange={() => { }} disabled={true} />
                        <ButtonTypeInput type='checkbox' title='봉사료' checked={false} onChange={() => { }} disabled={true} />
                        <ButtonTypeInput type='checkbox' title='부가세' checked={false} onChange={() => { }} disabled={true} />
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>불포함</label>
                        <ButtonTypeInput type='checkbox' title='음주류' checked={true} onChange={() => { }} disabled={false} />
                        <ButtonTypeInput type='checkbox' title='봉사료' checked={true} onChange={() => { }} disabled={false} />
                        <ButtonTypeInput type='checkbox' title='부가세' checked={false} onChange={() => { }} disabled={true} />
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <Input placeholder='방문 시 조율 가능' disabled />
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>당일계약 시 추가 조율 가능</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>추가 메시지</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem style={{ marginLeft: '24px', marginTop: '8px' }}>
                    <label></label>
                    <Input placeholder='메시지 입력' disabled />
                </ModalItem>
                <CombineInput title='리베이트' style={{ marginTop: '24px' }}>
                    <SelectBox options={rebateOptions} onSelectOptionSet={onSelectedRebateOptionSet} selectedOption={selectedRebateOption} />
                    <input placeholder='숫자만 입력' style={{ textAlign: 'right' }} />
                    <SelectBox options={priceUnitOptions} onSelectOptionSet={onSelectedPriceUnitOptionSet} selectedOption={selectedPriceUnitOption} />
                </CombineInput>
                <DefinitionTagContainer style={{ marginTop: '24px' }}>
                    <DefinitionTag title='회원신청한방문예정일시' direction='row'>
                        2020-01-22 14:00
                </DefinitionTag>
                </DefinitionTagContainer>
                <CombineInput title='방문예정일시 변경' style={{ marginTop: '24px' }}>
                    <DatePicker placeholder='0000-00-00' />
                    <TimePicker placeholder='23:59' format='h:mm a' minuteStep={5} />
                </CombineInput>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>순차상담으로 대기 시간 발생하니 참고 부탁드립니다.</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>방문하는 순서대로 상담을 진행하고 있는 업체로 방문 시 대기시간이 발생할 수 있습니다. </label>
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>정시 예약만 가능하여 방문 시간을 조율하여 예약해두었습니다.</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>신청해주신 시간에 상담이 불가하여 방문 시간을 조율하여 예약을 진행해두었습니다.</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>방문이 불가하실 경우 말씀해주시면 다시 일정을 조율하여 예약 변경을 도와드리겠습니다.</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>예식 세팅이 되어있지 않아 홀 투어가 불가한 점 미리 참고 부탁드리겠습니다.</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem>
                    <label></label>
                    <InputContainer>
                        <input type='checkbox' className='checkbox-input' ></input>
                        <label>추가 메시지</label>
                    </InputContainer>
                </ModalItem>
                <ModalItem style={{ marginLeft: '24px', marginTop: '8px' }}>
                    <label></label>
                    <Input placeholder='메시지 입력' disabled />
                </ModalItem>
                <ModalItem style={{ marginTop: '24px' }}>
                    <label>업체담당자</label>
                    <Input placeholder='담당자 입력' />
                </ModalItem>
            </div>
            <ModalItem style={{ marginTop: '20px' }}>
                <label>승인상태</label>
                <SelectBox style={{ width: '273px' }} options={options} onSelectOptionSet={onSet} selectedOption={selectedOption} />
            </ModalItem>
            <Divider />
            <DefinitionTagContainer>
                <DefinitionTag title='비고' direction='row'>
                </DefinitionTag>
            </DefinitionTagContainer>
            <DefinitionTagContainer>
                <DefinitionTag title='전송방법' direction='row'>
                    온라인
                </DefinitionTag>
            </DefinitionTagContainer>
            <ModalItem style={{ marginTop: '26px' }}>
                <label>관리자비고</label>
                <textarea style={{ height: '110px' }} />
            </ModalItem>
        </Modal>}
    </>
}

export const ModalStoryWithIndent = () => {
    return <Modal size='large'>
        <ModalItem>
            <label>Product explanation</label>
            <textarea />
        </ModalItem>
        <ModalItem>
            <label>공급</label>
            <Input />
        </ModalItem>
        <ModalItem>
            <label>판매</label>
            <Input />
        </ModalItem>
        <ModalItem>
            <label>대여</label>
            <Input />
        </ModalItem>
        <ModalItem style={{ marginTop: '24px' }}>
            <label>Related Product</label>
            <Button onClick={() => { }} size='xs' className='in-modal-item'>Connect Other Product</Button>
        </ModalItem>
        <ModalItem>
            <label>Tag</label>
            <div
                style={{ marginLeft: '8px' }}
            >
                <ModalItem className='indent'>
                    <label >Style</label>
                    <Input />
                </ModalItem>
                <ModalItem style={{ gridTemplateColumns: '60px 1fr' }}>
                    <label>Sleeves</label>
                    <Input />
                </ModalItem>
                <ModalItem style={{ gridTemplateColumns: '60px 1fr' }}>
                    <label>Brand</label>
                    <Input />
                </ModalItem>
                <ModalItem style={{ gridTemplateColumns: '60px 1fr' }}>
                    <label>Neckline</label>
                    <Input />
                </ModalItem>
            </div>
        </ModalItem>
    </Modal>
}
export const ModalWithSection = () => {
	return <Modal title="modal with section" withSection={true} noScroll>
		<SectionContainer direction="column">
			<Section title="section 1">
				<p>section contents 1</p>
			</Section>
            <Section title="section 2">
				<p>section contents 2</p>
			</Section>
		</SectionContainer>
	</Modal>
}
import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import TabMenu from '../atoms/TabMenu';
import Section from '../molecules/Section';
import Button from '../atoms/Button';
import DefinitionTagContainer from '../molecules/DefinitionTagContainer';
import DefinitionTag from '../atoms/DefinitionTag';
import Modal from '../molecules/Modal';
import ModalItem from '../molecules/ModalItem';
import Input from '../atoms/Input';

export default {
    title: '탭 메뉴',
    component: TabMenu,
    decorators: [withKnobs]
};


export const SectionTabMenuStory = () => {
    const tabList = ['All Auth', 'Personal Auth', 'Team Auth'];
    const [selectedMenu, setSelectedMenu] = useState(tabList[0]);
    const onSelectMenu = (menu: string) => {
        setSelectedMenu(menu)
    }

    return (
        <Section
            buttonComponent={
                <>
                    <Button size='small' iconName='search-outline' type='line' ></Button>
                    <Button size='small' iconName='search-outline' type='line' >아이콘</Button>
                    <Button type='line' size='small'>수정</Button>
                </>
            }
        >
            <TabMenu tabList={tabList} selectedMenu={selectedMenu} onSelectMenu={onSelectMenu} />
            {
                selectedMenu === tabList[0] && <>
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
                </>
            }
            {
                selectedMenu === tabList[1] && <>
                    <DefinitionTagContainer>
                        <DefinitionTag title='다른화면' direction='row'>
                            2
                        </DefinitionTag>
                    </DefinitionTagContainer>
                </>
            }
            {
                selectedMenu === tabList[2] && <>
                    <DefinitionTagContainer>
                        <DefinitionTag title='화면3' direction='row'>
                            화면3
                        </DefinitionTag>
                    </DefinitionTagContainer>
                </>
            }
        </Section>
    )
}

export const ModalTabMenuStory = () => {
    const tabList = ['화면 1', '화면 2', '화면 3'];
    const [selectedMenu, setSelectedMenu] = useState(tabList[0]);
    const onSelectMenu = (menu: string) => {
        setSelectedMenu(menu)
    }

    return (
        <Modal size={'small'} actionButtonComponent={<Button>확인</Button>}>
            <TabMenu tabList={tabList} selectedMenu={selectedMenu} onSelectMenu={onSelectMenu} />
            {
                selectedMenu === tabList[0] && <>
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
                </>
            }
            {
                selectedMenu === tabList[1] && <>
                    <DefinitionTagContainer>
                        <DefinitionTag title='다른화면' direction='row'>
                            2
                        </DefinitionTag>
                    </DefinitionTagContainer>
                </>
            }
            {
                selectedMenu === tabList[2] && <>
                    <DefinitionTagContainer>
                        <DefinitionTag title='화면3' direction='row'>
                            화면3
                        </DefinitionTag>
                    </DefinitionTagContainer>
                </>
            }
        </Modal>
    )
}

export const ListTabMenuStory = () => {
    const tabList = ['화면 1', '화면 2', '화면 3'];
    const [selectedMenu, setSelectedMenu] = useState(tabList[0]);
    const onSelectMenu = (menu: string) => {
        setSelectedMenu(menu)
    }

    const modalTabList = ['화면 1', '화면 2', '화면 3'];
    const [selectedModalMenu, setSelectedModalMenu] = useState(tabList[0]);
    const onSelectModalMenu = (menu: string) => {
        setSelectedModalMenu(menu)
    }

    return <>
        <Modal
            cancelButtonComponent={<Button size='small' type='line'>취소</Button>}
            actionButtonComponent={<Button size='small' type='solid'>수정하기</Button>}
        >
            <TabMenu tabList={modalTabList} selectedMenu={selectedModalMenu} onSelectMenu={onSelectModalMenu} />
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
            <DefinitionTagContainer style={{ marginTop: '24px' }}>
                <DefinitionTag title='어쩌구' direction='row' style={{ alignItems: 'center' }}>
                    <TabMenu tabList={tabList} selectedMenu={selectedMenu} onSelectMenu={onSelectMenu} type='list' />
                </DefinitionTag>
            </DefinitionTagContainer>

            {
                selectedMenu === tabList[0] && <>
                    <DefinitionTagContainer style={{ marginLeft: '40px' }}>
                        <DefinitionTag title='Label' direction='row'>
                            안녕하세요
                            </DefinitionTag>
                    </DefinitionTagContainer>
                    <ModalItem style={{ marginLeft: '40px' }}>
                        <label>Label</label>
                        <Input placeholder='placeholder' />
                    </ModalItem>
                    <ModalItem style={{ marginLeft: '40px' }}>
                        <label>Label</label>
                        <Input placeholder='placeholder' />
                    </ModalItem>
                </>
            }
            {
                selectedMenu === tabList[1] && <>
                    <DefinitionTagContainer style={{ marginLeft: '40px' }}>
                        <DefinitionTag title='Label' direction='row'>
                            두번째 탭
                        </DefinitionTag>
                    </DefinitionTagContainer>
                    <ModalItem style={{ marginLeft: '40px' }}>
                        <label>Label</label>
                        <Input placeholder='placeholder' />
                    </ModalItem>
                    <ModalItem style={{ marginLeft: '40px' }}>
                        <label>Label</label>
                        <Input placeholder='placeholder' />
                    </ModalItem>
                </>
            }
            {
                selectedMenu === tabList[2] && <>
                    <DefinitionTagContainer style={{ marginLeft: '40px' }}>
                        <DefinitionTag title='Label' direction='row'>
                            세번째 탭
                        </DefinitionTag>
                    </DefinitionTagContainer>
                    <ModalItem style={{ marginLeft: '40px' }}>
                        <label>Label</label>
                        <Input placeholder='placeholder' />
                    </ModalItem>
                    <ModalItem style={{ marginLeft: '40px' }}>
                        <label>Label</label>
                        <Input placeholder='placeholder' />
                    </ModalItem>
                </>
            }
        </Modal>
    </>
}
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '../index'
import { withKnobs } from '@storybook/addon-knobs'
import SectionContainer from '../organisms/SectionContainer';
import { Spin, Table } from 'antd';
import Section from '../molecules/Section';
import SearchBox from '../molecules/SearchBox';
import SelectBox from '../atoms/SelectBox';
import Input from '../atoms/Input';
import Pagination from '../atoms/Pagination';
import Modal from '../molecules/Modal';
import ModalItem from '../molecules/ModalItem';


export default {
    title: '어드민',
    component: SectionContainer,
    decorators: [withKnobs]
};

type Props = {
    type: 'create' | 'edit'
    modalToggle: boolean
    closeModal: () => void;
    afterModalOnAction: () => void;
}

const TestModal = ({ type, modalToggle, closeModal, afterModalOnAction }: Props) => {
    useEffect(() => {
        console.log({
            type,
            modalToggle,
        })
    }, [])
    return (
        <Modal
            cancelButtonComponent={<Button size='small' type='line' onClick={closeModal}>Close</Button>}
            actionButtonComponent={<Button size='small' onClick={() => { }}>Create</Button>}
        >
            <div>모달임</div>
        </Modal>
    )
}
export const AdminSearchPage = () => {
    const [totalLength, setTotalLength] = useState(0)
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10)

    const [packageList, setPackageList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [modalToggle, setModalToggle] = useState(false);
    const [searchOption, setSearchOption] = useState({
        packageType: {
            selected: { name: 'Loading...', value: null },
            list: []
        },
        packageStatus: {
            selected: { name: 'Loading...', value: null },
            list: []
        },
        keyword: ''
    })

    const onCreate = () => {
        console.log('create modal open')
        setModalToggle(true)
    }

    const onCloseModal = () => {
        setModalToggle(false)
    }

    const onSearch = () => {
        console.log('ajax connect on search')
    }

    const onChangeSearchSelectBox = (item: { name: string, value: any }, type: string) => {
        console.log(type, item);

    }
    const onPaginationChange = (page: number, pageSize: number) => {
        setCurrent(page)
        setPageSize(pageSize)
    }

    const columns = [
        {
            title: 'Package Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Package Name',
            dataIndex: 'preservedSchedule',
            key: 'preservedSchedule',

        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Sales Price',
            dataIndex: 'salePrice',
            key: 'salePrice',

        },
        {
            title: 'Active Date',
            dataIndex: 'createdDate',
            key: 'saleStartDate',

        },
        {
            title: 'Change Log',
            dataIndex: 'createdDate',
            key: 'saleStartDate',

        },
    ];
    return (
        <>
            <SectionContainer>
                <Spin spinning={isLoading}>
                    <Section title='Package'
                        buttonComponent={
                            <Button size='small' onClick={onCreate}>Create Package</Button>
                        }
                    >
                        <SearchBox stage={1} buttonTitle='Search' onClickSearchButton={onSearch}>
                            <div className='search-box-item' style={{ marginTop: '16px' }}>
                                <label>Type</label>
                                <SelectBox
                                    options={searchOption.packageType.list}
                                    selectedOption={searchOption.packageType.selected}
                                    onSelectOptionSet={(item) => {
                                        onChangeSearchSelectBox(item, 'packageType')
                                    }}
                                />
                            </div>
                            <div className='search-box-item' style={{ marginTop: '16px' }}>
                                <label>Status</label>
                                <SelectBox
                                    options={searchOption.packageStatus.list}
                                    selectedOption={searchOption.packageStatus.selected}
                                    onSelectOptionSet={(item) => {
                                        onChangeSearchSelectBox(item, 'packageStatus')
                                    }}
                                />
                            </div>
                            <div className='search-box-item' style={{ marginTop: '16px' }}>
                                <label>Search Keyword</label>
                                <Input
                                    value={searchOption.keyword}
                                    onChange={(e) => {
                                        setSearchOption({
                                            ...searchOption,
                                            ['keyword']: e.target.value
                                        })
                                    }}
                                    placeholder='Input Search Keyword'
                                />
                            </div>
                        </SearchBox>
                        <Table
                            dataSource={packageList}
                            columns={columns}
                            pagination={false}
                            showSorterTooltip={false}
                            rowKey='id'
                        />
                        {packageList.length
                            ? <Pagination
                                pageSize={pageSize}
                                pageSizeOptions={[{ name: '10', value: 10 }]}
                                total={totalLength}
                                current={current}
                                onPageChange={onPaginationChange}
                            />
                            : <></>}
                    </Section>
                </Spin>
            </SectionContainer>

            {/*
                모달 Area
                */}
            {
                modalToggle
                    ? <TestModal
                        type={'create'}
                        modalToggle={modalToggle}
                        closeModal={onCloseModal}
                        afterModalOnAction={() => {
                            console.log('모달 어떤 액션 끝나면 호출. 보통 등록이나 수정 누르고 성공시에 list를 다시 불러올때 사용')
                        }}
                    />
                    : <></>
            }
        </>
    )
}

type CreateMemberFormProps = {
    memberName: string,
    memberEmail: string,
    memberPassword: string,
    memberPasswordConfirm: string,
    memberTel: string
}

export const AdminModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState<CreateMemberFormProps>({
        memberName: '',
        memberEmail: '',
        memberPassword: '',
        memberPasswordConfirm: '',
        memberTel: ''
    })

    const onCloseModal = () => {
        console.log(form)
    };

    const onCreateMember = () => {
        console.log(form)
    };

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((form) => ({ ...form, [name]: value }));
    };

    const { memberName, memberEmail, memberPassword, memberPasswordConfirm, memberTel } = form as CreateMemberFormProps;

    return (
        <>
            <Modal size='medium' title='Create Member'
                cancelButtonComponent={<Button size='small' type='line' onClick={onCloseModal}>Close</Button>}
                actionButtonComponent={<Button size='small' onClick={onCreateMember}>Create</Button>}>
                <Spin spinning={isLoading} >
                    <form>
                        <ModalItem>
                            <label>Name</label>
                            <Input
                                value={memberName}
                                name='memberName'
                                onChange={onChange}
                                placeholder='Type member name...'
                                errorMessage='Don`t forget typing member name'
                                required={!!memberEmail && !memberName}
                            />
                        </ModalItem>
                        <ModalItem>
                            <label>Email</label>
                            <Input
                                value={memberEmail}
                                name='memberEmail'
                                onChange={onChange}
                                placeholder='Type member email...'
                                errorMessage='Don`t forget typing member email'
                                required={!!memberPassword && !memberEmail}
                            />
                        </ModalItem>
                        <ModalItem>
                            <label>Password</label>
                            <Input
                                value={memberPassword}
                                name='memberPassword'
                                type='password'
                                onChange={onChange}
                                placeholder='Type password...'
                                errorMessage='Don`t forget typing password'
                                required={!!memberPasswordConfirm && !memberPassword}
                            />
                        </ModalItem>
                        <ModalItem>
                            <label>Confirm Password</label>
                            <Input
                                value={memberPasswordConfirm}
                                name='memberPasswordConfirm'
                                type='password'
                                onChange={onChange}
                                placeholder='Confirm password...'
                                errorMessage='confirm your password'
                                required={(!!memberPassword && !!memberPasswordConfirm) && memberPassword !== memberPasswordConfirm}
                            />
                        </ModalItem>
                        <ModalItem>
                            <label>TEL</label>
                            <Input value={memberTel} name='memberTel' onChange={onChange} placeholder='Type member phone number...' />
                        </ModalItem>
                    </form>
                </Spin>
            </Modal>
        </>
    )
}
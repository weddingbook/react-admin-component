import React, { useState, useEffect } from 'react';
import './Pagination.scss';
import SelectBox from './SelectBox';
import Icon from 'react-eva-icons';

type Props = {
    pageSize: number,
    pageSizeOptions: Array<{name: string, value: any}>
    total: number,
    current: number,
    onPageChange: (page: number, pageSize: number) => void,
}

const Pagination = ({ pageSize, pageSizeOptions, total, current, onPageChange }: Props) => {
    const [size, setSize] = useState({ name: String(pageSize), value: pageSize});
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        onPageChange(pageIndex * 5 + 1, size.value)
    }, [pageIndex, size])

    const handleChooseSelectOption = (pageSizeObject: { name: string, value: number}) => {
        setSize(pageSizeObject)
        onPageChange(1, size.value)
        setPageIndex(0)
    }

    // 숫자 array 만들기
    const numberList = [];
    const pageTotal = Math.ceil(total / size.value)

    for (let i = 0; i < pageTotal; i++) {
        numberList.push(i + 1)
    };

    const handleClickBackArrow = () => {
        if (pageIndex !== 0) {
            setPageIndex(pageIndex - 1)
        }
    }

    const handleClickForwardArrow = () => {
        if (pageIndex !== Math.ceil(pageTotal / 5) - 1) {
            setPageIndex(pageIndex + 1)
        }
    }

    return (
        <div className='wb-pagination'>
            <div className='wb-pagination-page-area'>
                <SelectBox options={pageSizeOptions} selectedOption={size} onSelectOptionSet={handleChooseSelectOption} />
                <span className='wb-pagination-total'>/{total}</span>
            </div>
            <ul className='wb-pagination-number-list'>
                <li onClick={handleClickBackArrow} className={`wb-pagination-arrow wb-pagination-back ${pageIndex !== 0 && 'active'}`} key='arrow-ios-back-outline'>
                    <Icon name='arrow-ios-back-outline' size='18' />
                </li>
                {[...numberList].splice((pageIndex * 5), 5).map(value => (
                    <li className={`wb-pagination-number ${current === value && 'active'}`} key={value} tabIndex={0} onClick={() => { onPageChange(value, size.value) }}>
                        <a>{value}</a>
                    </li>))}
                <li onClick={handleClickForwardArrow} className={`wb-pagination-arrow wb-pagination-forward ${pageIndex !== Math.ceil(pageTotal / 5) - 1 && 'active'}`} key='arrow-ios-forward-outline'>
                    <Icon name='arrow-ios-forward-outline' size='18' />
                </li>
            </ul>
        </div>
    )
}

export default Pagination

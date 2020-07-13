import React, { useState, useEffect } from 'react';
import './Pagination.scss';
import SelectBox from './SelectBox';
import Icon from 'react-eva-icons';

type Props = {
    pageSize: number,
    pageSizeOptions: Array<number>
    total: number,
    current: number,
    onPageChange: (page: number, pageSize: number) => void,
}

const Pagination = ({ pageSize, pageSizeOptions, total, current, onPageChange }: Props) => {
    const [size, setSize] = useState(pageSize);
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        onPageChange(pageIndex * 5 + 1, size)
    }, [pageIndex, size])

    const handleChooseSelectOption = (pageSize: any) => {
        setSize(pageSize)
        onPageChange(1, size)
        setPageIndex(0)
    }

    // 숫자 array 만들기
    const numberList = [];
    const pageTotal = Math.ceil(total / size)

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
                    <Icon name='arrow-ios-back-outline' size='small' />
                </li>
                {[...numberList].splice((pageIndex * 5), 5).map(value => (
                    <li className={`wb-pagination-number ${current === value && 'active'}`} key={value} tabIndex={0} onClick={() => { onPageChange(value, size) }}>
                        <a>{value}</a>
                    </li>))}
                <li onClick={handleClickForwardArrow} className={`wb-pagination-arrow wb-pagination-forward ${pageIndex !== Math.ceil(pageTotal / 5) - 1 && 'active'}`} key='arrow-ios-forward-outline'>
                    <Icon name='arrow-ios-forward-outline' size='small' />
                </li>
            </ul>
        </div>
    )
}

export default Pagination

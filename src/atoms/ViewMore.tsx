import React, { useRef } from 'react';
import './ViewMore.scss';
import Button from './Button';

type Props = {
    onClickMoreButton: (count: number) => void,
    nowShowingRow: number,
    total: number,
}

const ViewMore = ({ nowShowingRow, total, onClickMoreButton }: Props) => {
    const moreButtonCountRef = useRef(1);

    return (
        <div className='view-more-wrap'>
            <span className='view-more-rowData'>{nowShowingRow} / {total}</span>
            <Button size='xs' type='text' onClick={() => { onClickMoreButton(moreButtonCountRef.current++) }} disabled={nowShowingRow === total}>더보기</Button>
        </div>
    )
}

export default ViewMore

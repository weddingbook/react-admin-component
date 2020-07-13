import React from 'react';
import './CombineInput.scss';

type Props = {
    children: object[],
    title?: string,
}

const CombineInput = ({ children, title }: Props) => {
    return (
        <div className='combine-input-container'>
            <span>{title}</span>
            <div className='combine-input-list' style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${(1 / children.length) * 100}%, 1fr)`}}>
                {children}
            </div>
        </div>
    )
}

export default CombineInput

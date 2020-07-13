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
            <div className='combine-input-list'>
                {children}
            </div>
        </div>
    )
}

export default CombineInput

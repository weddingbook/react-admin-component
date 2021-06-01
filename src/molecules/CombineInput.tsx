import React, { CSSProperties } from 'react';
import './CombineInput.scss';

type Props = {
    children: object[],
    style?: CSSProperties
    title?: string,
}

const CombineInput = ({ children, style, title }: Props) => {
    return (
        <div className='combine-input-container' style={{...style}}>
            <span>{title}</span>
            <div className='combine-input-list' style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${(1 / children.length) * 100}%, 1fr)`}}>
                {children}.search-box-wrapper
            </div>
        </div>
    )
}

export default CombineInput

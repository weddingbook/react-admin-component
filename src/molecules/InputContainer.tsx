import React from 'react';
import './InputContainer.scss';

type Props = {
    children: object,
    title?: string,
}

const InputContainer = ({ children, title }: Props) => {
    return (
        <div className='input-container'>
            <span>{title}</span>
            <div className='input-list'>
                {children}
            </div>
        </div>
    )
}

export default InputContainer

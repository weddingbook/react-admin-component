import React, { CSSProperties } from 'react';
import './InputContainer.scss';

type Props = {
    children: object,
    title?: string,
    inputListStyle?: CSSProperties
}

const InputContainer = ({ children, title, inputListStyle }: Props) => {
    return (
        <div className='input-container'>
            <span>{title}</span>
            <div className='input-list' style={inputListStyle}>
                {children}
            </div>
        </div>
    )
}

export default InputContainer

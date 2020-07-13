import React from 'react';
import './InputWrapper.scss';

type Props = {
    children: object
    invalid?: boolean
    errorMessage?: string
    informationMessage?: string
}

const InputWrapper = ({ children, invalid, errorMessage = 'Error message', informationMessage }: Props) => {
    return (
        <div className='input-wrapper'>
            {children}
            {informationMessage && <span className='input-message'>{informationMessage}</span>}
            {(invalid && errorMessage) && <span className='input-message error'>{errorMessage}</span>}
        </div>
    )
}

export default InputWrapper

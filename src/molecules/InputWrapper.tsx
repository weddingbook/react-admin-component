import React, { CSSProperties } from 'react';
import './InputWrapper.scss';
import InputRecommend from '../atoms/InputRecommend';

type Props = {
    children: object
    invalid?: boolean
    style?: CSSProperties
    errorMessage?: string
    informationMessage?: string
    options?: Array<any>
    onSelectOptionSet?: (option: any) => void

}

const InputWrapper = ({ children, style, invalid, errorMessage = 'Error message', informationMessage, options, onSelectOptionSet }: Props) => {
    return (
        <>
            <div className='input-wrapper' style={style}>
                {children}
                {(options && onSelectOptionSet) && <InputRecommend options={options} onSelectOptionSet={onSelectOptionSet} invalid={invalid} informationMessage={informationMessage}/>}
                {informationMessage && <span className='input-message'>{informationMessage}</span>}
                {(invalid && errorMessage) && <span className='input-message error'>{errorMessage}</span>}
            </div>
        </>
    )
}

export default InputWrapper

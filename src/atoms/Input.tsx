import React, { InputHTMLAttributes, CSSProperties } from 'react';
import './Input.scss';
import Icon from 'react-eva-icons';
import InputRecommend from './InputRecommend';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    style?: CSSProperties,
    inputStyle?: CSSProperties
    iconName?: string,
    afterString?: string
    recommendOptions?: Array<any>
    onSelectRecommendOptionSet?: (option: any) => void
    errorMessage?: string
    informationMessage?: string
}

const Input = ({ style, inputStyle, iconName, afterString, recommendOptions, onSelectRecommendOptionSet, errorMessage = 'Error message', informationMessage = '', required = false, ...rest }: Props) => {
    return (
        <>
            <div className={`input-component ${(required || informationMessage) ? 'message' : ''}`} style={style}>
                <div className={`default-input-wrapper ${iconName ? 'after-string' : ''} ${required ? 'error' : ''}`} style={inputStyle}>
                    {iconName && <Icon
                        name={iconName}
                        size="18"
                    />}
                    <input {...rest} className={`${afterString ? 'after-string' : ''}`} required={required} />
                    {afterString && <span className='unit'>{afterString}</span>}
                </div>
                {(recommendOptions && onSelectRecommendOptionSet) && <InputRecommend invalid={required} informationMessage={informationMessage} options={recommendOptions} onSelectOptionSet={onSelectRecommendOptionSet} />}
                {informationMessage && <span className='input-message'>{informationMessage}</span>}
                {(required && errorMessage) && <span className='input-message error'>{errorMessage}</span>}
            </div>
        </>
    )
}

export default Input

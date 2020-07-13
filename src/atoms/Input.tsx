import React, { InputHTMLAttributes, CSSProperties } from 'react';
import './Input.scss';
import Icon from 'react-eva-icons';
import InputRecommend from './InputRecommend';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    style?: CSSProperties,
    iconName?: string,
    afterString?: string
    recommendOptions?: Array<any>
    onSelectRecommendOptionSet?: (option: any) => void
    errorMessage?: string
    informationMessage?: string
}

const Input = ({ style, iconName, afterString, recommendOptions, onSelectRecommendOptionSet, errorMessage, informationMessage, required, ...rest }: Props) => {
    return (
        <>
            <div className='input-component' style={style}>
                <div className='input-wrapper'>
                    {iconName && <Icon
                        name={iconName}
                        size="medium"
                    />}
                    <input {...rest} className={`${afterString ? 'after-string' : ''}`} required={required} />
                    {afterString && <span className='unit'>{afterString}</span>}
                </div>
                {(recommendOptions && onSelectRecommendOptionSet) && <InputRecommend options={recommendOptions} onSelectOptionSet={onSelectRecommendOptionSet} />}
                {informationMessage && <span className='input-message'>{informationMessage}</span>}
                {(required && errorMessage) && <span className='input-message error'>{errorMessage}</span>}
            </div>
        </>
    )
}

export default Input

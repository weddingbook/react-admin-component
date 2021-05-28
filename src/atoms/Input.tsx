import React, { InputHTMLAttributes, CSSProperties, ReactComponentElement } from 'react';
import './Input.scss';
import Icon from 'react-eva-icons';
import InputRecommend from './InputRecommend';

export interface IRecommendOption {
    thumbnail?: string;
    name: string;
    subName?: string;
    value: any;
}
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    style?: CSSProperties,
    inputStyle?: CSSProperties
    iconName?: string,
    iconSize?: number;
    afterString?: string
    recommendListButton?: ReactComponentElement<'button'>
    recommendOptions?: IRecommendOption[];
    recommendType?: 'normal' | 'thumbnail';
    onSelectRecommendOptionSet?: (option: IRecommendOption) => void
    errorMessage?: string
    informationMessage?: string
}

const Input = ({ style, inputStyle, iconName, iconSize = 18, afterString, recommendListButton, recommendOptions, recommendType, onSelectRecommendOptionSet, errorMessage = 'Error message', informationMessage = '', required = false, ...rest }: Props) => {
    return (
        <>
            <div className={`input-component ${(required || informationMessage) ? 'message' : ''}`} style={style}>
                <div className={`default-input-wrapper ${iconName ? 'after-string' : ''} ${required ? 'error' : ''} ${rest.disabled ? 'disabled' : ''}`} style={inputStyle}>
                    {iconName && <Icon
                        name={iconName}
                        size={iconSize}
                    />}
                    <input {...rest} className={`${afterString ? 'after-string' : ''}`} required={required} />
                    {afterString && <span className='unit'>{afterString}</span>}
                </div>
                {(recommendOptions && onSelectRecommendOptionSet) && <InputRecommend invalid={required} informationMessage={informationMessage} recommendListButton={recommendListButton} options={recommendOptions} onSelectOptionSet={onSelectRecommendOptionSet} recommendType={recommendType}/>}
                {informationMessage && <span className='input-message'>{informationMessage}</span>}
                {(required && errorMessage) && <span className='input-message error'>{errorMessage}</span>}
            </div>
        </>
    )
}

export default Input

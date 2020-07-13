import React, { CSSProperties, ReactElement } from 'react';
import './SpecialInput.scss';
import Icon from 'react-eva-icons';
import InputRecommend from './InputRecommend';

type Props = {
    children: ReactElement,
    style?: CSSProperties,
    iconName: string,
    afterString?: string
    recommendOptions?: Array<any>
    onSelectRecommendOptionSet?: (option: any) => void
}

const SpecialInput = ({ children, style, iconName, afterString, recommendOptions, onSelectRecommendOptionSet }: Props) => {
    return (
        <>
            <div className='special-input' style={style}>
                <Icon
                    name={iconName}
                    size="medium"
                />
                {afterString ? React.cloneElement(children, { className: 'after-string' }) : children}
                {afterString && <span>{afterString}</span>}
                {(recommendOptions && onSelectRecommendOptionSet) && <InputRecommend options={recommendOptions} onSelectOptionSet={onSelectRecommendOptionSet} />}
            </div>
        </>
    )
}

export default SpecialInput

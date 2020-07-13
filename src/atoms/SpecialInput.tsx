import React, { CSSProperties } from 'react';
import './SpecialInput.scss';
import Icon from 'react-eva-icons';

type Props = {
    children: object,
    style?: CSSProperties,
    iconName: string,
    afterString?: string
}

const SpecialInput = ({ children, style, iconName, afterString }: Props) => {
    return (
        <div className='special-input' style={style}>
            <Icon
                name={iconName}
                size="medium"
            />
            {children}
            {afterString && <span>{afterString}</span>}
        </div>
    )
}

export default SpecialInput

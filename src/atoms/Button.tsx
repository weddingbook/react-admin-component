import React, { CSSProperties } from 'react';
import './Button.scss';
import Icon from 'react-eva-icons';

type Props = {
    children?: object | string;
    type?: 'solid' | 'line' | 'text' | 'link';
    color?: 'blue' | 'yellow' | 'green' | 'red';
    size?: 'xs' | 'small' | 'middle' | 'large';
    iconName?: string;
    onClick?: any
    disabled?: boolean
    style?: CSSProperties;
}

// iconName은 여기서 검색한다 https://akveo.github.io/eva-icons/#/

const Button = ({ children = '버튼', type = 'solid', color = 'blue', size = 'middle', iconName, onClick, disabled = false, style }: Props) => {
    const iconButton =
        <button
            style={style}
            onClick={onClick}
            className={`btn-type-${type} btn-color-${color} btn-size-square btn-icon-text`}
        >
            <Icon
                name={iconName}
                size="medium"
            />
            {(iconName && children !== '버튼') && <span>{children}</span>}
        </button>

    const normalButton =
        <button
            style={style}
            disabled={disabled}
            onClick={onClick}
            className={`btn-type-${type} btn-color-${color} btn-size-${size}`}
        >
            <span>
                {children}
            </span>
        </button>

    return (
        iconName ? iconButton : normalButton
    )
}

export default Button

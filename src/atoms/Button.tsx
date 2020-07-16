import React, { CSSProperties } from 'react';
import './Button.scss';
import Icon from 'react-eva-icons';

type Props = {
    children?: object | string;
    type?: 'solid' | 'line' | 'text' | 'link';
    color?: 'blue' | 'yellow' | 'green' | 'red';
	size?: 'xs' | 'small' | 'middle' | 'large';
	iconName?: string;
	iconSize?: string | number;
    onClick?: any
    disabled?: boolean
    style?: CSSProperties;
    dataTip?: boolean
	dataFor?: string;
	className?: string;
}

// iconName은 여기서 검색한다 https://akveo.github.io/eva-icons/#/
const Button = ({ children = '버튼', type = 'solid', color = 'blue', size = 'middle', iconName = '', iconSize = '18', onClick, disabled = false, style, dataTip, dataFor, className }: Props) => {
    const iconButton =
        <button
            style={style}
            onClick={onClick}
            className={`btn-type-${type} btn-color-${color} ${disabled ? 'btn-disabled' : ''} btn-icon-text ${className}`}
            data-tip={dataTip}
            data-for={dataFor}
        >
            <Icon
                name={iconName}
                size={iconSize}
            />
            {(iconName && children !== '버튼') && <span>{children}</span>}
        </button>

    const normalButton =
        <button
            style={style}
            disabled={disabled}
            onClick={onClick}
            className={`btn-type-${type} btn-color-${color} btn-size-${size} ${disabled ? 'btn-disabled' : ''} ${className}`}
            data-tip={dataTip}
            data-for={dataFor}
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

import React, {CSSProperties} from 'react';
import './Button.scss';
import Icon from 'react-eva-icons';

export interface Props {
    children?: object | string;
    /**
     * Set button appearance type
     *
     * 'solid' type = 1st high priority button
     *
     * 'link' type = new tap or new window
     */
    type?: 'solid' | 'lightsolid' | 'line' | 'text' | 'link';
    color?: 'blue' | 'yellow' | 'green' | 'red';
    size?: 'xs' | 'small' | 'middle' | 'large';
    /**
     * Search in https://akveo.github.io/eva-icons/#/
     */
    iconName?: string;
    iconSize?: string | number;
    iconFill?: string;
    onClick?: any
    disabled?: boolean
    style?: CSSProperties;
    /**
     * If you use Tooltip, set 'true'
     */
    dataTip?: boolean
    /**
     * If you use Tooltip, set Tooltip ID key.
     */
    dataFor?: string;
    className?: string;
}


/**
 * Priority : solid > line > text
 *
 * Solid type은 최고 우선순위, 주요 기능, 행동 유도를 해야하는 버튼에만 사용
 *
 * Link type은 새탭, 새창 등 페이지를 벗어나는 경우에만 사용
 *
 * iconName은 여기서 검색한다 https://akveo.github.io/eva-icons/#/
 */
const Button = ({
        children = '버튼',
        type = 'solid',
        color = 'blue',
        size = 'middle',
        iconName = '',
        iconSize = '18',
        iconFill = '#296DF1',
        onClick,
        disabled = false,
        style,
        dataTip,
        dataFor,
        className
    }: Props) => {
    const iconButton =
        <button
            style={style}
            onClick={onClick}
            className={`btn-type-${type} btn-color-${color} btn-size-${size} ${disabled ? 'btn-disabled' : ''} ${(iconName && children !== '버튼') ? ' btn-icon-text' : 'btn-only-icon'} ${className}`}
            disabled={disabled}
            data-tip={dataTip}
            data-for={dataFor}
        >
            <Icon
                name={iconName}
                size={iconSize}
                fill={iconFill}
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

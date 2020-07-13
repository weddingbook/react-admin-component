import { CSSProperties } from 'react';
import './Button.scss';
declare type Props = {
    children?: object | string;
    type?: 'solid' | 'line' | 'text' | 'link';
    color?: 'blue' | 'yellow' | 'green' | 'red';
    size?: 'xs' | 'small' | 'middle' | 'large';
    iconName?: string;
    onClick?: any;
    disabled?: boolean;
    style?: CSSProperties;
};
declare const Button: ({ children, type, color, size, iconName, onClick, disabled, style }: Props) => JSX.Element;
export default Button;
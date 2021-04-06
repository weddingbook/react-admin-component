import { CSSProperties } from 'react';
import './Button.scss';
export interface Props {
    children?: object | string;
    /**
     * Set button appearance type
     *
     * 'solid' type = 1st high priority button
     *
     * 'link' type = new tap or new window
     */
    type?: 'solid' | 'line' | 'text' | 'link';
    color?: 'blue' | 'yellow' | 'green' | 'red';
    size?: 'xs' | 'small' | 'middle' | 'large';
    /**
     * Search in https://akveo.github.io/eva-icons/#/
     */
    iconName?: string;
    iconSize?: string | number;
    onClick?: any;
    disabled?: boolean;
    style?: CSSProperties;
    /**
     * If you use Tooltip, set 'true'
     */
    dataTip?: boolean;
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
declare const Button: ({ children, type, color, size, iconName, iconSize, onClick, disabled, style, dataTip, dataFor, className }: Props) => JSX.Element;
export default Button;

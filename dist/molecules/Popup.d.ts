import { CSSProperties } from 'react';
import './Popup.scss';
declare type Props = {
    children?: string;
    style?: CSSProperties;
    color?: 'red' | 'green' | 'yellow';
    cancelButtonComponent?: object;
    actionButtonComponent?: object;
};
declare const Popup: ({ children, style, color, cancelButtonComponent, actionButtonComponent }: Props) => JSX.Element;
export default Popup;

import { CSSProperties } from 'react';
import './Modal.scss';
declare type Props = {
    children?: object;
    style?: CSSProperties;
    title?: string;
    subTitle?: string;
    size?: 'small' | 'medium' | 'large';
    onClickInBackground?: () => void;
    cancelButtonComponent?: object;
    actionButtonComponent?: object;
    footerComponent?: object;
    withSection?: boolean;
    noScroll?: boolean;
};
declare const Modal: ({ children, style, title, subTitle, size, withSection, noScroll, onClickInBackground, cancelButtonComponent, actionButtonComponent, footerComponent }: Props) => JSX.Element;
export default Modal;

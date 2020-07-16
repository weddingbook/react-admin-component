import { ReactNode } from 'react';
import './Popup.scss';
interface PopupButtonProps {
    label?: string;
    action?: () => void;
    type?: 'solid' | 'line' | 'text' | 'link';
    color?: 'blue' | 'yellow' | 'green' | 'red';
    className?: string;
}
interface PopupProps {
    wrap?: string;
    type: 'alert' | 'confirm';
    title?: string;
    message: string;
    messageType?: 'success' | 'warn' | 'fail';
    closeOnClickOutside?: boolean;
    closeOnEsc?: boolean;
    willUnmount?: () => void;
    afterClose?: () => void;
    onClickOutside?: () => void;
}
interface AlertPopupProps extends PopupProps {
    button: PopupButtonProps;
}
interface ConfirmPopupProps extends PopupProps {
    buttons: PopupButtonProps[];
}
export declare function PopupArea(props: {
    id: string;
    children: ReactNode;
}): JSX.Element;
export declare function createPopup(options: PopupProps | AlertPopupProps | ConfirmPopupProps): void;
export declare function removePopup({ wrap }: PopupProps): void;
export {};

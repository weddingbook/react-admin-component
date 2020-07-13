import { Component, ReactNode } from 'react';
import './Confirm.scss';
interface ModalButtonProps {
    label: string;
    action: () => void;
    className: string;
}
interface ConfirmModalProps {
    wrap: string;
    title: string;
    content: string;
    buttons: ModalButtonProps[];
    childrenElement: () => ReactNode;
    closeOnClickOutside: boolean;
    closeOnEsc: boolean;
    willUnmount: () => void;
    afterClose: () => void;
    onClickOutside: () => void;
}
export default class ConfirmModal extends Component<Partial<ConfirmModalProps>> {
    static defaultProps: {
        wrap: string;
        buttons: {
            label: string;
            action: () => void;
        }[];
        closeOnClickOutside: boolean;
        closeOnEsc: boolean;
        onClickOutside: () => void;
    };
    clickButton(button: ModalButtonProps): void;
    clickOverlay(): void;
    closeModal(): void;
    keyboardClose(e: KeyboardEvent): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export declare function ModalArea(props: {
    id: string;
    children: ReactNode;
}): JSX.Element;
export declare function createConfirm(properties: Partial<ConfirmModalProps>): void;
export declare function removeConfirm(wrap?: string): void;
export {};

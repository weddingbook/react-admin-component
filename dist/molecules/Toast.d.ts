/// <reference types="react" />
import './Toast.scss';
interface ToastProps {
    id: string;
    title?: string;
    message: string;
    messageType: 'success' | 'warn' | 'fail';
    closeOnClickOutside?: boolean;
    closeOnEsc?: boolean;
    position: 'RIGHT_TOP' | 'RIGHT_BOTTOM' | 'LEFT_TOP' | 'LEFT_BOTTOM';
    color: 'red' | 'yellow' | 'green';
    delay: number;
    willUnmount?: () => void;
    afterClose?: () => void;
    onClickOutside?: () => void;
    removeToast: (id: string, position: string) => void;
    removeToastState: (id: string, position: string) => void;
}
interface ToastContainerProps {
    toasts: ToastStoreProps;
    removeToast: () => void;
    removeToastState: () => void;
}
interface ToastStoreProps {
    'LEFT_TOP': ToastProps[];
    'LEFT_BOTTOM': ToastProps[];
    'RIGHT_TOP': ToastProps[];
    'RIGHT_BOTTOM': ToastProps[];
}
export declare const ToastContainer: ({ toasts, removeToast, removeToastState }: ToastContainerProps) => JSX.Element;
export declare const useToast: () => {
    toasts: ToastStoreProps;
    createToast: (options: ToastProps) => void;
    removeToast: (id: string, position: string) => void;
    removeToastState: (id: string, position: string) => void;
    removeAllToast: () => void;
};
export {};

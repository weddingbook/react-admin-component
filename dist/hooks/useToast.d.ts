import { ToastStoreProps, ToastProps } from '../molecules/Toast';
export declare type ToastHooksProps = {
    toasts: ToastStoreProps;
    createToast: (options: ToastProps) => void;
    removeToast: (id: string, position: string) => void;
    removeToastState: (id: string, position: string) => void;
    removeAllToast: () => void;
};
export declare const useToast: () => ToastHooksProps;

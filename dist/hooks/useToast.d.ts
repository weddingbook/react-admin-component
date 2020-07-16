import { ToastStoreProps, ToastProps } from '../molecules/Toast';
export declare const useToast: () => {
    toasts: ToastStoreProps;
    createToast: (options: ToastProps) => void;
    removeToast: (id: string, position: string) => void;
    removeToastState: (id: string, position: string) => void;
    removeAllToast: () => void;
};

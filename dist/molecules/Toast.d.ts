import './Toast.scss';
interface ToastProps {
    id: number;
    title?: string;
    message: string;
    messageType: 'success' | 'warn' | 'fail';
    closeOnClickOutside?: boolean;
    closeOnEsc?: boolean;
    position: ['left' | 'right', 'top' | 'bottom'];
    delay: number;
    willUnmount?: () => void;
    afterClose?: () => void;
    onClickOutside?: () => void;
}
export declare const useToast: () => {
    createToast: (options: ToastProps) => void;
    removeToast: (id: number) => void;
    removeAllToast: () => void;
};
export {};

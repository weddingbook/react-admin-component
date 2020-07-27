import { useState } from 'react';
import { ToastStoreProps, ToastProps } from '../molecules/Toast'

export type ToastHooksProps = {
    toasts: ToastStoreProps;
    createToast: (options: ToastProps) => void;
    removeToast: (id: string, position: string) => void;
    removeToastState: (id: string, position: string) => void;
    removeAllToast: () => void;
}

export const useToast = (): ToastHooksProps => {
    const [toasts, setToasts] = useState<ToastStoreProps>({
        'LEFT_TOP': [],
        'LEFT_BOTTOM': [],
        'RIGHT_TOP': [],
        'RIGHT_BOTTOM': []
    });
    const generateUuid = (): string => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    const createToast = (options: ToastProps) => {
        const position = options.position || 'RIGHT_TOP';
        options.id = generateUuid();
        setToasts(() => {
            const result: ToastStoreProps = { ...toasts };
            result[position] = [...toasts[position], options]
            return result;
        });
    }
    const removeToast = (id: string, position: string) => {
        const wrapper = document.getElementById(`toast-${id}`)?.parentElement!;
        const target = document.getElementById(`toast-${id}`);
        if (wrapper && target) {
            wrapper.removeChild(target)
            console.log(position)
        }
    }
    const removeToastState = (id: string, position: string) => {
        console.log(id, position)
        // setToasts(() => {
        // 	const result: ToastStoreProps = { ...toasts };
        // 	console.log(id)
        // 	console.log(position)
        // 	result[position] = [...toasts[position].filter((toast: ToastProps) => toast.id !== id), {}]
        // 	return result;
        // });
    }
    const removeAllToast = () => {
        setToasts({
            'LEFT_TOP': [],
            'LEFT_BOTTOM': [],
            'RIGHT_TOP': [],
            'RIGHT_BOTTOM': []
        });
    }
    return {
        toasts,
        createToast,
        removeToast,
        removeToastState,
        removeAllToast
    }
};

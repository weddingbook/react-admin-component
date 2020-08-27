import { useState } from 'react';

const generateUuid = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const useToast2 = () => {
    const [toastList, setToastList] = useState<any[]>([])

    const createToast = (options: any) => {
        options.id = generateUuid();
        setToastList([...toastList, options]);
    }

    const removeToast = (id: string) => {
        const toast = toastList.filter(value => value.id === id)[0];

        console.log(toast);
        // const wrapper = document.getElementById(`toast-${id}`)?.parentElement!;
        // const target = document.getElementById(`toast-${id}`);
        // if (wrapper && target) {
        //     wrapper.removeChild(target)
        //     console.log(position)
        // }
    }
    return {
        toastList,
        setToastList,
        createToast,
        removeToast,
    }
};

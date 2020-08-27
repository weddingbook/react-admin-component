import React, { useEffect } from 'react'
import './ToastContainer.scss';

const ToastContainer2 = ({ toastList, setToastList, toastPosition = 'right-top' }:
    { toastList: any, setToastList: any, toastPosition?: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' }) => {

    useEffect(() => {
    }, [toastList])

    useEffect(() => {
        if (toastList.length) {
            setTimeout(() => {
                const list = [...toastList];
                list.shift();
                setToastList(list)
            }, 2000);
        }

    }, [toastList])
    return (
        <div className={`toast-wrap2 ${toastPosition}`}>
            {(toastList && toastList.length) ? toastList.map((toast: any) => {
                return <Toast key={toast.id} toast={toast} />
            }) : <></>}
        </div>
    )
}

const Toast = (props: any) => {
    const { toast } = props;
    const { id, title, removeToast, color = 'red' } = toast;
    return (
        <div id={`toast-${id}`} className='toast'>
            {title && <h1>{title}</h1>}
            <div className={`circle ${color}`}></div>
            <p className='toast-content'>안녕하세요 메시지입니다.</p>
        </div>
    )
}

export default ToastContainer2
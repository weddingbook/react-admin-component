import React, { useState, useEffect } from 'react'
import './Toast.scss';

interface ToastProps {
	id: string,
	title?: string;
	message: string;
	messageType: 'success' | 'warn' | 'fail';
	closeOnClickOutside?: boolean;
	closeOnEsc?: boolean;
	position: 'RIGHT_TOP' | 'RIGHT_BOTTOM' | 'LEFT_TOP' | 'LEFT_BOTTOM';
	delay: number;
	willUnmount?: () => void;
	afterClose?: () => void;
	onClickOutside?: () => void;
	removeToast: () => void;
}
interface ToastStoreProps {
	'LEFT_TOP': ToastProps[];
	'LEFT_BOTTOM': ToastProps[];
	'RIGHT_TOP': ToastProps[];
	'RIGHT_BOTTOM': ToastProps[];
}


export const ToastContainer = ({ toasts, removeToast }: { toasts: ToastStoreProps, removeToast: () => void }) => {
	return (
		<div className="toast-wrap">
			<div className="left-top">
				{toasts['LEFT_TOP'].map((toast: ToastProps) => {
					return <Toast {...toast} key={toast.id} removeToast={removeToast} />
				})}
			</div>
			<div className="left-bottom">
				{toasts['LEFT_BOTTOM'].map((toast: ToastProps) => {
					return <Toast {...toast} key={toast.id} removeToast={removeToast} />
				})}
			</div>
			<div className="right-top">
				{toasts['RIGHT_TOP'].map((toast: ToastProps) => {
					return <Toast {...toast} key={toast.id} removeToast={removeToast} />
				})}
			</div>
			<div className="right-bottom">
				{toasts['RIGHT_BOTTOM'].map((toast: ToastProps) => {
					return <Toast {...toast} key={toast.id} removeToast={removeToast} />
				})}
			</div>
		</div>
	)
}

const Toast = (props: ToastProps) => {
	const { id, title, message, afterClose, delay } = props;
	const closeToast = () => {
		// removeToast(id);
		if (afterClose) {
			afterClose();
		}
	}
	useEffect(() => {
		setTimeout(() => {
			closeToast();
		}, delay);
		return () => {
			console.log('unmo')
		}
	}, []);
	return (
		<div id={`toast-${id}`} className="toast">
			{title && <h1>{title}</h1>}
			<span className="circle"></span>
			<p className="toast-content">{message}</p>
		</div>
	)
}
Toast.defaultProps = {
	closeOnClickOutside: true,
	closeOnEsc: true,
	willUnmount: () => { },
	afterClose: () => { },
	onClickOutside: () => { },
	delay: 3000,
	position: 'RIGHT_TOP'
}

export const useToast = () => {
	const [toasts, setToasts] = useState<ToastStoreProps>({
		'LEFT_TOP': [],
		'LEFT_BOTTOM': [],
		'RIGHT_TOP': [],
		'RIGHT_BOTTOM': []
	});
	const generateUuid = ():string => {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
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
		console.log(toasts);
	}
	const removeToast = (id: number) => {
		console.log(id);
		console.log(toasts);
		// const wrap = `toast-${props.id}`;
		// const target = document.getElementById(wrap);
		// if (target) {
		// 	unmountComponentAtNode(target);
		// }
	}
	const removeAllToast = () => {
		// setToasts([]);
	}
	return {
		toasts,
		createToast,
		removeToast,
		removeAllToast
	}
};


import React, { useEffect } from 'react'
import './Toast.scss';

export interface ToastProps {
	id: string,
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
	toasts: ToastStoreProps,
	removeToast: () => void,
	removeToastState: () => void
}

export interface ToastStoreProps {
	'LEFT_TOP': ToastProps[];
	'LEFT_BOTTOM': ToastProps[];
	'RIGHT_TOP': ToastProps[];
	'RIGHT_BOTTOM': ToastProps[];
}

const toastPositionMatrix = [
	['left-top', 'LEFT_TOP'],
	['left-bottom', 'LEFT_BOTTOM'],
	['right-top', 'RIGHT_TOP'],
	['right-bottom', 'RIGHT_BOTTOM'],
]

export const ToastContainer = ({ toasts, removeToast, removeToastState }: ToastContainerProps) => {
	useEffect(() => {
		console.log('toast-container')
	}, [toasts])
	return (
		<div className="toast-wrap">
			{toastPositionMatrix.map(position => (
				<div className={position[0]} key={position[0]}>
					{toasts[position[1]].map((toast: ToastProps) => {
						return <Toast {...toast} key={toast.id} removeToast={removeToast} removeToastState={removeToastState} />
					})}
				</div>
			))}
		</div>
	)
}

const Toast = (props: ToastProps) => {
	const { id, title, message, afterClose, removeToast, removeToastState, delay, color, position } = props;
	const closeToast = () => {
		removeToast(id, position);
		removeToastState(id, position)
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
			<div className={`circle ${color}`}></div>
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


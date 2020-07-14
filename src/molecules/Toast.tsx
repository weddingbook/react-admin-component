import React, { useReducer, useEffect, useContext, Fragment } from 'react'
import { render } from 'react-dom';
import './Toast.scss'; 

interface ToastContainerProps {
	toasts: ToastProps[]
}
interface ToastProps {
	id: number,
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
const ToastContext = React.createContext<ToastContainerProps>({
	toasts: []
})
const ToastContainer = () => {
	const { toasts } = useContext(ToastContext);
	return (
		<Fragment>
			{toasts.map((toast: ToastProps) => {
				return <Toast {...toast} key={toast.id}/>
			})}
		</Fragment>
	)
}

const Toast = (props: ToastProps) => {
	const { removeToast } = useToast();
	const { title, message, afterClose, delay } = props;
	const id = new Date().getTime();
	const closeToast = () => {
		removeToast(id);
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
	willUnmount: () => {},
	afterClose: () => {},
	onClickOutside: () => {},
	delay: 3000,
	position: ['right', 'top']
}

const toastState: ToastContainerProps = {toasts: []}
function toastReducer(state: ToastContainerProps, action: any) {
	switch (action.type) {
		case 'create':
			return {toasts: [...state.toasts, action.payload]}
		default:
			throw new Error();
	}
}
export const useToast = () => {
	const [state, dispatch] = useReducer(toastReducer, toastState);
	useEffect(() => {
		const {position = ['right', 'top']} = {};
		const wrap = `toast-${position.join('-')}`;
		let elWrap = document.getElementById(wrap);
		if (!elWrap) {
			elWrap = document.createElement('div');
			elWrap.id = wrap;
			document.body.appendChild(elWrap);
		}
		elWrap.classList.add('toast-wrap');
		render(
			<ToastContext.Provider value={{toasts: state.toasts}}>
				{state.toasts}
				<ToastContainer />
			</ToastContext.Provider>
		, elWrap);
	}, []);
	const createToast = (options: ToastProps) => {
		dispatch({type: 'create', payload: options});
	}
	const removeToast = (id: number) => {
		console.log(id);
		console.log(state.toasts);
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
		createToast,
		removeToast,
		removeAllToast
	}
};


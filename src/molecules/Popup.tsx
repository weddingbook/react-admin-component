import React, { Component, ReactNode } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Button from '../atoms/Button'
import './Popup.scss'; 

interface PopupButtonProps {
	label?: string;
	action?: () => void;
	type?: 'solid' | 'line' | 'text' | 'link';
    color?: 'blue' | 'yellow' | 'green' | 'red';
	className?: string;
}
interface PopupProps {
	wrap?: string;
	popupType: 'toast' | 'alert' | 'confirm';
	title?: string;
	message: string;
	messageType: 'success' | 'warn' | 'fail';
	closeOnClickOutside?: boolean;
	closeOnEsc?: boolean;
	willUnmount?: () => void;
	afterClose?: () => void;
	onClickOutside?: () => void;
}
interface AlertPopupProps extends PopupProps {
	button: PopupButtonProps;
}
interface ConfirmPopupProps extends PopupProps {
	buttons: PopupButtonProps[];
}
class Popup<P extends PopupProps> extends Component<P> {
	static defaultProps = {
		wrap: 'common-popup',
		closeOnClickOutside: true,
		closeOnEsc: true,
		willUnmount: () => {},
		afterClose: () => {},
		onClickOutside: () => {},
		button: {
			label: '확인'
		},
		buttons: [
			{label: '취소', type: 'line'},
			{label: '확인', color: 'red'}
		]
	}
	clickButton(button: PopupButtonProps) {
		if (button.action) {
			button.action();
		}
		this.closePopup();
	}
	clickOverlay() {
		const {closeOnClickOutside, onClickOutside} = this.props;
		const isClickOutside = true;
		if (closeOnClickOutside && isClickOutside) {
			if (onClickOutside) {
				onClickOutside();
			}
			this.closePopup();
		}
		if (onClickOutside) {
			onClickOutside();
		}
	}
	closePopup() {
		const { afterClose } = this.props;
		removePopup(this.props);
		if (afterClose) {
			afterClose();
		}
	}
	keyboardClose(e: KeyboardEvent) {
		const { closeOnEsc } = this.props;
		const isKeyCodeEscape = e.keyCode === 27
		if (closeOnEsc && isKeyCodeEscape) {
			this.closePopup();
		}
	}
	componentDidMount() {
		window.addEventListener('keydown', e => this.keyboardClose(e))
	}
	componentWillUnmount() {
		window.removeEventListener('keydown', (e) => this.keyboardClose(e))
		if (this.props.willUnmount) {
			this.props.willUnmount();
		}
	}
}
class ToastPopup extends Popup<PopupProps> {
	render() {
		const { title, message } = this.props;
		return (
			<div className="popup-wrap">
				<div
					className="overlay"
					onClick={this.clickOverlay.bind(this)}
				/>
				<div className="popup">
					{title && <h1>{title}</h1>}
					<span className="circle"></span>
					<p className="popup-content">{message}</p>
				</div>
			</div>
		)
	}
}

class AlertPopup extends Popup<AlertPopupProps> {
	render() {
		const { title, message, button } = this.props;
		return (
			<div className="popup-wrap">
				<div
					className="overlay"
					onClick={this.clickOverlay.bind(this)}
				/>
				<div className="popup">
					{title && <h1>{title}</h1>}
					<span className="circle"></span>
					<p className="popup-content">{message}</p>
					<div className="popup-btns">
						<Button onClick={() => this.clickButton(button)} type={button.type} size="small" color={button.color} className={button.className}>
							{button.label}
						</Button>
					</div>
				</div>
			</div>
		)
	}
}
class ConfirmPopup extends Popup<ConfirmPopupProps> {
	render() {
		const { title, message, buttons } = this.props;
		return (
			<div className="popup-wrap">
				<div
					className="overlay"
					onClick={this.clickOverlay.bind(this)}
				/>
				<div className="popup">
					{title && <h1>{title}</h1>}
					<span className="circle"></span>
					<p className="popup-content">{message}</p>
					<div className="popup-btns">
						{buttons?.map((button, i) => (
							<Button key={i} onClick={() => this.clickButton(button)} type={button.type} size="small" color={button.color} className={button.className}>
								{button.label}
							</Button>
						))}
					</div>
				</div>
			</div>
		)
	}
}

function createPopupWrap(wrap: string) {
	const elWrap = document.createElement('div');
	elWrap.id = wrap;
	document.body.appendChild(elWrap);
}
function renderPopup(type: string, options: PopupProps, elWrap: HTMLElement) {
	switch (type) {
		case 'toast':
			render(<ToastPopup {...(options as PopupProps)} />, elWrap);
			break;
		case 'alert':
			render(<AlertPopup {...(options as AlertPopupProps)} />, elWrap);
			break;
		case 'confirm':
			render(<ConfirmPopup {...(options as ConfirmPopupProps)} />, elWrap);
			break;
	}
}
export function PopupArea(props: {id: string, children: ReactNode}) {
	return (
		<div style={{position: 'relative', height: '100%'}}>
			{props.children}
			<div id={props.id}></div>
		</div>
	)
}
export function createPopup(options: PopupProps | AlertPopupProps | ConfirmPopupProps) {
	const popupType = options.popupType;
	const wrap = options.wrap || (popupType !== 'toast' ? 'common-popup' : 'common-toast-popup');
	let elWrap = document.getElementById(wrap);
	if (elWrap) {
		renderPopup(popupType, options, elWrap);
	} else {
		createPopupWrap(wrap);
		elWrap = document.getElementById(wrap);
		renderPopup(popupType, options, elWrap!);
	}
}
export function removePopup({wrap = 'common-popup', popupType}: PopupProps) {
	if (popupType === 'toast') wrap = 'common-toast-popup';
	const target = document.getElementById(wrap);
	if (target) {
		unmountComponentAtNode(target);
	}
}
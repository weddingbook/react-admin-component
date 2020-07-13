import React, { Component, ReactNode } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Button from '../atoms/Button'
import './Confirm.scss'; 

interface ModalButtonProps {
	label: string;
	action: () => void;
	type?: 'solid' | 'line' | 'text' | 'link';
    color?: 'blue' | 'yellow' | 'green' | 'red';
    size?: 'xs' | 'small' | 'middle' | 'large';
	className: string;
}
interface ConfirmModalProps {
	wrap: string;
	title: string;
	content: string;
	buttons: ModalButtonProps[];
	childrenElement: () => ReactNode;
	closeOnClickOutside: boolean;
	closeOnEsc: boolean;
	willUnmount: () => void;
	afterClose: () => void;
	onClickOutside: () => void;
}
export default class ConfirmModal extends Component<Partial<ConfirmModalProps>> {
	static defaultProps = {
		wrap: 'modal-wrap',
		buttons: [
			{
				label: '취소',
				type: 'line',
				color: 'blue',
				action: () => {}
			},
			{
				label: '확인',
				color: 'red',
				action: () => {}
			}
		],
		closeOnClickOutside: true,
		closeOnEsc: true,
		onClickOutside: () => {
			console.log(1);
		}
	}
	clickButton(button: ModalButtonProps) {
		button.action();
		this.closeModal();
	}
	clickOverlay() {
		const {closeOnClickOutside, onClickOutside} = this.props;
		const isClickOutside = true;
		if (closeOnClickOutside && isClickOutside) {
			if (onClickOutside) {
				onClickOutside();
			}
			this.closeModal();
		}
		if (onClickOutside) {
			onClickOutside();
		}
	}
	closeModal() {
		const { afterClose } = this.props;
		removeConfirm(this.props.wrap);
		if (afterClose) {
			afterClose();
		}
	}
	keyboardClose(e: KeyboardEvent) {
		const { closeOnEsc } = this.props;
		const isKeyCodeEscape = e.keyCode === 27
		if (closeOnEsc && isKeyCodeEscape) {
			this.closeModal();
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
	render() {
		const { title, content, buttons, childrenElement } = this.props;
		return (
			<div className="modal-wrap">
				<div
					className="overlay"
					onClick={this.clickOverlay.bind(this)}
				/>
				<div className="modal">
					{title && <h1>{title}</h1>}
					<span className="circle"></span>
					<p className="modal-content">{content}</p>
					{childrenElement &&
						childrenElement()
					}
					<div className="modal-btns">
						{buttons?.map((button, i) => (
							<Button key={i} onClick={() => this.clickButton(button)} type={button.type} size={button.size} color={button.color} className={button.className}>
								{button.label}
							</Button>
						))}
					</div>
				</div>
			</div>
		)
	}
}

function createModalWrap(wrap: string) {
	const elWrap = document.createElement('div');
	elWrap.id = wrap;
	document.body.appendChild(elWrap);
}
export function ModalArea(props: {id: string, children: ReactNode}) {
	return (
		<div style={{position: 'relative', height: '100%'}}>
			{props.children}
			<div id={props.id}></div>
		</div>
	)
}
export function createConfirm(properties: Partial<ConfirmModalProps>) {
	const wrap = properties.wrap || 'modal-wrap';
	let elWrap = document.getElementById(wrap);
	if (elWrap) {
		render(<ConfirmModal {...properties} />, elWrap);
	} else {
		createModalWrap(wrap);
		elWrap = document.getElementById(wrap);
		render(<ConfirmModal {...properties} />, elWrap);
	}
}
export function removeConfirm(wrap = 'modal-wrap') {
	const target = document.getElementById(wrap);
	if (target) {
		unmountComponentAtNode(target);
	}
}
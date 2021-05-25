import React, {CSSProperties} from 'react';
import './Modal.scss';

type Props = {
    children?: object,
    style?: CSSProperties,
    title?: string,
    subTitle?: string,
    size?: 'small' | 'medium' | 'large',
    onClickInBackground?: () => void,
    cancelButtonComponent?: object,
    actionButtonComponent?: object,
    footerComponent?: object,
	withSection?: boolean,
    noScroll?: boolean,
}

const Modal = ({
		children, style, title = 'Modal title', subTitle, size = 'small',
		withSection = false,
		noScroll = false,
		onClickInBackground = () => {
		}, cancelButtonComponent, actionButtonComponent, footerComponent
	}: Props) => {
    return (
        <div className='modal-wrap'>
            <div className='overlay' onClick={onClickInBackground}/>
            <div className={`modal modal-size-${size} ${noScroll && 'no-scroll'}`} style={style}>
				<header className="modal-header">
					<div className='header-top'>
						<h1>{title}</h1>
						<div className='btn-area'>
							{cancelButtonComponent}
							{actionButtonComponent}
						</div>
					</div>
					<div className='header-bottom'>{subTitle}</div>
				</header>
				<div className={`modal-contents ${withSection ? 'with-section' : ''}`}>{children}</div>
				{footerComponent && <footer>{footerComponent}</footer>}
            </div>
        </div>
    )
}

export default Modal

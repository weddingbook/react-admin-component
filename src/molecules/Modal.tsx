import React, { CSSProperties } from 'react';
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
}

const Modal = ({ children, style, title = 'Modal title', subTitle, size = 'small', onClickInBackground = () => { }, cancelButtonComponent, actionButtonComponent, footerComponent }: Props) => {
    return (
        <div className='modal-wrap'>
            <div className='overlay' onClick={() => { onClickInBackground() }}></div>
            <div className={`modal modal-size-${size}`} style={style}>
                <header>
                    <div className='header-top'>
                        <h1>{title}</h1>
                        <div className='btn-area'>
                            {cancelButtonComponent}
                            {actionButtonComponent}
                        </div>
                    </div>
                    <div className='header-bottom'>{subTitle}</div>
                </header>
                <div className='modal-contents'>{children}</div>
                {footerComponent && <footer>{footerComponent}</footer>}
            </div>
        </div>
    )
}

export default Modal

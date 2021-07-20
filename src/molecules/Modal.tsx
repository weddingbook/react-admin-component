import React, { CSSProperties } from 'react';
import './Modal.scss';

type Props = {
    children?: object,
    style?: CSSProperties,
    styleHeader?: CSSProperties,
    styleBody?: CSSProperties,
    styleFooter?: CSSProperties,
    title?: string,
    subTitle?: string,
    size?: 'small' | 'medium' | 'large',
    onClickInBackground?: () => void,
    cancelButtonComponent?: object,
    actionButtonComponent?: object,
    footerComponent?: object | null,
    withSection?: boolean,
    noScroll?: boolean,
}

const Modal = ({
    children, style, title = 'Modal title', subTitle, size = 'small',
    styleHeader = {},
    styleBody = {},
    styleFooter = {},
    withSection = false,
    noScroll = false,
    onClickInBackground = () => {
    }, cancelButtonComponent, actionButtonComponent, footerComponent
}: Props) => {
    return (
        <div className='modal-wrap'>
            <div className='overlay' onClick={onClickInBackground} />
            <div className={`modal modal-size-${size} ${noScroll && 'no-scroll'}`} style={style}>
                <header className="modal-header" style={styleHeader}>
                    <div className='header-top'>
                        <h1>{title}</h1>
                        <div className='btn-area'>
                            {cancelButtonComponent}
                            {actionButtonComponent}
                        </div>
                    </div>
                    <div className='header-bottom'>{subTitle}</div>
                </header>
                <div style={styleBody} className={`modal-contents ${withSection ? 'with-section' : ''}`}>{children}</div>
                {footerComponent && <footer style={styleFooter}>{footerComponent}</footer>}
            </div>
        </div>
    )
}

export default Modal

import React, { CSSProperties } from 'react';
import './Popup.scss';

type Props = {
    children?: string,
    style?: CSSProperties,
    color?: 'red' | 'green' | 'yellow'
    cancelButtonComponent?: object,
    actionButtonComponent?: object,
}

const Popup = ({ children, style, color = 'red', cancelButtonComponent, actionButtonComponent }: Props) => {
    return (
        <div className='popup' style={style}>
            <div className={`alert-dot ${color}`}></div>
            <span>{children}</span>
            {actionButtonComponent && <div className='btn-area'>
                {cancelButtonComponent}
                {actionButtonComponent}
            </div>}
        </div>
    )
}

export default Popup

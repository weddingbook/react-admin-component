import React, { CSSProperties } from 'react';
import './ModalItem.scss';

type Props = {
    children?: object
    style?: CSSProperties
    className?: string
}

const ModalItem = ({ children, className, style }: Props) => {
    return (
        <div className={`modal-item ${className}`} style={{...style}}>
            {children}
        </div>
    )
}

export default ModalItem

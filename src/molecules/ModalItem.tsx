import React, { CSSProperties } from 'react';
import './ModalItem.scss';

type Props = {
    children?: object,
    style?: CSSProperties,
}

const ModalItem = ({ children, style }: Props) => {
    return (
        <div className='modal-item' style={{...style}}>
            {children}
        </div>
    )
}

export default ModalItem

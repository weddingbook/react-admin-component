import React, { CSSProperties } from 'react';
import './Divider.scss';

type Props = {
    style?: CSSProperties,
}

const Divider = ({ style }: Props) => {
    return (
        <div className='divider' style={{ ...style}}>
        </div>
    )
}

export default Divider

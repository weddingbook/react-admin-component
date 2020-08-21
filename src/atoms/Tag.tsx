import React, { CSSProperties } from 'react';
import './Tag.scss';

type Props = {
    style?: CSSProperties
    children: string
    color: 'green' | 'red' | 'yellow'
}

const Tag = ({ children, color, style }: Props) => {
    return (
        <div className={`tag ${color}-tag`} style={{ ...style }}>
            {children}
        </div>
    )
}

export default Tag

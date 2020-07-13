import React from 'react';
import './Tag.scss';

type Props = {
    children: string
    color: 'green' | 'red' | 'yellow'
}

const Tag = ({ children, color }: Props) => {
    return (
        <div className={`tag ${color}-tag`}>
            {children}
        </div>
    )
}

export default Tag

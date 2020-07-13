import React from 'react';
import './SectionContainer.scss';
import { isArray } from 'util';

type Props = {
    children: object,
}

const SectionContainer = ({ children }: Props) => {
    return (
        <div className='section-container' style={{
            gridTemplateColumns: `repeat(${isArray(children) ? children.length : 1}, 1fr)`,
        }}>
            {children}
        </div>
    )
}

export default SectionContainer

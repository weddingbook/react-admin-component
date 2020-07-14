import React, { CSSProperties } from 'react';
import './DefinitionTagContainer.scss';
import { isArray } from 'util';

type Props = {
    children: object,
    style?: CSSProperties
}

const DefinitionTagContainer = ({ children, style }: Props) => {
    return (
        <div className='definition-tag-container' style={{
            ...style,
            gridTemplateColumns: `repeat(${isArray(children) ? children.length : 1}, 1fr)`,
        }}>
            {children}
        </div>
    )
}

export default DefinitionTagContainer

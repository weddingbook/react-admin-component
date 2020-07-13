import React from 'react';
import './DefinitionTagContainer.scss';
import { isArray } from 'util';

type Props = {
    children: object,
}

const DefinitionTagContainer = ({ children }: Props) => {
    return (
        <div className='definition-tag-container' style={{
            gridTemplateColumns: `repeat(${isArray(children) ? children.length : 1}, 1fr)`,
        }}>
            {children}
        </div>
    )
}

export default DefinitionTagContainer

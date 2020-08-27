import React, { CSSProperties } from 'react';
import './DefinitionTag.scss';

type Props = {
    children: number | string | object,
    title?: string,
    direction?: 'row' | 'column'
    style?: CSSProperties
}

const DefinitionTag = ({ children, style, title = '', direction }: Props) => {
    return (
        <dl className={`definition-tag-${direction}`} style={{ ...style }}>
            <dt>{title}</dt>
            <dd>{children}</dd>
        </dl>
    )
}

export default DefinitionTag

import React from 'react';
import './DefinitionTag.scss';

type Props = {
    children: string | object,
    title: string,
    direction?: 'row' | 'column'
}

const DefinitionTag = ({ children, title, direction }: Props) => {
    return (
        <dl className={`definition-tag-${direction}`}>
            <dt>{title}</dt>
            <dd>{children}</dd>
        </dl>
    )
}

export default DefinitionTag

import React from 'react';
import './Tooltip.scss';
import ReactTooltip from 'react-tooltip';

type Props = {
    children: string | object,
    id: string,
    buttonType?: boolean
}

// TODO: arrow 위치 변경되어야 함
const Tooltip = ({ children, id, buttonType }: Props) => {
    return (
        <ReactTooltip
            className={`${buttonType ? 'btn-tooltip' : ''}`}
            id={id} uuid={id}
            effect="solid"
        >
            {children}
        </ReactTooltip>
    )
}

export default Tooltip

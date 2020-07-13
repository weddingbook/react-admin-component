import React from 'react';
import './Tooltip.scss';
import ReactTooltip from 'react-tooltip';

type Props = {
    children: string | object,
    id: string,
}

// TODO: arrow 위치 변경되어야 함
const Tooltip = ({ children, id }: Props) => {
    return (
        <ReactTooltip id={id} uuid={id} overridePosition={(
            { left, top },
            currentEvent, currentTarget, node) => {
            const d = document.documentElement;
            
            console.log(currentEvent, currentTarget)
            left = Math.min(d.clientWidth - (node as HTMLDivElement).clientWidth, left);
            top = Math.min(d.clientHeight - (node as HTMLDivElement).clientHeight, top);
            left = Math.max(20, left);
            top = Math.max(20, top);
            return { top, left }
        }}>
            {children}
        </ReactTooltip>
    )
}

export default Tooltip

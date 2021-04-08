import React from 'react';
import './SectionContainer.scss';

type Props = {
    children: object;
    direction?: 'row' | 'column';
}

const SectionContainer = ({ children, direction = 'row' }: Props) => {
    const containerStyles = (() => {
        switch (direction) {
            case 'row':
                return {
                    gridTemplateColumns: `repeat(${Array.isArray(children) ? children.length : 1}, 1fr)`,
                }
            case 'column':
                return {}
        }
    })();
    return (
        <div className={`section-container ${direction}-container`} style={containerStyles}>
            {children}
        </div>
    )
}

export default SectionContainer

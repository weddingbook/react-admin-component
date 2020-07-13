import React, { CSSProperties } from 'react';
import './SearchBox.scss';

type Props = {
    children: Array<any>,
    style?: CSSProperties,
    stage: 1 | 2,
}

const SearchBox = ({ children, style, stage }: Props) => {
    const grid = `repeat(${stage}, 1fr)`;
    return (
        <section className='search-box' style={{...style, gridTemplateColumns: grid }}>
           {children}
        </section>
    )
}

export default SearchBox

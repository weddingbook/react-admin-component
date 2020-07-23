import React, { CSSProperties } from 'react';
import './SearchBox.scss';
import Button from '../atoms/Button';
import Divider from '../atoms/Divider';

type Props = {
    children: Array<any>,
    style?: CSSProperties,
    stage: 1 | 2,
    buttonTitle: string
    onClickSearchButton: () => void;
}

const SearchBox = ({ children, style, stage, buttonTitle, onClickSearchButton }: Props) => {
    const grid = `repeat(${stage}, 1fr)`;
    return (
        <div className='search-box-wrapper'>
            <section className={`search-box stage-${stage}`} style={{ ...style, gridTemplateColumns: grid }}>
                {children}
            </section>
            <Divider style={{ backgroundColor: '#eef2fa', marginTop: '16px', marginBottom: '12px' }} />
            <div className='btn-area'>
                <Button size='small' onClick={onClickSearchButton}>{buttonTitle}</Button>
            </div>
        </div>
    )
}

export default SearchBox

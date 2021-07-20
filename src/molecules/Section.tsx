import React, { CSSProperties } from 'react';
import './Section.scss';

type Props = {
    children?: object,
    style?: CSSProperties,
    title?: string,
    subTitle?: string,
    buttonComponent?: object,
    footerComponent?: object | null
}

const Section = ({ children, style, title = 'Section title', subTitle, buttonComponent, footerComponent }: Props) => {
    return (
        <section className='section' style={style}>
            <header className="section-header">
                <div className='header-top'>
                    <h1>{title}</h1>
                    <div className='section-btn-area'>
                        {buttonComponent}
                    </div>
                </div>
                <div className='header-bottom'>{subTitle}</div>
            </header>
            {children}
            {footerComponent && <footer>{footerComponent}</footer>}
        </section>
    )
}

export default Section

import { CSSProperties } from 'react';
import './Section.scss';
declare type Props = {
    children?: object;
    style?: CSSProperties;
    title?: string;
    subTitle?: string;
    buttonComponent?: object;
    footerComponent?: object | null;
};
declare const Section: ({ children, style, title, subTitle, buttonComponent, footerComponent }: Props) => JSX.Element;
export default Section;

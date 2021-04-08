import { CSSProperties } from 'react';
import './Section.scss';
declare type Props = {
    children?: object;
    style?: CSSProperties;
    title?: string;
    subTitle?: string;
    buttonComponent?: object;
};
declare const Section: ({ children, style, title, subTitle, buttonComponent }: Props) => JSX.Element;
export default Section;

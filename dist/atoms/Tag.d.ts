import { CSSProperties } from 'react';
import './Tag.scss';
declare type Props = {
    style?: CSSProperties;
    children: string;
    color: 'green' | 'red' | 'yellow' | 'gray';
};
declare const Tag: ({ children, color, style }: Props) => JSX.Element;
export default Tag;

import { CSSProperties } from 'react';
declare type Props = {
    children: JSX.Element;
    style?: CSSProperties;
    direction?: 'row' | 'column';
};
declare const TagContainer: ({ children, style, direction }: Props) => JSX.Element;
export default TagContainer;

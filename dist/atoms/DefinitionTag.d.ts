import { CSSProperties } from 'react';
import './DefinitionTag.scss';
declare type Props = {
    children: number | string | object;
    title?: string;
    direction?: 'row' | 'column';
    style?: CSSProperties;
};
declare const DefinitionTag: ({ children, style, title, direction }: Props) => JSX.Element;
export default DefinitionTag;

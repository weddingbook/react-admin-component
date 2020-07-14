import { CSSProperties } from 'react';
import './CombineInput.scss';
declare type Props = {
    children: object[];
    style?: CSSProperties;
    title?: string;
};
declare const CombineInput: ({ children, style, title }: Props) => JSX.Element;
export default CombineInput;

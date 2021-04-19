import { CSSProperties } from 'react';
import './InputContainer.scss';
declare type Props = {
    children: object;
    title?: string;
    inputListStyle?: CSSProperties;
};
declare const InputContainer: ({ children, title, inputListStyle }: Props) => JSX.Element;
export default InputContainer;

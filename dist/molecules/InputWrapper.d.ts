import { CSSProperties } from 'react';
import './InputWrapper.scss';
declare type Props = {
    children: object;
    invalid?: boolean;
    style?: CSSProperties;
    errorMessage?: string;
    informationMessage?: string;
    options?: Array<any>;
    onSelectOptionSet?: (option: any) => void;
};
declare const InputWrapper: ({ children, style, invalid, errorMessage, informationMessage, options, onSelectOptionSet }: Props) => JSX.Element;
export default InputWrapper;

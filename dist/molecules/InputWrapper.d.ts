/// <reference types="react" />
import './InputWrapper.scss';
declare type Props = {
    children: object;
    invalid?: boolean;
    errorMessage?: string;
    informationMessage?: string;
};
declare const InputWrapper: ({ children, invalid, errorMessage, informationMessage }: Props) => JSX.Element;
export default InputWrapper;

/// <reference types="react" />
import './CombineInput.scss';
declare type Props = {
    children: object[];
    title?: string;
};
declare const CombineInput: ({ children, title }: Props) => JSX.Element;
export default CombineInput;

import { CSSProperties } from 'react';
import './SpecialInput.scss';
declare type Props = {
    children: object;
    style?: CSSProperties;
    iconName: string;
    afterString?: string;
};
declare const SpecialInput: ({ children, style, iconName, afterString }: Props) => JSX.Element;
export default SpecialInput;

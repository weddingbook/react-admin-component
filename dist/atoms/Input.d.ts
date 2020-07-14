import { InputHTMLAttributes, CSSProperties } from 'react';
import './Input.scss';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    style?: CSSProperties;
    iconName?: string;
    afterString?: string;
    recommendOptions?: Array<any>;
    onSelectRecommendOptionSet?: (option: any) => void;
    errorMessage?: string;
    informationMessage?: string;
}
declare const Input: ({ style, iconName, afterString, recommendOptions, onSelectRecommendOptionSet, errorMessage, informationMessage, required, ...rest }: Props) => JSX.Element;
export default Input;

import { InputHTMLAttributes, CSSProperties, ReactComponentElement } from 'react';
import './Input.scss';
interface Props extends InputHTMLAttributes<HTMLInputElement> {
    style?: CSSProperties;
    inputStyle?: CSSProperties;
    iconName?: string;
    afterString?: string;
    recommendListButton?: ReactComponentElement<'button'>;
    recommendOptions?: Array<{
        name: string;
        value: any;
    }>;
    onSelectRecommendOptionSet?: (option: {
        name: string;
        value: any;
    }) => void;
    errorMessage?: string;
    informationMessage?: string;
}
declare const Input: ({ style, inputStyle, iconName, afterString, recommendListButton, recommendOptions, onSelectRecommendOptionSet, errorMessage, informationMessage, required, ...rest }: Props) => JSX.Element;
export default Input;

import { InputHTMLAttributes, CSSProperties, ReactComponentElement } from 'react';
import './Input.scss';
export interface IRecommendOption {
    thumbnail?: string;
    name: string;
    subName?: string;
    value: any;
}
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    style?: CSSProperties;
    inputStyle?: CSSProperties;
    iconName?: string;
    afterString?: string;
    recommendListButton?: ReactComponentElement<'button'>;
    recommendOptions?: IRecommendOption[];
    recommendType?: 'normal' | 'thumbnail';
    onSelectRecommendOptionSet?: (option: IRecommendOption) => void;
    errorMessage?: string;
    informationMessage?: string;
}
declare const Input: ({ style, inputStyle, iconName, afterString, recommendListButton, recommendOptions, recommendType, onSelectRecommendOptionSet, errorMessage, informationMessage, required, ...rest }: Props) => JSX.Element;
export default Input;

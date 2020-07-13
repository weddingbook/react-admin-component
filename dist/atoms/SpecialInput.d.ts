import { CSSProperties, ReactElement } from 'react';
import './SpecialInput.scss';
declare type Props = {
    children: ReactElement;
    style?: CSSProperties;
    iconName: string;
    afterString?: string;
    recommendOptions?: Array<any>;
    onSelectRecommendOptionSet?: (option: any) => void;
};
declare const SpecialInput: ({ children, style, iconName, afterString, recommendOptions, onSelectRecommendOptionSet }: Props) => JSX.Element;
export default SpecialInput;

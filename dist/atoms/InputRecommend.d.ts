import { CSSProperties } from 'react';
import './InputRecommend.scss';
declare type Props = {
    options: Array<any>;
    style?: CSSProperties;
    onSelectOptionSet: (option: any) => void;
    invalid: boolean;
    informationMessage: string;
};
declare const InputRecommend: ({ options, style, onSelectOptionSet, invalid, informationMessage }: Props) => JSX.Element;
export default InputRecommend;

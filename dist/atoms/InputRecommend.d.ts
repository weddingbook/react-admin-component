import { CSSProperties, ReactComponentElement } from 'react';
import './InputRecommend.scss';
declare type Props = {
    options: Array<{
        name: string;
        value: any;
    }>;
    style?: CSSProperties;
    recommendListButton?: ReactComponentElement<'button'>;
    onSelectOptionSet: (option: any) => void;
    invalid: boolean;
    informationMessage: string;
};
declare const InputRecommend: ({ options, style, recommendListButton, onSelectOptionSet, invalid, informationMessage }: Props) => JSX.Element;
export default InputRecommend;

import { CSSProperties, ReactComponentElement } from 'react';
import './InputRecommend.scss';
import { IRecommendOption } from './Input';
declare type Props = {
    options: IRecommendOption[];
    style?: CSSProperties;
    recommendType?: 'normal' | 'thumbnail';
    recommendListButton?: ReactComponentElement<'button'>;
    onSelectOptionSet: (option: IRecommendOption) => void;
    invalid: boolean;
    informationMessage: string;
};
declare const InputRecommend: ({ options, style, recommendType, recommendListButton, onSelectOptionSet, invalid, informationMessage }: Props) => JSX.Element;
export default InputRecommend;

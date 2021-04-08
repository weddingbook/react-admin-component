import { CSSProperties, ReactChild } from 'react';
import './SearchBox.scss';
declare type Props = {
    children: Array<any> | ReactChild;
    style?: CSSProperties;
    stage: 1 | 2;
    buttonTitle: string;
    onClickSearchButton: () => void;
};
declare const SearchBox: ({ children, style, stage, buttonTitle, onClickSearchButton }: Props) => JSX.Element;
export default SearchBox;

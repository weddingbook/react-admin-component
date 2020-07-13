import { CSSProperties } from 'react';
import './SearchBox.scss';
declare type Props = {
    children: Array<any>;
    style?: CSSProperties;
    stage: 1 | 2;
};
declare const SearchBox: ({ children, style, stage }: Props) => JSX.Element;
export default SearchBox;

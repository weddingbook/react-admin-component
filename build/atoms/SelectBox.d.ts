import { CSSProperties } from 'react';
import './SelectBox.scss';
declare type Props = {
    options: any[];
    selectedOption: string | number;
    style?: CSSProperties;
    onSelectOptionSet: (option: any) => void;
};
declare const SelectBox: ({ options, selectedOption, style, onSelectOptionSet }: Props) => JSX.Element;
export default SelectBox;

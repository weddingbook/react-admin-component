import { CSSProperties } from 'react';
import './SelectBox.scss';
declare type Props = {
    options: {
        value: any;
        name: string;
    }[];
    selectedOption: {
        value: any;
        name: string;
    };
    style?: CSSProperties;
    onSelectOptionSet: (option: any) => void;
    disabled?: boolean;
};
declare const SelectBox: ({ options, selectedOption, style, onSelectOptionSet, disabled }: Props) => JSX.Element;
export default SelectBox;

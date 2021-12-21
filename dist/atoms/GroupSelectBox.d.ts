import { CSSProperties } from 'react';
import './GroupSelectBox.scss';
export interface ISelectBoxOption {
    value: any;
    name: string;
    optgroup: string;
}
declare type Props = {
    options: ISelectBoxOption[];
    selectedOption: ISelectBoxOption;
    style?: CSSProperties;
    onSelectOptionSet: (option: any, group: any) => void;
    disabled?: boolean;
};
declare const GroupSelectBox: ({ options, selectedOption, style, onSelectOptionSet, disabled, }: Props) => JSX.Element;
export default GroupSelectBox;

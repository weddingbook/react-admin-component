import { CSSProperties } from 'react';
import './SelectBox.scss';
export interface ISelectBoxOption {
    value: any;
    name: string;
	additionalHtml?: {
		position?: 'before' | 'after';
		html: JSX.Element
	};
}
declare type Props = {
    options: ISelectBoxOption[];
    selectedOption: ISelectBoxOption;
    style?: CSSProperties;
    onSelectOptionSet: (option: any) => void;
    disabled?: boolean;
};
declare const SelectBox: ({ options, selectedOption, style, onSelectOptionSet, disabled }: Props) => JSX.Element;
export default SelectBox;

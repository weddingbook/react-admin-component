import './MultiSelectBox.scss';
import React from 'react';
import { Props as InputProps } from './Input';
import { ISelectBoxOption } from './SelectBox';
interface Props extends InputProps {
    multiSelect?: boolean;
    selectPrefix?: string;
    options: ISelectBoxOption[];
    selectedOptions: ISelectBoxOption[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectBoxOption[]>>;
    clickOption?: (item: ISelectBoxOption) => void;
}
declare const MultiSelectBox: ({ selectPrefix, multiSelect, options, selectedOptions, setSelectedOptions, clickOption, ...rest }: Props) => JSX.Element;
export default MultiSelectBox;

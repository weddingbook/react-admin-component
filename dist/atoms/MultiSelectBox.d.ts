import './MultiSelectBox.scss';
import React from 'react';
import { Props as InputProps } from './Input';
import { ISelectBoxOption } from './SelectBox';
interface Props extends InputProps {
    multiSelect?: boolean;
    width?: string;
    height?: string;
    styleSelectBox?: any;
    selectPrefix?: string;
    options: ISelectBoxOption[];
    selectedOptions: ISelectBoxOption[];
    setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectBoxOption[]>>;
    clickOption?: (item: ISelectBoxOption) => void;
    bottomButton?: {
        title: string;
        className?: string;
        style?: React.CSSProperties;
        action: () => void;
    };
}
declare const MultiSelectBox: ({ width, height, selectPrefix, multiSelect, options, selectedOptions, setSelectedOptions, clickOption, bottomButton, ...rest }: Props) => JSX.Element;
export default MultiSelectBox;

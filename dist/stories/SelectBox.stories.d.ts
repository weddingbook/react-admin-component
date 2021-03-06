import React from 'react';
import { ISelectBoxOption } from '../index';
declare const _default: {
    title: string;
    component: ({ id, options, selectedOption, style, onSelectOptionSet, disabled }: {
        id?: string | undefined;
        options: ISelectBoxOption[];
        selectedOption: ISelectBoxOption;
        style?: React.CSSProperties | undefined;
        onSelectOptionSet: (option: any) => void;
        disabled?: boolean | undefined;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const SelectBoxStory: () => JSX.Element;
export declare const SelectBoxStoryWithDisabled: () => JSX.Element;
export declare const selectBoxAdditionalHtml: () => JSX.Element;
export declare const SelectBoxPositionBottom: () => JSX.Element;
export declare const MultiSelectBoxStory: () => JSX.Element;
export declare const GroupSelectBoxStoryBox: () => JSX.Element;

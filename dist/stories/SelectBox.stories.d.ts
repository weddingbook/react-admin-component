import React from 'react';
declare const _default: {
    title: string;
    component: ({ options, selectedOption, style, onSelectOptionSet, disabled }: {
        options: import("..").ISelectBoxOption[];
        selectedOption: import("..").ISelectBoxOption;
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

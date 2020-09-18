import React from 'react';
declare const _default: {
    title: string;
    component: ({ options, selectedOption, style, onSelectOptionSet, disabled }: {
        options: {
            value: any;
            name: string;
        }[];
        selectedOption: {
            value: any;
            name: string;
        };
        style?: React.CSSProperties | undefined;
        onSelectOptionSet: (option: any) => void;
        disabled?: boolean | undefined;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const SelectBoxStory: () => JSX.Element;
export declare const SelectBoxStoryWithDisabled: () => JSX.Element;

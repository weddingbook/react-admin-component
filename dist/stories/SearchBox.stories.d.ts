import React from 'react';
declare const _default: {
    title: string;
    component: ({ children, style, stage, buttonTitle, onClickSearchButton }: {
        children: string | number | any[] | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
        style?: React.CSSProperties | undefined;
        stage: 2 | 1;
        buttonTitle: string;
        onClickSearchButton: () => void;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const SearchBoxStory: () => JSX.Element;
export declare const SearchBoxStoryWithChild: () => JSX.Element;
export declare const SearchBoxStoryWithRadioAndCheckBox: () => JSX.Element;

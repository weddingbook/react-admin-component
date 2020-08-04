import React from 'react';
declare const _default: {
    title: string;
    component: ({ children, style, title, subTitle, size, onClickInBackground, cancelButtonComponent, actionButtonComponent, footerComponent }: {
        children?: object | undefined;
        style?: React.CSSProperties | undefined;
        title?: string | undefined;
        subTitle?: string | undefined;
        size?: "small" | "medium" | "large" | undefined;
        onClickInBackground?: (() => void) | undefined;
        cancelButtonComponent?: object | undefined;
        actionButtonComponent?: object | undefined;
        footerComponent?: object | undefined;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const ModalStory: () => JSX.Element;
export declare const ModalStoryWithTab: () => JSX.Element;
export declare const ModalStoryWithCheckBoxAndRadioBox: () => JSX.Element;
export declare const ModalStoryWithLong: () => JSX.Element;
export declare const ModalStoryWithInform: () => JSX.Element;

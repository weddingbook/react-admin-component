import React from 'react';
declare const _default: {
    title: string;
    component: ({ children, type, color, size, iconName, iconSize, onClick, disabled, style, dataTip, dataFor, className }: {
        children?: string | object | undefined;
        type?: "link" | "line" | "text" | "solid" | undefined;
        color?: "blue" | "green" | "red" | "yellow" | undefined;
        size?: "small" | "large" | "middle" | "xs" | undefined;
        iconName?: string | undefined;
        iconSize?: string | number | undefined;
        onClick?: any;
        disabled?: boolean | undefined;
        style?: React.CSSProperties | undefined;
        dataTip?: boolean | undefined;
        dataFor?: string | undefined;
        className?: string | undefined;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const ButtonStory: () => JSX.Element;
export declare const ButtonStoryDisabled: () => JSX.Element;
export declare const ButtonStoryWithIcon: () => JSX.Element;

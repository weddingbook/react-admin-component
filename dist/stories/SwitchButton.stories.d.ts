declare const _default: {
    title: string;
    component: ({ toggleHeight, toggleType, onText, offText, toggleValue, onClick }: {
        toggleHeight?: number | undefined;
        toggleType?: "text" | "normal" | undefined;
        toggleValue: boolean;
        onClick: Function;
        onText?: string | undefined;
        offText?: string | undefined;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const ToggleButtonStory: () => JSX.Element;

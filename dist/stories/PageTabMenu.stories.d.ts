/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ tabList, onSelectMenu, selectedMenu, type }: {
        tabList: string[];
        onSelectMenu: (tabMenu: string) => void;
        selectedMenu: string;
        type?: "page" | "modal" | "section" | "list" | undefined;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const SectionTabMenuStory: () => JSX.Element;
export declare const ModalTabMenuStory: () => JSX.Element;
export declare const ListTabMenuStory: () => JSX.Element;

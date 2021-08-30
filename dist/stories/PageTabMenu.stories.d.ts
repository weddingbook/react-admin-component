declare const _default: {
    title: string;
    component: ({ tabList, onSelectMenu, selectedMenu, type }: {
        tabList: {
            name: string;
            value: any;
        }[];
        onSelectMenu: (tabMenu: {
            name: string;
            value: any;
        }) => void;
        selectedMenu: {
            name: string;
            value: any;
        };
        type?: "list" | "section" | "page" | "modal" | undefined;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const SectionTabMenuStory: () => JSX.Element;
export declare const ModalTabMenuStory: () => JSX.Element;
export declare const ListTabMenuStory: () => JSX.Element;

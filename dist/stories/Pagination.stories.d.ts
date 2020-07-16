/// <reference types="react" />
declare const _default: {
    title: string;
    component: ({ pageSize, pageSizeOptions, total, current, onPageChange }: {
        pageSize: number;
        pageSizeOptions: number[];
        total: number;
        current: number;
        onPageChange: (page: number, pageSize: number) => void;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const PaginationStory: () => JSX.Element;

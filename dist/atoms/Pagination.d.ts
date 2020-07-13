/// <reference types="react" />
import './Pagination.scss';
declare type Props = {
    pageSize: number;
    pageSizeOptions: Array<number>;
    total: number;
    current: number;
    onPageChange: (page: number, pageSize: number) => void;
};
declare const Pagination: ({ pageSize, pageSizeOptions, total, current, onPageChange }: Props) => JSX.Element;
export default Pagination;

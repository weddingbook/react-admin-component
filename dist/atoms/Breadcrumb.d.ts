/// <reference types="react" />
import './Breadcrumb.scss';
declare type Props = {
    breadcrumbs: any;
    menuMap: {
        [key: string]: string;
    };
    onChangePage: (pathname: string) => void;
};
export declare type MenuItem = {
    menuId: number;
    parentMenuId: null | number;
    children: Array<MenuItem>;
    url: null | string;
    name: string;
    visible: boolean;
    order: number;
};
declare const Breadcrumb: ({ breadcrumbs, menuMap, onChangePage }: Props) => JSX.Element;
export default Breadcrumb;

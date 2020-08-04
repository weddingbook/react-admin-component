/// <reference types="react" />
import './TabMenu.scss';
declare type Props = {
    tabList: string[];
    onSelectMenu: (tabMenu: string) => void;
    selectedMenu: string;
    type?: 'page' | 'modal' | 'section' | 'list';
};
export declare const PageTabMenu: ({ tabList }: Props) => JSX.Element;
declare const TabMenu: ({ tabList, onSelectMenu, selectedMenu, type }: Props) => JSX.Element;
export default TabMenu;

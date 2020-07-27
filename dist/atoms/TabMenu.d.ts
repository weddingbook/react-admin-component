/// <reference types="react" />
import './TabMenu.scss';
declare type Props = {
    tabList: string[];
    onSelectMenu: (tabMenu: string) => void;
    selectedMenu: string;
};
export declare const PageTabMenu: ({ tabList }: Props) => JSX.Element;
declare const TabMenu: ({ tabList, onSelectMenu, selectedMenu }: Props) => JSX.Element;
export default TabMenu;

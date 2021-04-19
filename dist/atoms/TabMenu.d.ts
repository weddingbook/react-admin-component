import './TabMenu.scss';
declare type TabItem = {
    name: string;
    value: any;
};
declare type Props = {
    tabList: TabItem[];
    onSelectMenu: (tabMenu: TabItem) => void;
    selectedMenu: TabItem;
    type?: 'page' | 'modal' | 'section' | 'list';
};
declare const TabMenu: ({ tabList, onSelectMenu, selectedMenu, type }: Props) => JSX.Element;
export default TabMenu;

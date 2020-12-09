import React from 'react';
import './TabMenu.scss';

type TabItem = { name: string, value: any }
type Props = {
    tabList: TabItem[]
    onSelectMenu: (tabMenu: TabItem) => void;
    selectedMenu: TabItem
    type?: 'page' | 'modal' | 'section' | 'list'
}

const TabMenu = ({ tabList, onSelectMenu, selectedMenu, type = 'modal' }: Props) => {
    return (
        <>
            <nav className={`tab-menu ${type === 'list' ? 'list-tab' : ''}`}>
                <ul>
                    {tabList.map((tab: TabItem) =>
                        <li
                            key={tab.value}
                            onClick={() => { onSelectMenu(tab) }}
                            className={`${type === 'list' ? 'list-tab-item' : 'modal-tab-item'} ${selectedMenu.value === tab.value ? 'on' : ''}`}
                        >
                            {tab.name}
                        </li>
                    )}
                </ul>
            </nav>
            {type === ('modal' || 'section') && <div className='divider in-tab-menu'></div>}
        </>
    )
}

export default TabMenu

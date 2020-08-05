import React from 'react';
import './TabMenu.scss';

type Props = {
    tabList: string[]
    onSelectMenu: (tabMenu: string) => void;
    selectedMenu: string
    type?: 'page' | 'modal' | 'section' | 'list'
}

const TabMenu = ({ tabList, onSelectMenu, selectedMenu, type = 'modal' }: Props) => {
    return (
        <>
            <nav className={`tab-menu ${type === 'list' ? 'list-tab' : ''}`}>
                <ul>
                    {tabList.map((value: string) =>
                        <li 
                            key={value} 
                            onClick={() => { onSelectMenu(value) }} 
                            className={`${type === 'list' ? 'list-tab-item' : 'modal-tab-item'} ${selectedMenu === value ? 'on' : ''}`}
                        >
                            {value}
                        </li>
                    )}
                </ul>
            </nav>
            {type === ('modal' || 'section') && <div className='divider in-tab-menu'></div>}
        </>
    )
}

export default TabMenu

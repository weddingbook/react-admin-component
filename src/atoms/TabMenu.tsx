import React from 'react';
import './TabMenu.scss';

type Props = {
    tabList: string[]
    onSelectMenu: (tabMenu: string) => void;
    selectedMenu: string
}

const TabMenu = ({ tabList, onSelectMenu, selectedMenu }: Props) => {
    return (
        <>
            <nav className='tab-menu'>
                <ul>
                    {tabList.map((value: string) => (<li key={value} onClick={() => { onSelectMenu(value) }} className={`${selectedMenu === value ? 'on' : ''}`}>
                        {value}
                    </li>))}
                </ul>
            </nav>
            <div className='divider in-tab-menu'></div>
        </>
    )
}

export default TabMenu

import React from 'react';
import './Breadcrumb.scss';
import Icon from 'react-eva-icons';

type Props = {
    breadcrumbs: any
    menuMap: {
        [key: string]: string
    }
    onChangePage: (pathname: string) => void;
}

export type MenuItem = {
    menuId: number
    parentMenuId: null | number
    children: Array<MenuItem>
    url: null | string
    name: string
    visible: boolean
    order: number
}

const Breadcrumb = ({ breadcrumbs, menuMap, onChangePage }: Props) => {
    return (
        <>
            <div className='breadcrumb'>
                {
                    breadcrumbs.map((value, index) => {
                        if (!value) return <React.Fragment key={index}></React.Fragment>
                        if (!value.menuId) {
                            return <React.Fragment key={index}>
                                <span>
                                    <Icon
                                        name="arrow-ios-forward-outline"
                                        size="14"
                                        fill='#c8c8c8'
                                    />
                                </span>
                                <span className='breadcrumb-item' key={value.name}>
                                    {value.name}
                                </span>
                            </React.Fragment>
                        }
                        if (!value.parentMenuId) {
                            return <React.Fragment key={index}>
                                <span className='breadcrumb-item depth1' key={value.name}>
                                    {value.name}
                                </span>
                            </React.Fragment>
                        }
                        return (
                            <React.Fragment key={value.menuId}>
                                <span>
                                    <Icon
                                        name="arrow-ios-forward-outline"
                                        size="14"
                                        fill='#c8c8c8'
                                    />
                                </span>
                                <span className='breadcrumb-item depth2'
                                    onClick={() => onChangePage(menuMap[value.menuId])}
                                >
                                    {value.name}
                                </span>
                            </React.Fragment>)
                    }
                    )
                }
            </div>
        </>
    )
}

export default Breadcrumb

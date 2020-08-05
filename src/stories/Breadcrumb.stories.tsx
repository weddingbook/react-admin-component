import React from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import { Tag } from '../index'
import Breadcrumb, { MenuItem } from '../atoms/Breadcrumb';


export default {
    title: '빵 부스러기',
    component: Tag,
    decorators: [withKnobs]
};
const menuMap = {
    '2': '/modal-test',
    '7': '/manage/team',
    '13': '/manage/customer',
    '4': '/manage/member',
    '5': '/manage/menu',
    '6': '/manage/product',
    '8': '/manage/package'
}

export const BreadcrumbStory = () => {
    const breadcrumbs = [
        {
            "menuId": 1, "parentMenuId": null,
            "children":
                [
                    { "menuId": 7, "parentMenuId": 1, "children": [], "uri": "/api/b2b/teams", "name": "팀 관리", "visible": true, "order": 0, "authorityType": "WRITE" },
                    { "menuId": 9, "parentMenuId": 1, "children": [], "uri": "/api/b2b/authorities/members", "name": "직원권한 관리", "visible": false, "order": 0, "authorityType": "WRITE" },
                    { "menuId": 10, "parentMenuId": 1, "children": [], "uri": "/api/b2b/authorities/teams", "name": "팀권한 관리", "visible": false, "order": 0, "authorityType": "WRITE" },
                    { "menuId": 11, "parentMenuId": 1, "children": [], "uri": "/api/b2b/file", "name": "파일 업로드", "visible": false, "order": 0, "authorityType": "WRITE" },
                    { "menuId": 12, "parentMenuId": 1, "children": [], "uri": "/api/b2b/regions", "name": "지역 관리", "visible": false, "order": 0, "authorityType": "WRITE" },
                    { "menuId": 13, "parentMenuId": 1, "children": [], "uri": "/api/b2b/customers", "name": "고객 관리", "visible": false, "order": 0, "authorityType": "WRITE" },
                    { "menuId": 4, "parentMenuId": 1, "children": [], "uri": "/api/b2b/members", "name": "직원 관리", "visible": true, "order": 1, "authorityType": "WRITE" },
                    { "menuId": 5, "parentMenuId": 1, "children": [], "uri": "/api/b2b/menus", "name": "메뉴 관리", "visible": true, "order": 2, "authorityType": "WRITE" },
                    { "menuId": 6, "parentMenuId": 1, "children": [], "uri": "/api/b2b/products", "name": "상품 관리", "visible": true, "order": 3, "authorityType": "WRITE" },
                    { "menuId": 8, "parentMenuId": 1, "children": [], "uri": "/api/b2b/packages", "name": "패키지 관리", "visible": true, "order": 4, "authorityType": "READ" }
                ],
            "uri": null, "name": "자원관리", "visible": true, "order": 1, "authorityType": "READ"
        },
        { "menuId": 7, "parentMenuId": 1, "children": [], "uri": "/api/b2b/teams", "name": "팀 관리", "visible": true, "order": 0, "authorityType": "WRITE" },
    ]

    const onChangePage = (pathname: string) => {
        console.log(pathname)
    }
    return <Breadcrumb menuMap={menuMap} breadcrumbs={breadcrumbs} onChangePage={onChangePage} />
}
import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import { Table } from 'antd'
import { Button, Pagination } from '../index';


export default {
    title: '페이지네이션',
    component: Pagination,
    decorators: [withKnobs]
};

export const PaginationStory = () => {
    let dataSourceTest: Array<object> = [];

    // const [dataSourceTest, setDataSourceTest ] = useState<Array<object>>([]);

    for (let i = 0; i < 219; i++) {
        dataSourceTest.push({
            key: '3',
            th_Label1: <span>YYYY-MM-DD<br />HH:MM</span>,
            th_Label2: i,
            th_Label3: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            th_Label4: <Button size='small'>Button</Button>,
            th_Label5: <Button size='small' type='line'>Button</Button>,
        })
    }

    // setDataSourceTest(dataSourceTestList);

    const columns = [
        {
            title: 'th_Label',
            dataIndex: 'th_Label1',
            key: 'th_Label1',
        },
        {
            title: 'id',
            dataIndex: 'th_Label2',
            defaultSortOrder: 'ascend',
            key: 'th_Label2',
            sorter: (a, b) => {
                console.log({ a, b });
                // api를 호출하여 해당 컬럼의 sort를 값으로 줘서 호춣하고 그 값을 받아와야 함.
                // 그럼 값이 새로 생성되니까
                // return a.th_Label2 - b.th_Label2
            },
        },
        {
            title: 'th_Label',
            dataIndex: 'th_Label3',
            key: 'th_Label3',
        },
        {
            title: 'th_Label',
            dataIndex: 'th_Label4',
            key: 'th_Label4',
        },
        {
            title: 'th_Label',
            dataIndex: 'th_Label5',
            key: 'th_Label5',
        },
    ];

    const [realData, setRealData] = useState([...dataSourceTest].splice(0, 10))

    const [current, setCurrent] = useState(1);
    const onPaginationChange = (page: number, pageSize: number) => {
        setCurrent(page)
        setRealData([...dataSourceTest].splice((page - 1) * pageSize, pageSize))
    }
    return <div style={{ padding: '10px' }}>
        <Table dataSource={realData} columns={columns} pagination={false} showSorterTooltip={false} />
        <Pagination pageSize={10}
            pageSizeOptions={[10, 50, 100, 1000]}
            total={dataSourceTest.length}
            current={current}
            onPageChange={onPaginationChange}
        />
    </div>
}
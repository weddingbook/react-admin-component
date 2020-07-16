import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs'
import { Table } from 'antd'
import { Button, ViewMore } from '../index'

export default {
    title: '더 보기',
    component: ViewMore,
    decorators: [withKnobs]
};

export const ViewMoreStory = () => {
    const dataSourceTest = [];
    for (let i = 1; i < 35; i++) {
        dataSourceTest.push({
            key: '3',
            th_Label1: `YYYY-MM-DD
      HH:MM`,
            th_Label2: i,
            th_Label3: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            th_Label4: <Button size='small'>Button</Button>,
            th_Label5: <Button size='small' type='line'>Button</Button>,
        })
    }

    const columns = [
        {
            title: 'th_Label',
            dataIndex: 'th_Label1',
            key: 'th_Label1',
        },
        {
            title: 'th_Label',
            dataIndex: 'th_Label2',
            key: 'th_Label2',
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

    const [dataSource2, setDataSource2] = useState(dataSourceTest)
    const [realData, setRealData] = useState([...dataSource2].splice(0, 3))

    const onClickMoreButton = (count: number) => {
        setRealData([...dataSource2].splice(0, 3 + (count * 10)))
    }

    return <div style={{width: '600px', padding: '10px'}}>
        <Table dataSource={realData} columns={columns} pagination={false} />
        <ViewMore nowShowingRow={realData.length} total={dataSource2.length} onClickMoreButton={onClickMoreButton} />
    </div>
}
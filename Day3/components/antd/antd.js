import React, { useState } from 'react'
import { Tabs, Form} from 'antd'
import AntdLatihan from './antdLatihan';
import AntdForm from './antdForm';
import AntdTable from './antdTable';
import AntdPaginationTable from './antdPaginationTable'


export default function App() {
    const { TabPane } = Tabs;
    function callback(key) {
    }
  return (
    <div className='mt-md-3'>
     
      <Tabs defaultActiveKey="1" onChange={callback} centered>
        <TabPane tab="Tab Form" key="1">
        <AntdForm/>
        </TabPane>
        
        <TabPane tab="Tab Table" key="2">
        <AntdTable/>
        </TabPane>
        
        <TabPane tab="Tab Pagination" key="3">
        <AntdPaginationTable/>
        </TabPane>
        
        <TabPane tab="Tab Latihan" key="4">
        <AntdLatihan/>
        </TabPane>
     
      </Tabs>
     
    </div>
  );
}
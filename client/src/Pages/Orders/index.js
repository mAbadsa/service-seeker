import React from 'react';
import { Tabs } from 'antd';

import OrdersReqTab from './OrdersReqTab';
import OrdersTab from './OrdersTab';

import './style.css';

const { TabPane } = Tabs;

const OrdersPage = () => (
  <Tabs className="order-tabs" defaultActiveKey="1" centered>
    <TabPane tab="Orders Request" key="1">
      <OrdersReqTab />
    </TabPane>
    <TabPane tab="Orders" key="2">
      <OrdersTab />
    </TabPane>
  </Tabs>
);

export default OrdersPage;

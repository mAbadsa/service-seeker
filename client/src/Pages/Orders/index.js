import React from 'react';
import { Tabs } from 'antd';

import OrdersReqTab from './OrdersReqTab';
import OrdersTab from './OrdersTab';

import './style.css';
import MoreInfo from '../../Components/MoreInfo';
import { USER_ORDER } from '../../Utils/moreInfo.constant';

const { TabPane } = Tabs;

const OrdersPage = () => (
  <>
    <Tabs id="order-tabs" defaultActiveKey="1" centered>
      <TabPane tab="Orders Request" key="1">
        <OrdersReqTab />
      </TabPane>
      <TabPane tab="Orders" key="2">
        <OrdersTab />
      </TabPane>
      <TabPane tab={<MoreInfo content={USER_ORDER} />} disabled />
    </Tabs>
  </>
);

export default OrdersPage;

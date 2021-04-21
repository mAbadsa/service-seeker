import React, { useState } from 'react';

import { Tabs } from 'antd';

import { SyncOutlined } from '@ant-design/icons';
import PendingProvider from './pendingOrderRequest';
import AcceptedOrders from './acceptedOrders';

const { TabPane } = Tabs;

const Orders = () => {
  const [orderRefresh, setOrderRefresh] = useState(false);

  const handleOrderRefresh = () => {
    setOrderRefresh(!orderRefresh);
  };

  return (
    <div>
      <Tabs id="order-tabs" defaultActiveKey="1" centered>
        <TabPane tab="Orders Request" key="1">
          <PendingProvider
            refresh={orderRefresh}
            handelRefresh={handleOrderRefresh}
          />
        </TabPane>
        <TabPane tab="Orders" key="2">
          <AcceptedOrders refresh={orderRefresh} />
        </TabPane>
        <TabPane
          className="order-refresh"
          tab={
            <SyncOutlined
              onClick={handleOrderRefresh}
              style={{
                color: '#8f8f8f',
              }}
            />
          }
          disabled
        />
      </Tabs>
    </div>
  );
};

export default Orders;

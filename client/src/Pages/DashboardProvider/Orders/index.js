import React from 'react';
import PropTypes from 'prop-types';

import { Tabs } from 'antd';

import PendingProvider from './pendingOrderRequest';
import AcceptedOrders from './acceptedOrders';

const { TabPane } = Tabs;

const Orders = ({ refresh, handelRefresh }) => (
  <div>
    <Tabs className="order-tabs" defaultActiveKey="1" centered>
      <TabPane tab="Orders Request" key="1">
        <PendingProvider refresh={refresh} handelRefresh={handelRefresh} />
      </TabPane>
      <TabPane tab="Orders" key="2">
        <AcceptedOrders refresh={refresh} />
      </TabPane>
    </Tabs>
  </div>
);

Orders.propTypes = {
  refresh: PropTypes.bool.isRequired,
  handelRefresh: PropTypes.func.isRequired,
};

export default Orders;

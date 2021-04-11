import React from 'react';
import PropTypes from 'prop-types';

import { Tabs } from 'antd';

import PendingProvider from './pendingOrderRequest';

const { TabPane } = Tabs;

const Orders = ({ refresh }) => (
  <div>
    <Tabs className="order-tabs" defaultActiveKey="1" centered>
      <TabPane tab="Orders Request" key="1">
        <PendingProvider refresh={refresh} />
      </TabPane>
      <TabPane tab="Orders" key="2">
        <p>Nothing here, Go out!</p>
      </TabPane>
    </Tabs>
  </div>
);

Orders.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default Orders;

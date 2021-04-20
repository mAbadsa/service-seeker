import React from 'react';
import PropTypes from 'prop-types';

import { Tabs } from 'antd';

import PendingProvider from './pendingOrderRequest';
import AcceptedOrders from './acceptedOrders';
import MoreInfo from '../../../Components/MoreInfo';
import { DASHBOARD_ORDER } from '../../../Utils/moreInfo.constant';

const { TabPane } = Tabs;

const Orders = ({ refresh }) => (
  <div>
    <Tabs id="order-tabs" defaultActiveKey="1" centered>
      <TabPane tab="Orders Request" key="1">
        <PendingProvider refresh={refresh} />
      </TabPane>
      <TabPane tab="Orders" key="2">
        <AcceptedOrders refresh={refresh} />
      </TabPane>
      <TabPane tab={<MoreInfo content={DASHBOARD_ORDER} />} disabled />
    </Tabs>
  </div>
);

Orders.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default Orders;

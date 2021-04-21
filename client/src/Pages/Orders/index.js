import React from 'react';
import { Row, Col, Tabs } from 'antd';

import OrdersReqTab from './OrdersReqTab';
import OrdersTab from './OrdersTab';
import MoreInfo from '../../Components/MoreInfo';
import { USER_ORDER } from '../../Utils/moreInfo.constant';

import './style.css';

const { TabPane } = Tabs;

const OrdersPage = () => (
  <>
    <Row justify="center">
      <Col className="more-info-contener" sm={20}>
        <MoreInfo content={USER_ORDER} />
      </Col>
    </Row>
    <Tabs id="order-tabs" defaultActiveKey="1" centered>
      <TabPane tab="Orders Request" key="1">
        <OrdersReqTab />
      </TabPane>
      <TabPane tab="Orders" key="2">
        <OrdersTab />
      </TabPane>
    </Tabs>
  </>
);

export default OrdersPage;

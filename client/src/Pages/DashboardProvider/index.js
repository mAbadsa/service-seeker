import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Typography } from 'antd';
import {
  AppstoreOutlined,
  BellOutlined,
  UserOutlined,
  BellFilled,
} from '@ant-design/icons';

import Avatar from '../../Components/Avatar';
import './style.css';

const { Sider, Content } = Layout;
const { Text } = Typography;

const DashboardProvider = () => (
  <Layout className="layout">
    <Sider>
      <div className="logo">
        <Avatar size={100} />
        <Text>name</Text>
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<AppstoreOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<BellOutlined />}>
          Notifications
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
      </Menu>
    </Sider>

    <Layout className="site-layout">
      <Content className="site-layout-background">
        <div className="layoutHeder">
          <Text>Profile</Text>
          <BellFilled />
        </div>
      </Content>
    </Layout>
  </Layout>
);
DashboardProvider.propTypes = {
  children: PropTypes.node,
};

export default DashboardProvider;

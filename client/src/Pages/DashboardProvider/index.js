import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Layout, Menu, Typography, Grid, Drawer } from 'antd';
import {
  AppstoreOutlined,
  BellOutlined,
  UserOutlined,
  BellFilled,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import Avatar from '../../Components/Avatar';
import './style.css';

const { Sider, Content } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;
const DashboardProvider = () => {
  const { md } = useBreakpoint();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const mySider = (
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
  );
  return (
    <Layout className="layout">
      {md ? mySider : null}

      <Layout className="site-layout">
        <Content className="site-layout-background">
          <div className="layoutHeder">
            {!md ? (
              <>
                <MenuOutlined onClick={showDrawer} />
                <Drawer
                  title={<CloseOutlined onClick={onClose} />}
                  placement="left"
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                >
                  {mySider}
                </Drawer>
              </>
            ) : null}
            <Text>Profile</Text>
            <BellFilled />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
DashboardProvider.propTypes = {
  children: PropTypes.node,
};

export default DashboardProvider;

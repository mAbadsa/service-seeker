import React, { useState } from 'react';
import Axios from 'axios';
import { Layout, Menu, Typography, Grid, Drawer, message, Switch } from 'antd';
import {
  AppstoreOutlined,
  BellOutlined,
  UserOutlined,
  BellFilled,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import LogoutComponent from '../../Components/Logout';
import Avatar from '../../Components/Avatar';
import Profile from './Profile';
import Orders from './Orders';
import Notifications from './Notifications';

import './style.css';

const { Sider, Content } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;
const DashboardProvider = () => {
  const { md } = useBreakpoint();
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(<Orders />);
  const [title, setTitle] = useState('Orders');

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const handleChangMenu = (e) => {
    if (e.key === '1') {
      setPage(<Orders />);
      setTitle('Orders');
    } else if (e.key === '2') {
      setPage(<Notifications />);
      setTitle('Notifications');
    } else if (e.key === '3') {
      setPage(<Profile />);
      setTitle('Profile');
    }
  };

  const availability = async (checked) => {
    try {
      await Axios.patch('/api/v1/provider/availability');
      console.log(checked);
    } catch (err) {
      message.error('Something went wrong!');
    }
  };

  const mySider = (
    <Sider className="siderStyle">
      <div>
        <div className="logo">
          <Avatar size={100} />
          <Text>name</Text>
        </div>
        <Menu
          onClick={handleChangMenu}
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Orders
          </Menu.Item>
          <Menu.Item key="2" icon={<BellOutlined />}>
            Notifications
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </div>

      <div>
        <div className="available">
          <span> Available ?</span>
          <Switch onChange={availability} />
        </div>
        <LogoutComponent dashBoard={true} />
      </div>
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
            <Text>{title}</Text>
            <div className="bell">
              <BellFilled />
            </div>
          </div>
          {page}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardProvider;

import React, { useState } from 'react';
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
  const mySider = (
    <Sider>
      <div className="logo">
        <Avatar size={100} />
        <Text>name</Text>
      </div>
      <Menu onClick={handleChangMenu} mode="inline" defaultSelectedKeys={['1']}>
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
            <BellFilled />
          </div>
          {page}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardProvider;

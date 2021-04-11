import React, { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import {
  Layout,
  Menu,
  Typography,
  Grid,
  Drawer,
  message,
  Switch,
  Spin,
} from 'antd';
import {
  AppstoreOutlined,
  BellOutlined,
  UserOutlined,
  BellFilled,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';

import { AuthContext } from '../../Context/Authentication';

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
  const { userData } = useContext(AuthContext);

  const { md } = useBreakpoint();

  const [visible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [providerDetails, setProviderDetails] = useState(null);
  const [page, setPage] = useState(<Orders />);
  const [title, setTitle] = useState('Orders');
  const [switchLoading, setSwitchLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get('/api/v1/provider/information');
        if (unmounted) {
          setLoading(false);
          setProviderDetails(data.data[0]);
        }
      } catch (error) {
        message.error('Something went wrong!');
        setLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, [refresh]);

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

  const handleAvailability = async () => {
    try {
      setSwitchLoading(true);
      await Axios.patch('/api/v1/provider/availability');
      setRefresh(!refresh);
      setSwitchLoading(false);
      message.destroy();
      message.success('your status updated successfully');
    } catch (err) {
      message.destroy();
      message.error(err.response.data.message);
      setSwitchLoading(false);
    }
  };

  const mySider = (
    <Sider className="siderStyle">
      <div>
        <div className="logo">
          <Avatar srcImg={userData.avatar} size={100} />
          {isLoading ? (
            <Spin />
          ) : (
            <>
              <Text level={3}>{providerDetails?.title}</Text>
              <Text strong={false} level={4}>
                {userData?.username}
              </Text>
            </>
          )}
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
          <Switch
            onChange={handleAvailability}
            loading={isLoading || switchLoading}
            checked={providerDetails?.availability}
          />
        </div>
        <LogoutComponent dashBoard={true} />
      </div>
    </Sider>
  );
  return (
    <Layout className="layout">
      {md && mySider}

      <Layout className="site-layout">
        <Content className="site-layout-background">
          <div className="layoutHeder">
            {!md && (
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
            )}
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

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
  const { md } = useBreakpoint();
  const [visible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [providerDetails, setProviderDetails] = useState(null);
  const [page, setPage] = useState(<Orders />);
  const [title, setTitle] = useState('Orders');
  const [isSwitchLoading, setSwitchLoading] = useState(false);
  const [isSwitch, setSwitch] = useState(false);
  const { userData } = useContext(AuthContext);
  useEffect(() => {
    let unmounted = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(`/api/v1/provider/${userData.id}`);
        if (unmounted) {
          setLoading(false);
          setProviderDetails(data.data[0]);
          setSwitch(data.data[0].availability);
        }
      } catch (error) {
        message.error('Something went wrong!');
        setLoading(false);
      }
    })();
    return () => {
      unmounted = false;
    };
  }, [userData.id]);

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
      setSwitchLoading(true);
      await Axios.patch('/api/v1/provider/availability', {
        id: providerDetails?.id,
      });
      setSwitch(checked);
      setSwitchLoading(false);
      message.destroy();
      message.success('status updated successfully');
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
          <Switch
            onChange={availability}
            loading={isSwitchLoading}
            checked={isSwitch}
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
          {isLoading ? <Spin className="UserInfo-icon" /> : page}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardProvider;

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { AuthContext } from '../../Context/Authentication';

import LogoutComponent from '../../Components/Logout';
import Avatar from '../../Components/Avatar';
import Profile from './Profile';
import Orders from './Orders';
import Notifications from './Notifications';
import MoreInfo from '../../Components/MoreInfo';
import { DASHBOARD_ORDER } from '../../Utils/moreInfo.constant';
import { HOME_PAGE } from '../../Utils/routes.constant';

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
  const [title, setTitle] = useState('Orders');
  const [switchLoading, setSwitchLoading] = useState(false);
  const [infoRefresh, setInfoRefresh] = useState(false);

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
        setLoading(false);
        message.error(error.response.data.message, 'Something went wrong!');
      }
    })();
    return () => {
      unmounted = false;
    };
  }, [infoRefresh]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleChangMenu = (e) => {
    if (e.key === '1') {
      setTitle('Orders');
    } else if (e.key === '2') {
      setTitle('Notifications');
    } else if (e.key === '3') {
      setTitle('Profile');
    }
  };

  const handleInformationRefresh = () => {
    setInfoRefresh(!infoRefresh);
  };

  const handleAvailability = async () => {
    try {
      setSwitchLoading(true);
      await Axios.patch('/api/v1/provider/availability');
      handleInformationRefresh();
      setSwitchLoading(false);
      message.destroy();
      message.success('your status updated successfully');
    } catch (err) {
      message.destroy();
      message.error(err.response.data.message || 'Something went wrong!');
      setSwitchLoading(false);
    }
  };

  const mySider = (
    <Sider className="siderStyle">
      <div>
        <div className="logo">
          <Link to={HOME_PAGE} className="logoText">
            S-Seeker
            <HomeOutlined />
          </Link>

          <Avatar srcImg={userData.avatar} size={100} />

          <Text strong={false} level={3} className="logoTextName">
            {userData?.username}
          </Text>
          <Text level={4}>{isLoading ? <Spin /> : providerDetails?.title}</Text>
        </div>
        <Menu
          className="menu"
          onClick={handleChangMenu}
          mode="inline"
          defaultSelectedKeys="1"
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
          <span> Ready to work ?</span>
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
            <div>
              <MoreInfo content={DASHBOARD_ORDER} placement="bottomRight" />
            </div>
          </div>
          {title === 'Orders' && <Orders />}
          {title === 'Notifications' && <Notifications />}
          {title === 'Profile' && (
            <Profile
              userData={userData}
              refresh={handleInformationRefresh}
              providerDetails={providerDetails}
            />
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardProvider;

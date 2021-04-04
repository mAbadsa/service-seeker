import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AuthContext } from '../../Context/Authentication';
import Button from '../Button';
import UserInfo from '../UserInfo';
import {
  PROVIDER_DASHBOARD_PAGE,
  LOGIN_PAGE,
  HOME_PAGE,
  ORDERS_PAGE,
  ABOUT_US,
} from '../../Utils/routes.constant';

const { Header } = Layout;

const NavBar = () => {
  const { isAuth, userData } = useContext(AuthContext);
  const history = useHistory();
  const [current, setCurrent] = useState('home');

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header className="header">
      <p className="logo">Hound</p>
      <Menu
        className="nav-menu"
        onClick={handleMenu}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item
          onClick={() => {
            history.push(HOME_PAGE);
          }}
          key="home"
        >
          Home
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            history.push(ABOUT_US);
          }}
          key="About us"
        >
          About Us
        </Menu.Item>
        {() => {
          if (isAuth) {
            if (userData.role === 'user') {
              <Menu.Item
                onClick={() => {
                  history.push(ORDERS_PAGE);
                }}
                key="Orders"
              >
                Order
              </Menu.Item>;
            } else {
              <Menu.Item
                onClick={() => {
                  history.push(PROVIDER_DASHBOARD_PAGE);
                }}
                key="Dashboard"
              >
                Dashboard
              </Menu.Item>;
            }
          }
        }}
      </Menu>
      {!isAuth ? (
        <Button
          handelClick={() => {
            history.push(LOGIN_PAGE);
          }}
          className="login-btn"
          type="thirdButton"
        >
          Sign in
        </Button>
      ) : (
        <UserInfo />
      )}
    </Header>
  );
};

export default NavBar;

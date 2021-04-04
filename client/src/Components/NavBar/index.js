import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AuthContext } from '../../Context/Authentication';
import Button from '../Button';
import UserInfo from '../UserInfo';

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
            history.push('/');
          }}
          key="home"
        >
          Home
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            history.push('/about-us');
          }}
          key="About us"
        >
          About Us
        </Menu.Item>
        {!isAuth ? null : (
          <>
            {isAuth && userData.role === 'user' ? (
              <Menu.Item
                onClick={() => {
                  history.push('/orders');
                }}
                key="Orders"
              >
                Order
              </Menu.Item>
            ) : (
              <Menu.Item
                onClick={() => {
                  history.push('/provider/dashboard');
                }}
                key="Dashboard"
              >
                Dashboard
              </Menu.Item>
            )}
          </>
        )}
      </Menu>
      {!isAuth ? (
        <Button
          handelClick={() => {
            history.push('/login');
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

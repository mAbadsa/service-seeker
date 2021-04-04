import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Typography, Menu } from 'antd';
import { AuthContext } from '../../Context/Authentication';
import Button from '../Button';
import UserInfo from '../UserInfo';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = () => {
  const { isAuth, userData } = useContext(AuthContext);
  const history = useHistory();
  const [current, setCurrent] = useState('home');

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header>
      <Title level={4}>Hound</Title>
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
        {!isAuth ? (
          <Menu.Item>
            <Button
              handelClick={() => {
                history.push('/login');
              }}
              className="thirdButton"
            >
              Sign in
            </Button>
          </Menu.Item>
        ) : (
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
            <Menu.Item>
              <UserInfo />
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};

export default NavBar;

import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Typography, Menu } from 'antd';
import AuthProvider from '../../Context/Authentication';
import Public from './Public';
import User from './User';
import Button from '../Button';
import UserInfo from '../UserInfo';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = () => {
  const { isAuth } = useContext(AuthProvider);
  const history = useHistory();
  const [current, setCurrent] = useState('home');

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  <Header>
    <Title level={4}>Hound</Title>
    <Menu
      className="nav-menu"
      onClick={handleMenu}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Public />
      {!isAuth ? (
        <Button
          handelClick={() => {
            history.push('/login');
          }}
          className="thirdButton"
        >
          Sign in
        </Button>
      ) : (
        <>
          <User />
          <UserInfo />
        </>
      )}
    </Menu>
  </Header>;
};

export default NavBar;

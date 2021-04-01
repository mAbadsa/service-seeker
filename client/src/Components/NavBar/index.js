import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { Layout, Typography, Menu } from 'antd';
import AuthProvider from '../../Context/Authentication';
import Public from './Public';
import User from './User';
import Button from '../Button';
import UserInfo from '../UserInfo';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = () => {
  const { setIsAuth, isAuth } = useContext(AuthProvider);
  const history = useHistory();

  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [current, setCurrent] = useState('home');

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      await Axios('api/v1/logout');
      setIsAuth(false);
    } catch (err) {
      setErrMsg('set interval error');
    }
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
          <UserInfo handleLogout={handleClick} isLoading={isLoading} />
        </>
      )}
    </Menu>
    {errMsg ? <p className="error-msg">{errMsg}</p> : null}
  </Header>;
};

export default NavBar;

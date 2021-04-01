import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
import Axios from 'axios';
import { Layout, Typography } from 'antd';
import AuthProvider from '../../Context/Authentication';
import Public from './Public';
import UserCustomer from './User';
import ProviderMenu from './Provider';
import Button from '../Button';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = ({ notifications }) => {
  const {
    setIsAuth,
    isAuth,
    userData: { role },
  } = useContext(AuthProvider);
  const history = useHistory();

  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');

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
    {/* public menus display always */}
    <Public />
    {!isAuth ? (
      // restricted display on logout mode
      <Button
        handelClick={() => {
          history.push('/login');
        }}
        className="thirdButton"
      >
        Sign in
      </Button>
    ) : (
      // on login mode
      <>
        {role === 'user' ? (
          <UserCustomer
            handleLogout={handleClick}
            errMsg={errMsg}
            isLoading={isLoading}
            notifications={notifications}
          />
        ) : (
          <ProviderMenu
            handleLogout={handleClick}
            errMsg={errMsg}
            isLoading={isLoading}
          />
        )}
      </>
    )}
  </Header>;
};

NavBar.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      decription: PropTypes.string,
      created_at: PropTypes.string,
    })
  ),
};

export default NavBar;

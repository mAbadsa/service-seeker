import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Layout, Typography } from 'antd';
import AuthProvider from '../../Context/Authentication';
import Public from './Public';
import UserCustomer from './User';
import ProviderMenu from './Provider';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = ({ className, notifications }) => {
  const {
    setIsAuth,
    isAuth,
    userData: { role },
  } = useContext(AuthProvider);
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

  <Header className={className}>
    <Title level={4}>Hound</Title>
    {!isAuth ? (
      <Public />
    ) : (
      <>
        {role === 'user' ? (
          <UserCustomer
            handleClick={handleClick}
            errMsg={errMsg}
            isLoading={isLoading}
            notifications={notifications}
          />
        ) : (
          <ProviderMenu
            handleClick={handleClick}
            errMsg={errMsg}
            isLoading={isLoading}
          />
        )}
      </>
    )}
  </Header>;
};

NavBar.propTypes = {
  className: PropTypes.string,
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

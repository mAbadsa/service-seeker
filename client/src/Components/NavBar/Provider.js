import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Menu, Spin, Typography } from 'antd';
import AuthProvider from '../../Context/Authentication';
import Avatar from '../Avatar';
import Button from '../Button';

import '../Layout/style.css';

const { Title } = Typography;

const ProviderMenu = ({ handleClick, errMsg, isLoading }) => {
  const [current, setCurrent] = useState('Dashboard');
  const { userData } = useContext(AuthProvider);
  const { name, avatar } = userData;
  const history = useHistory();

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      {errMsg ? (
        <p className="error-msg">something went wrong</p>
      ) : (
        <>
          {isLoading ? (
            <Spin />
          ) : (
            <div className="provider-container">
              <div className="provider-info">
                <Avatar shape="circle" size={64} imgSrc={avatar} />
                <Title level={4}>Welcome Back</Title>
                <Title level={5}>{name}</Title>
              </div>
              <Menu
                className="provider-menu"
                onClick={handleMenu}
                selectedKeys={[current]}
                mode="vertical"
              >
                <Menu.Item
                  onClick={() => {
                    history.push('/provider/dashboard');
                  }}
                  key="Dashboard"
                >
                  Dashboard
                </Menu.Item>
                <Menu.Item onClick={() => {}} key="Orders">
                  Notifications
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    history.push('/provider/profile');
                  }}
                  key="Profile"
                >
                  Profile
                </Menu.Item>
              </Menu>
              <Button
                className="logout-btn"
                handleClick={handleClick}
                type="thirdButton"
              >
                Log Out
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

ProviderMenu.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      decription: PropTypes.string,
      created_at: PropTypes.string,
    })
  ),
  handleClick: PropTypes.func,
  errMsg: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default ProviderMenu;

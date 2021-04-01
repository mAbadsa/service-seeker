import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Menu, Spin } from 'antd';
import AuthProvider from '../../Context/Authentication';

import UserInfo from '../UserInfo';

import '../Layout/style.css';

const UserMenu = ({ notifications, handleClick, errMsg, isLoading }) => {
  const [current, setCurrent] = useState('home');
  const { userData } = useContext(AuthProvider);
  const { name, avatar } = userData;
  const history = useHistory();

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="customer-container">
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
            history.push('/orders');
          }}
          key="Orders"
        >
          Orders
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            history.push('/about-us');
          }}
          key="About us"
        >
          About Us
        </Menu.Item>
      </Menu>
      {errMsg ? (
        <p className="error-msg">something went wrong</p>
      ) : (
        <>
          {isLoading ? (
            <Spin />
          ) : (
            <UserInfo
              loggedUserInfo="logged-user-info"
              userNameClass="user-name"
              shape="circle"
              userPic={avatar}
              handleClick={handleClick}
              userName={name}
              notifications={notifications}
            />
          )}
        </>
      )}
    </div>
  );
};

UserMenu.propTypes = {
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

export default UserMenu;

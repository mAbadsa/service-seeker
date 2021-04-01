import React, { useState, useContext } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import AuthProvider from '../../Context/Authentication';

import UserInfo from '../UserInfo';

import '../Layout/style.css';

const UserMenu = ({ notifications }) => {
  const [current, setCurrent] = useState('home');
  const [errMsg, setErrMsg] = useState('home');
  const { setIsAuth, userData } = useContext(AuthProvider);
  const { name, avatar } = userData;
  const history = useHistory();

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  const handleClick = async () => {
    try {
      await Axios('api/v1/logout');
      setIsAuth(false);
    } catch (err) {
      setErrMsg('set interval error');
    }
  };

  return (
    <div>
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
        <p>something went wrong</p>
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
};

export default UserMenu;

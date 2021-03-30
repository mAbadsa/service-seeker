import React, { useContext } from 'react';
import axios from 'axios';
import { LogoutOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import NotificationList from './notification';
import AuthContext from '../../Context/Authentication';

import './style.css';

const UserInfo = (notifications, userPic, userName) => {
  const { setIsAuth } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      await axios.get('/api/v1/logout');
      setIsAuth(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <div className="logged-user-info">
      <Avatar shape="circle" imgSrc={userPic} size="large" />
      <p className="user-name">{userName}</p>
      <NotificationList notifications={notifications} imgSrc={userPic} />
      <LogoutOutlined onClick={handleClick} />
    </div>
  );
};

UserInfo.propType = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      decription: PropTypes.string,
      created_at: PropTypes.string,
    })
  ).isRequired,
  userPic: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default UserInfo;

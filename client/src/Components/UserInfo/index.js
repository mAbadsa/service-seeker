import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import NotificationList from '../Notifications';

import '../Layout/style.css';

const UserInfo = ({
  notifications,
  userPic,
  userName,
  handleClick,
  loggedUserInfo,
  userNameClass,
  shape,
}) => (
  <div className={loggedUserInfo}>
    <Avatar shape={shape} imgSrc={userPic} size="large" />
    <p className={userNameClass}>{userName}</p>
    <NotificationList notifications={notifications} imgSrc={userPic} />
    <LogoutOutlined onClick={handleClick} />
  </div>
);

UserInfo.propTypes = {
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
  handleClick: PropTypes.func.isRequired,
  loggedUserInfo: PropTypes.string.isRequired,
  userNameClass: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
};

export default UserInfo;

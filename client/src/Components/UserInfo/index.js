import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import NotificationList from '../Notifications';

const UserInfo = ({
  notifications,
  userPic,
  userName,
  handleLogout,
  loggedUserInfo,
  userNameClass,
  shape,
}) => (
  <div className={loggedUserInfo}>
    <Avatar shape={shape} imgSrc={userPic} size="large" />
    <p className={userNameClass}>{userName}</p>
    <NotificationList notifications={notifications} imgSrc={userPic} />
    <LogoutOutlined onClick={handleLogout} />
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
  ),
  userPic: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  handleLogout: PropTypes.func,
  loggedUserInfo: PropTypes.string,
  userNameClass: PropTypes.string,
  shape: PropTypes.string.isRequired,
};

export default UserInfo;

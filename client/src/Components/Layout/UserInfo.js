import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import NotificationList from './notification';

const UserInfo = (notifications, userPic, userName) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
  >
    <Avatar shape="circle" imgSrc={userPic} size="large" />
    <p style={{ fontSize: '13px' }}>{userName}</p>
    <NotificationList notifications={notifications} imgSrc={userPic} />
    <LogoutOutlined />
  </div>
);

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

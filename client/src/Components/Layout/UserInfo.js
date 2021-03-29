import React from 'react';
import { NotificationFilled, LogoutOutlined } from '@ant-design/icons';

const UserInfo = (userPic, userName) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
  >
    <img
      style={{ width: '40px', height: '40px' }}
      src={userPic}
      alt={userName}
    />
    <p style={{ fontSize: '13px' }}>{userName}</p>
    <NotificationFilled />
    <LogoutOutlined />
  </div>
);

export default UserInfo;

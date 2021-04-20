import React, { useContext } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

import { AuthContext } from '../../Context/Authentication';
import Avatar from '../Avatar';
import LogoutComponent from '../Logout';
import NotificationPanel from '../NotificationPanel';

import './style.css';

const { Text } = Typography;

const UserInfo = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div className="logged-user-info">
      {userData ? (
        <>
          <Avatar
            shape="circle"
            srcImg={userData.avatar}
            size={44}
            style={{
              minWidth: '43px',
            }}
          />
          <Text className="user-name" ellipsis>
            {userData.username}
          </Text>
          <NotificationPanel />
          <LogoutComponent dashBoard={false} />
        </>
      ) : (
        <spin />
      )}
    </div>
  );
};

UserInfo.propTypes = {
  handleLogout: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default UserInfo;

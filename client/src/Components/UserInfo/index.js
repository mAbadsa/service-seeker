import React, { useContext } from 'react';
import { Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import LogoutComponent from '../Logout';
import { AuthContext } from '../../Context/Authentication';

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
          <BellOutlined className="UserInfo-icon" />

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

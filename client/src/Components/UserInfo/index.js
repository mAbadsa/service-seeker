import React, { useContext, useState } from 'react';
import { Spin, Typography } from 'antd';
import { LogoutOutlined, BellOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import { AuthContext } from '../../Context/Authentication';
import logoutHandler from '../../Utils/logout';

import './style.css';

const { Text } = Typography;

const UserInfo = () => {
  const [isLoading, setLoading] = useState(false);
  const { userData, setRefresh, refresh, setAuthLoading } = useContext(
    AuthContext
  );

  const handleClick = async () => {
    logoutHandler(setLoading, setRefresh, setAuthLoading, refresh);
  };

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
          {isLoading ? (
            <Spin className="UserInfo-icon" />
          ) : (
            <LogoutOutlined className="UserInfo-icon" onClick={handleClick} />
          )}
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

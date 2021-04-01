import React, { useContext } from 'react';
import { Spin } from 'antd';
import { LogoutOutlined, BellOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import AuthProvider from '../../Context/Authentication';

const UserInfo = ({ handleLogout, isLoading }) => {
  const { userData } = useContext(AuthProvider);
  const { username, avatar } = userData;

  return (
    <div className="logged-user-info">
      <Avatar shape="circle" imgSrc={avatar} size="large" />
      <p className="user-name">{username}</p>
      <BellOutlined />
      {isLoading ? <Spin /> : <LogoutOutlined onClick={handleLogout} />}
    </div>
  );
};

UserInfo.propTypes = {
  handleLogout: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default UserInfo;

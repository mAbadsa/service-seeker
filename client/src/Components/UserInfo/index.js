import React, { useContext, useState } from 'react';
import { Spin } from 'antd';
import Axios from 'axios';
import { LogoutOutlined, BellOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import AuthProvider from '../../Context/Authentication';

const UserInfo = () => {
  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const { userData, setIsAuth } = useContext(AuthProvider);
  const { username, avatar } = userData;

  const handleClick = async () => {
    try {
      setLoading(true);
      await Axios('api/v1/logout');
      setIsAuth(false);
    } catch (err) {
      setErrMsg('set interval error');
    }
  };

  return (
    <div className="logged-user-info">
      <Avatar shape="circle" imgSrc={avatar} size="large" />
      <p className="user-name">{username}</p>
      <BellOutlined />
      {isLoading ? <Spin /> : <LogoutOutlined onClick={handleClick} />}
      {errMsg ? <p className="error-msg">{errMsg}</p> : null}
    </div>
  );
};

UserInfo.propTypes = {
  handleLogout: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default UserInfo;

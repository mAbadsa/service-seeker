import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Spin, Alert } from 'antd';
import { LogoutOutlined, BellOutlined } from '@ant-design/icons';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { AuthContext } from '../../Context/Authentication';
import { HOME_PAGE } from '../../Utils/routes.constant';

const UserInfo = () => {
  const [isLoading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const { userData, setIsAuth } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = async () => {
    try {
      setLoading(true);
      setErrMsg('');
      await Axios('/api/v1/logout');
      setIsAuth(false);
      setLoading(false);
      history.push(HOME_PAGE);
    } catch (err) {
      setErrMsg('interval server error');
      setLoading(false);
    }
  };
  return (
    <>
      <div className="logged-user-info">
        {userData ? (
          <>
            <Avatar shape="circle" srcImg={userData.avatar} size="large" />
            <p className="user-name">{userData.username}</p>
            <BellOutlined />
            {isLoading ? <Spin /> : <LogoutOutlined onClick={handleClick} />}
          </>
        ) : (
          <spin />
        )}
      </div>
      {errMsg && <Alert message={errMsg} type="error" />}
    </>
  );
};

UserInfo.propTypes = {
  handleLogout: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default UserInfo;

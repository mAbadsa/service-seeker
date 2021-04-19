import React, { useContext, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { message, Spin } from 'antd';
import PropTypes from 'prop-types';

import { LogoutOutlined } from '@ant-design/icons';
import { AuthContext } from '../../Context/Authentication';
import { HOME_PAGE } from '../../Utils/routes.constant';
import Button from '../Button';

export default function Logout({ dashBoard }) {
  const [isLoading, setLoading] = useState(false);
  const { setRefresh, refresh, setAuthLoading } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = async () => {
    try {
      setLoading(true);
      await Axios('/api/v1/logout');
      setRefresh(!refresh);
      setLoading(false);
      setAuthLoading(true);
      history.push(HOME_PAGE);
    } catch (err) {
      message.error(err.response.data.message || 'Something went wrong!');
      setLoading(false);
    }
  };
  return (
    <>
      {dashBoard ? (
        <Button
          loading={isLoading}
          className="fourthButton initial-style"
          onClick={handleClick}
        >
          LogOut
        </Button>
      ) : (
        <>
          {isLoading ? (
            <Spin />
          ) : (
            <LogoutOutlined
              className="UserInfo-icon"
              onClick={handleClick}
              loading={isLoading}
            />
          )}
        </>
      )}
    </>
  );
}

Logout.propTypes = {
  dashBoard: PropTypes.bool.isRequired,
};

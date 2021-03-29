import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import NotificationList from './notification';

const UserInfo = (notifications, userPic, userName) => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();

  useEffect(async () => {
    try {
      const { CancelToken } = axios;
      const source = CancelToken.source();
      if (clicked) {
        await axios.get('/api/v1/logout', {
          cancelToken: source.token,
        });
        history.push('/');
      }
      return () => source.cancel('Operation canceled by the user.');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      return err;
    }
  }, []);

  return (
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
      <LogoutOutlined onClick={setClicked(true)} />
    </div>
  );
};

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

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, NotificationFilled } from '@ant-design/icons';
import Avatar from '../Avatar';

const NotificationList = (notifications, imgSrc) => {
  const menu = () => (
    <Menu>
      {notifications.map((notif) => (
        <Menu.Item>
          <Avatar shape="circle" size="large" imgSrc={imgSrc} />
          <div
            style={{
              width: 'fit-content',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'space-around',
            }}
          >
            <p style={{ color: '#5C5C5C' }}>{notif.description}</p>
            <p style={{ color: '#FDCB6E' }}>
              {moment(notif.created_at, 'DD MM YYYY hh:mm:ss', true).fromNow()}
            </p>
          </div>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
      <NotificationFilled onClick={(e) => e.preventDefault()} />
      <DownOutlined />
    </Dropdown>
  );
};

NotificationList.propType = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      user_id: PropTypes.number,
      decription: PropTypes.string,
      created_at: PropTypes.string,
    })
  ).isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default NotificationList;

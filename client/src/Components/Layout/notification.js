import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, NotificationFilled } from '@ant-design/icons';
import Avatar from '../Avatar';

import './style.css';

const NotificationList = ({ notifications, imgSrc }) => {
  const menu = () => (
    <Menu>
      {notifications.map((notif) => (
        <Menu.Item key={notif.id}>
          <Avatar shape="circle" size="large" imgSrc={imgSrc} />
          <div className="user-info-notif">
            <p className="notif-description">{notif.description}</p>
            <p className="notif-time">
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

NotificationList.propTypes = {
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

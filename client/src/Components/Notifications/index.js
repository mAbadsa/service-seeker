import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Dropdown } from 'antd';
import { DownOutlined, NotificationFilled } from '@ant-design/icons';
import Avatar from '../Avatar';
import Menu from '../Menu';

const NotificationList = ({
  notifications,
  imgSrc,
  classNameNotif,
  classNameNotifInfo,
  classNameNotifDesc,
  classNameNotifTime,
  classNameNotifCont,
}) => {
  const menu = () => (
    <Menu mode="vertical" className={classNameNotifCont} handleClick={() => {}}>
      {notifications.length ? (
        notifications.map((notif) => (
          <div className={classNameNotif} key={notif.id}>
            <Avatar shape="circle" size="large" imgSrc={imgSrc} />
            <div className={classNameNotifInfo}>
              <p className={classNameNotifDesc}>{notif.description}</p>
              <p className={classNameNotifTime}>
                {moment(
                  notif.created_at,
                  'DD MM YYYY hh:mm:ss',
                  true
                ).fromNow()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No notifications found</p>
      )}
      {notifications.map((notif) => (
        <div className={classNameNotif} key={notif.id}>
          <Avatar shape="circle" size="large" imgSrc={imgSrc} />
          <div className={classNameNotifInfo}>
            <p className={classNameNotifDesc}>{notif.description}</p>
            <p className={classNameNotifTime}>
              {moment(notif.created_at, 'DD MM YYYY hh:mm:ss', true).fromNow()}
            </p>
          </div>
        </div>
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
  classNameNotif: PropTypes.string,
  classNameNotifInfo: PropTypes.string,
  classNameNotifDesc: PropTypes.string,
  classNameNotifTime: PropTypes.string,
  classNameNotifCont: PropTypes.string,
};
export default NotificationList;

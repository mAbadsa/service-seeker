import React from 'react';
import moment from 'moment';

import Avatar from '../../Avatar';
import getStatusColor from '../../../Utils/getStatusColor';

const UserOrder = () => [
  {
    title: 'Provider Info',
    dataIndex: 'userInfo',
    key: 'userInfo',
    width: '18%',
    render([username, avatar]) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Avatar
            shape="circle"
            srcImg={avatar}
            size={45}
            style={{
              minWidth: '45px',
            }}
          />
          <label
            style={{
              lineHeight: '45px',
              paddingLeft: '14px',
              width: '120px',
            }}
          >
            {username}
          </label>
        </div>
      );
    },
    fixed: 'left',
  },
  {
    title: 'Service Title',
    dataIndex: 'serviceTitle',
    key: 'serviceTitle',
    width: '15%',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    width: '16%',
  },
  {
    title: 'Your Description',
    key: 'yourDescription',
    dataIndex: 'yourDescription',
    width: '30%',
  },
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
    width: '19%',
    render: (text) => moment(text).format('MMM Do YY, h:mm a'),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    width: '12%',
    fixed: 'right',
    render(text) {
      const color = getStatusColor(text);

      return (
        <p
          style={{
            color,
            margin: 0,
          }}
        >
          {text}
        </p>
      );
    },
  },
];

export default UserOrder;
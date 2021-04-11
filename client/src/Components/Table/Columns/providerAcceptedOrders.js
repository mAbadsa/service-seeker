import React from 'react';
import moment from 'moment';

import Avatar from '../../Avatar';

import {} from '@ant-design/icons';

export default () => [
  {
    title: 'User Info',
    dataIndex: 'userinfo',
    key: 'userinfo',
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
    title: 'Phone No.',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    render(text) {
      return moment(text).format('MMM-Do-YYYY');
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

import React from 'react';
import moment from 'moment';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

import Avatar from '../../Avatar';

export default (onActions) => [
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
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render(action) {
      return (
        <>
          <CheckOutlined
            onClick={() => onActions[0](action)}
            style={{
              marginRight: '15px',
              fontSize: '24px',
              color: '#22c41a',
              cursor: 'pointer',
            }}
          />
          <CloseOutlined
            onClick={() => onActions[1](action)}
            style={{
              fontSize: '24px',
              color: '#c2141a',
              cursor: 'pointer',
            }}
          />
        </>
      );
    },
  },
];

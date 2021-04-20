import React from 'react';
import moment from 'moment';
import { Typography } from 'antd';
import { CloseOutlined, CheckOutlined, MoreOutlined } from '@ant-design/icons';

import Avatar from '../../Avatar';

const { Text, Paragraph } = Typography;

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
          <Text
            style={{
              paddingLeft: '14px',
              width: '120px',
              fontSize: '15px',
            }}
          >
            {username}
          </Text>
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
    render(text) {
      return (
        <Paragraph
          style={{
            fontSize: '15px',
            margin: 0,
          }}
          ellipsis={{
            rows: 2,
          }}
        >
          {text}
        </Paragraph>
      );
    },
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
    render(action, record) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
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
          </div>
          <MoreOutlined
            onClick={() => {
              onActions[2](action, record);
            }}
            style={{
              paddingRight: '10px',
              cursor: 'pointer',
              fontSize: '25px',
            }}
          />
        </div>
      );
    },
  },
];

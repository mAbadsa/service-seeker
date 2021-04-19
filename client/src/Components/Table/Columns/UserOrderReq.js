import React from 'react';
import moment from 'moment';
import { Typography } from 'antd';
import { CloseOutlined, MoreOutlined } from '@ant-design/icons';

import Avatar from '../../Avatar';

const { Text, Paragraph } = Typography;

const UserOrderReq = (onActions) => [
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
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
    width: '19%',
    render(text) {
      return moment(text).format('MMM Do YY, h:mm a');
    },
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    width: '10%',
    fixed: 'right',
    render(text, record) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <CloseOutlined
            onClick={(e) => {
              onActions[0](e, record);
            }}
            style={{
              paddingLeft: '5px',
              cursor: 'pointer',
              fontSize: '21px',
              color: '#F95151',
            }}
          />
          <MoreOutlined
            onClick={(e) => {
              onActions[1](e, record);
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

export default UserOrderReq;

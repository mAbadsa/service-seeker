import React from 'react';

import Avatar from '../../../../Components/Avatar';

const columns = [
  {
    title: 'User Info',
    dataIndex: 'userinfo',
    key: 'userinfo',
    render: (userinfo) => {
      <div>
        <Avatar srcImg={userinfo.userImg} />
        <span>{userinfo}</span>
      </div>;
    },
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
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

export default columns;

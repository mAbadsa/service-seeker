import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AvatarUsers = (shape, imgSrc, size) => (
  <Avatar size={size} shape={shape} src={imgSrc} icon={<UserOutlined />} />
);

export default AvatarUsers;

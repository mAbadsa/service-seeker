import React from 'react';
import { Avatar } from 'antd';
import PropType from 'prop-types';
import { UserOutlined } from '@ant-design/icons';

const AvatarUsers = (shape, imgSrc, size) => (
  <Avatar size={size} shape={shape} src={imgSrc} icon={<UserOutlined />} />
);

AvatarUsers.propType = {
  size: PropType.oneOfType([PropType.string, PropType.number]).isRequired,
  imgSrc: PropType.string.isRequired,
  shape: PropType.string.isRequired,
};

export default AvatarUsers;

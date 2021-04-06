import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AvatarUsers = ({ srcImg, size, ...rest }) => (
  <Avatar
    src={srcImg}
    icon={!srcImg ? <UserOutlined /> : null}
    {...rest}
    size={size}
  />
);

AvatarUsers.propTypes = {
  srcImg: PropTypes.string,
  size: PropTypes.number,
};

export default AvatarUsers;

import React from 'react';
import { Popover } from 'antd';

import { InfoOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import './style.css';

const MoreInfo = ({ content, ...rest }) => (
  <Popover placement="bottom" content={content} title="Info" {...rest}>
    <div className="icon-border">
      <InfoOutlined />
    </div>
  </Popover>
);

MoreInfo.propTypes = {
  content: PropTypes.node.isRequired,
};

export default MoreInfo;

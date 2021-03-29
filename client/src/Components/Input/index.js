import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';

import './style.css';

const CommonInput = ({ handelChange, className, type, ...rest }) => (
  <Input
    handelClick={handelChange}
    type={type}
    className={className}
    {...rest}
  />
);

CommonInput.propTypes = {
  className: PropTypes.string,
  handelChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};
CommonInput.defaultProps = {
  className: 'input',
  type: 'text',
};

export default CommonInput;

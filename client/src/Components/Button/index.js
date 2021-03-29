import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

import './style.css';

const CommonButton = ({ children, handelClick, type, ...rest }) => (
  <Button handelClick={handelClick} type={type} {...rest}>
    {children}
  </Button>
);

CommonButton.propTypes = {
  children: PropTypes.string.isRequired,
  handelClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};
CommonButton.defaultProps = {
  type: 'primary',
};

export default CommonButton;

import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Footer } = Layout;

const Foot = ({ children, className }) => {
  <Footer className={className}>{children}</Footer>;
};

Foot.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Foot;

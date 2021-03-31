import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Content } = Layout;

const NavBar = ({ children, className }) => {
  <Content className={className}>{children}</Content>;
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default NavBar;

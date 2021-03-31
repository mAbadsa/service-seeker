import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const { Header } = Layout;

const NavBar = ({ children, className }) => {
  <Header className={className}>{children}</Header>;
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default NavBar;

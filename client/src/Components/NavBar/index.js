import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import AuthProvider from '../../Context/Authentication';

const { Header } = Layout;

// always => logo
// notAuth => menu(Home, About us) + sign in button
// isAuth => menu(Home, Order, About us) + userInfo(Avatar, name, notification, logout)

const NavBar = ({ children, className }) => {
  const { setIsAuth, isAuth } = useContext(AuthProvider);
  const [isLoading, setLoading] = useState(false);
  <Header className={className}>{children}</Header>;
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default NavBar;

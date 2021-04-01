import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Typography } from 'antd';
import AuthProvider from '../../Context/Authentication';
import Public from './Public';
import User from './User';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = ({ className }) => {
  const { setIsAuth, isAuth } = useContext(AuthProvider);
  const [isLoading, setLoading] = useState(false);
  <Header className={className}>
    <Title level={4}>Hound</Title>
    <Public />
    <User />
  </Header>;
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default NavBar;

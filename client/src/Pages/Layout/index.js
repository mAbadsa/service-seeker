import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Layout, Spin } from 'antd';
import Footer from '../../Components/Footer';
import Header from '../../Components/NavBar';

import { AuthContext } from '../../Context/Authentication';

import './style.css';

const { Content } = Layout;

const LayoutPage = ({ children }) => {
  const { authLoading, userData } = useContext(AuthContext);

  return (
    <>
      {authLoading && !userData ? (
        <Spin size="large" />
      ) : (
        <>
          <Header />
          <Content className="page">{children}</Content>
          <Footer />
        </>
      )}
    </>
  );
};

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutPage;

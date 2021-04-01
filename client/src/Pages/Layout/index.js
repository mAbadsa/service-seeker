import React, { useContext } from 'react';
import { element } from 'prop-types';
import { Spin } from 'antd';
import Layout from '../../Components/Layout';
import AuthProvider from '../../Context/Authentication';

const LayoutPage = ({ children }) => {
  const { authLoading } = useContext(AuthProvider);
  return (
    <>{authLoading ? <Spin size="large" /> : <Layout>{children}</Layout>}</>
  );
};

LayoutPage.propTypes = {
  children: element.isRequired,
};

export default LayoutPage;

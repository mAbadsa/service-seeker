import React, { useContext } from 'react';
import { element } from 'prop-types';
import { Spin, Layout } from 'antd';
import { Content, NavBar, Footer } from '../../Components/Layout';
import AuthProvider from '../../Context/Authentication';

const LayoutPage = ({ children }) => {
  const { authLoading } = useContext(AuthProvider);
  return (
    <>
      {authLoading ? (
        <Spin size="large" />
      ) : (
        <Layout>
          <NavBar></NavBar>
          <Content>{children}</Content>
          <Footer></Footer>
        </Layout>
      )}
    </>
  );
};

LayoutPage.propTypes = {
  children: element.isRequired,
};

export default LayoutPage;

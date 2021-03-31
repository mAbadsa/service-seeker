import React, { useContext } from 'react';
import { element } from 'prop-types';
import { Spin, Layout } from 'antd';
import { Content, NavBar, Footer } from '../../Components/Layout';
import AuthProvider from '../../Context/Authentication';

// if authLoading is still true keep the loading
// if auth check role
// if role is customer show customer navbar
// if role is craftsman show craftsman navbar
// content will always be children from props

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

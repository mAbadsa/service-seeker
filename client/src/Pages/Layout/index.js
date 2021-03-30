import React, { useContext } from 'react';
import { element } from 'prop-types';
import { Spin } from 'antd';
import LayoutComponent from '../../Components/Layout';
import AuthContext from '../../Context/Authentication';

const Layout = ({ children }) => {
  const { isAuth, authLoading } = useContext(AuthContext);
  return (
    <>
      {authLoading ? (
        <Spin size="large" />
      ) : (
        <LayoutComponent isLogged={isAuth}>{children}</LayoutComponent>
      )}
    </>
  );
};

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;

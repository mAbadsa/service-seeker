import React, { useContext } from 'react';
import { element } from 'prop-types';
import LayoutComponent from '../../Components/Layout';
import AuthContext from '../../Context/Authentication';
// import Loading from '../../Components/Loading';

const Layout = ({ children }) => {
  const { isAuth, authLoading } = useContext(AuthContext);
  return (
    <>
      {authLoading ? null : (
        <LayoutComponent isLogged={isAuth}>{children}</LayoutComponent>
      )}
    </>
  );
};

Layout.propTypes = {
  children: element.isRequired,
};

export default Layout;

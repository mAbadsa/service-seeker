import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import HeaderLogged from './headerLog';
import HeaderPublic from './headerPublic';
import AuthProvider from '../../Context/Authentication';

import './style.css';

const { Header, Footer, Content } = Layout;

const LayoutComponent = ({ children, userPic, userName }) => {
  const { isAuth } = useContext(AuthProvider);
  return (
    <Layout>
      <Header className="header">
        <div className="logo">Hound</div>
        {isAuth ? (
          <>
            <HeaderLogged userPic={userPic} userName={userName} />
          </>
        ) : (
          <HeaderPublic />
        )}
      </Header>
      <Content>{children}</Content>
      <Footer className="footer">© 2021 Hound. All rights reserved.</Footer>
    </Layout>
  );
};

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  userPic: PropTypes.string,
  userName: PropTypes.string.isRequired,
};

export default LayoutComponent;

import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import HeaderLogged from './headerLog';
import HeaderPublic from './headerPublic';

import './style.css';

const { Header, Footer, Content } = Layout;

const LayoutComponent = (props, isLogged, style) => {
  const { children, userPic, userName } = props;
  // expecting isLogged a boolean to specify if this person is logged or not
  return (
    <Layout>
      <Header className="header">
        <div className="logo">Hound</div>
        {isLogged ? (
          <>
            <HeaderLogged userPic={userPic} userName={userName} />
          </>
        ) : (
          <HeaderPublic />
        )}
      </Header>
      <Content style={style}>{children}</Content>
      <Footer className="footer">© 2021 Hound. All rights reserved.</Footer>
    </Layout>
  );
};

LayoutComponent.defaultProps = {
  userPic: '*',
};

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  userPic: PropTypes.string,
  userName: PropTypes.string.isRequired,
};

export default LayoutComponent;

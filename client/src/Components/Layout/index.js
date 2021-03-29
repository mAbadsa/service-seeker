import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import HeaderMenu from './menu';
import UserInfo from './UserInfo';
import CommonButton from '../Button';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: 'white',
  boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.16), 0px 8px 4px rgba(0, 0, 0, 0.08)',
};

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#FFEAA7',
  fontSize: '14px',
};

const LayoutComponent = (props, isLogged, style) => {
  const { children, userPic, userName } = props;
  const history = useHistory();
  // expecting isLogged a boolean to specify if this person is logged or not
  return (
    <Layout>
      <Header style={headerStyle}>
        <HeaderMenu isLogged={isLogged} />
        <div style={{ fontSize: '40px' }}>Hound</div>
        {isLogged ? (
          <UserInfo userPic={userPic} userName={userName} />
        ) : (
          <CommonButton handelClick={history.push('/login')} type="thirdButton">
            Sign In
          </CommonButton>
        )}
      </Header>
      <Content style={style}>{children}</Content>
      <Footer style={footerStyle}>© 2021 Hound. All rights reserved.</Footer>
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

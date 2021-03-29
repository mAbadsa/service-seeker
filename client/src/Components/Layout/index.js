import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
// import { NotificationFilled } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;
// const { SubMenu } = Menu;

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
  const [current, setCurrent] = useState('home');
  const history = useHistory();

  const handleMenu = (e) => {
    setCurrent(e.key);
  };
  // expecting isLogged a boolean to specify if this person is logged or not
  return (
    <Layout>
      <Header style={headerStyle}>
        <div style={{ fontSize: '40px' }}>Hound</div>
        <Menu
          style={{ fontSize: '18px' }}
          onClick={handleMenu}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="home">Home</Menu.Item>
          {isLogged ? <Menu.Item key="orders">Orders</Menu.Item> : null}
          <Menu.Item key="aboutUs">About Us</Menu.Item>
        </Menu>
        {isLogged ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <img src={userPic} alt={userName} />
            <p style={{ fontSize: '13px' }}>{userName}</p>
          </div>
        ) : (
          <button type="button" onClick={history.push('/login')}>
            Sign In
          </button>
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

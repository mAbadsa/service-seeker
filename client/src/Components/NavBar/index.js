import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import { AuthContext } from '../../Context/Authentication';
import Button from '../Button';
import UserInfo from '../UserInfo';
import {
  PROVIDER_DASHBOARD_PAGE,
  LOGIN_PAGE,
  HOME_PAGE,
  ORDERS_PAGE,
  ABOUT_US,
} from '../../Utils/routes.constant';

const { Header } = Layout;

const NavBar = () => {
  const { isAuth, userData } = useContext(AuthContext);
  const history = useHistory();
  const [current, setCurrent] = useState('home');

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <Header className="header">
      <Row
        className="row"
        gutter={{
          sm: 8,
          lg: 24,
        }}
        justify="space-between"
      >
        <Col className="col" span={5}>
          <p className="logo">Hound</p>
        </Col>
        <Col className="col" span={11}>
          <Menu
            className="nav-menu"
            onClick={handleMenu}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item
              onClick={() => {
                history.push(HOME_PAGE);
              }}
              key="home"
            >
              Home
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                history.push(ABOUT_US);
              }}
              key="About us"
            >
              About Us
            </Menu.Item>
            {isAuth && userData ? (
              <>
                <Menu.Item
                  onClick={() => {
                    history.push(ORDERS_PAGE);
                  }}
                  key="Orders"
                >
                  Order
                </Menu.Item>
                {userData.role === 'provider' && (
                  <Menu.Item
                    onClick={() => {
                      history.push(PROVIDER_DASHBOARD_PAGE);
                    }}
                    key="Dashboard"
                  >
                    Dashboard
                  </Menu.Item>
                )}
                <UserInfo />
              </>
            ) : (
              <Col className="col" span={8}>
                <Button
                  handelClick={() => {
                    history.push(LOGIN_PAGE);
                  }}
                  className="login-btn"
                >
                  Sign in
                </Button>
              </Col>
            )}
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default NavBar;

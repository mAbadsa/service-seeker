import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Menu } from 'antd';

import './style.css';

const HeaderMenu = () => {
  const [current, setCurrent] = useState('home');
  const history = useHistory();

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        className="nav-menu"
        onClick={handleMenu}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item onClick={history.push('/orders')} key="orders">
          Orders
        </Menu.Item>
        <Menu.Item onClick={history.push('/about-us')} key="aboutUs">
          About Us
        </Menu.Item>
      </Menu>
    </>
  );
};

export default HeaderMenu;

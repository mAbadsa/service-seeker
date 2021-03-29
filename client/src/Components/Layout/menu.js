import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Menu } from 'antd';

const HeaderMenu = (isLogged) => {
  const [current, setCurrent] = useState('home');
  const history = useHistory();

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        style={{ fontSize: '18px' }}
        onClick={handleMenu}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="home">Home</Menu.Item>
        {isLogged ? (
          <Menu.Item onClick={history.push('/orders')} key="orders">
            Orders
          </Menu.Item>
        ) : null}
        <Menu.Item onClick={history.push('/about-us')} key="aboutUs">
          About Us
        </Menu.Item>
      </Menu>
    </>
  );
};

export default HeaderMenu;

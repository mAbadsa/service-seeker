import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';

import Button from '../Button';

import '../Layout/style.css';

const PublicMenu = () => {
  const [current, setCurrent] = useState('home');
  const history = useHistory();

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        className="nav-menu"
        onClick={handleMenu}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item
          onClick={() => {
            history.push('/');
          }}
          key="home"
        >
          Home
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            history.push('/about-us');
          }}
          key="About us"
        >
          About Us
        </Menu.Item>
      </Menu>
      <Button
        handelClick={() => {
          history.push('/login');
        }}
        className="thirdButton"
      >
        Sign in
      </Button>
    </div>
  );
};

export default PublicMenu;

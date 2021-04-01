import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';

import '../../Pages/Layout/style.css';

const PublicMenu = () => {
  const history = useHistory();

  return (
    <>
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
    </>
  );
};

export default PublicMenu;

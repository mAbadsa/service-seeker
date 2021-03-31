import React, { useState } from 'react';
import PropTypes, { element } from 'prop-types';
import { Menu } from 'antd';

import '../Layout/style.css';

const HeaderMenu = ({ mode, className, children, handleClick }) => {
  const [current, setCurrent] = useState('home');

  const handleMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        className={className}
        onClick={handleMenu}
        selectedKeys={[current]}
        mode={mode}
      >
        {children.map((child) => (
          <Menu.Item onClick={handleClick} key={child}>
            {child}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

HeaderMenu.propTypes = {
  mode: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: element.isRequired,
};

export default HeaderMenu;

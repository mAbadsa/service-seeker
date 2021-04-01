import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import AuthProvider from '../../Context/Authentication';

const UserMenu = () => {
  const { userData } = useContext(AuthProvider);
  const { role } = userData;
  const history = useHistory();

  return (
    <>
      {role === 'user' ? (
        <Menu.Item
          onClick={() => {
            history.push('/orders');
          }}
          key="Orders"
        >
          Order
        </Menu.Item>
      ) : (
        <Menu.Item
          onClick={() => {
            history.push('/provider/dashboard');
          }}
          key="Dashboard"
        >
          Dashboard
        </Menu.Item>
      )}
    </>
  );
};

export default UserMenu;

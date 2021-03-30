import React from 'react';
import HeaderMenu from './menu';
import UserInfo from './UserInfo';

const HeaderLogged = (userPic, userName) => (
  <>
    <HeaderMenu />
    <UserInfo userPic={userPic} userName={userName} />
  </>
);

export default HeaderLogged;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import logo from '@/img/logo/logo.png';
import downArrow from '@/img/icon/down-arrow.png';

import { getCookie, deleteCookie } from '@/common/lib/util/cookies';

const Header = () => {
  const history = useHistory();

  const accessToken = getCookie('jwt');
  const profileImg = getCookie('profileImage');
  const nickname = getCookie('nickname');

  const [menuDisplay, setMenuDisplay] = useState('none');

  const logOutButtonClickHandler = () => {
    deleteCookie('jwt');
    localStorage.removeItem('registerState');
    deleteCookie('nickname');
    deleteCookie('profileImage');
    location.reload();
  };

  const userWrapClickHandler = () => {
    menuDisplay === 'none' ? setMenuDisplay('block') : setMenuDisplay('none');
  };

  const closeUserMenuWrapClickHandler = () => {
    setMenuDisplay('none');
  };

  const logoClickHandler = () => {
    history.push('/');
  };

  return (
    <>
      <CloseUserMenuWrap style={{ display: menuDisplay }} onClick={closeUserMenuWrapClickHandler}></CloseUserMenuWrap>
      <Wrap>
        <ServiceLogo src={logo} onClick={logoClickHandler} />
        {accessToken ? (
          <UserWarp onClick={userWrapClickHandler}>
            <ProfileImage src={profileImg} />
            <MenuIcon src={downArrow} />
            <UserMenuWrap style={{ display: menuDisplay }}>
              <UserMenuNickName style={{ borderBottom: 'solid 1px lightGray' }}>
                {nickname} <Triangle />
              </UserMenuNickName>
              <UserMenu>내 정보</UserMenu>
              <UserMenu>설정</UserMenu>
              <UserMenu onClick={logOutButtonClickHandler}>로그아웃</UserMenu>
            </UserMenuWrap>
          </UserWarp>
        ) : (
          ''
        )}
      </Wrap>
    </>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 25px;
  background: black;
`;

const ServiceLogo = styled.img`
  height: 60px;
  &:hover {
    cursor: pointer;
  }
`;

const UserWarp = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-radius: 30px;
  padding: 5px 10px;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

const ProfileImage = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 30px;
`;

const MenuIcon = styled.img`
  width: 13px;
  margin-left: 10px;
`;

const UserMenuWrap = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  display: none;
  background: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 2;
`;

const UserMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  font-weight: bold;
  font-family: 'Eoe_Zno_L';
  font-size: 13px;
  color: ${({ theme }) => theme.color.darkGray};
  border-top: solid 0.5px ${({ theme }) => theme.color.lightGray};
  padding: 10px 12px;
  &:hover {
    background: ${({ theme }) => theme.color.point};
    color: white;
  }
`;

const UserMenuNickName = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 170px;
  height: 45px;
  font-weight: bold;
  font-family: 'S-CoreDream-5Medium';
  font-size: 15px;
  color: ${({ theme }) => theme.color.darkGray};
  border-top: solid 0.5px ${({ theme }) => theme.color.lightGray};
  padding: 10px;
`;

const CloseUserMenuWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Triangle = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  right: 25px;
  top: -7px;
  border-bottom: 8px solid white;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
`;

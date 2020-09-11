import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '@/img/logo/logo.png';
import downArrow from '@/img/icon/down-arrow.png';

import { getCookie, deleteCookie } from '@/common/lib/util/cookies';

const Header = () => {
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

  return (
    <>
      <CloseUserMenuWrap style={{ display: menuDisplay }} onClick={closeUserMenuWrapClickHandler}></CloseUserMenuWrap>
      <Wrap>
        <ServiceLogo src={logo} />
        {accessToken ? (
          <UserWarp onClick={userWrapClickHandler}>
            <ProfileImage src={profileImg} />
            <Nickname>
              {nickname} <img src={downArrow} />
            </Nickname>
            <UserMenuWrap style={{ display: menuDisplay }}>
              <UserMenu style={{ borderTop: 'none' }}>내 정보</UserMenu>
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
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  color: white;
  font-weight: bold;
  font-family: 'Eoe_Zno_L';
  font-size: 16px;
  &:hover {
    color: ${({ theme }) => theme.color.gray};
  }
`;

const UserWarp = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 120px;
  height: 50px;
  background: white;
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

const Nickname = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'S-CoreDream-5Medium';
  font-weight: bold;
  font-size: 15px;
  color: ${({ theme }) => theme.color.darkGray};
  padding: 5px 5px 5px 10px;
  margin-right: 3px;
  img {
    width: 13px;
    margin-left: 10px;
  }
`;

const UserMenuWrap = styled.div`
  position: absolute;
  top: 55px;
  right: 0;
  display: none;
  width: 130px;
  background: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const UserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-weight: bold;
  font-family: 'Eoe_Zno_L';
  color: ${({ theme }) => theme.color.darkGray};
  border-top: solid 0.5px ${({ theme }) => theme.color.lightGray};
  padding: 10px;
  &:hover {
    background: ${({ theme }) => theme.color.point};
    color: white;
  }
`;

const CloseUserMenuWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

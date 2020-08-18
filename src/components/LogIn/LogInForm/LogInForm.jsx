import React, { useState } from 'react';
import styled from 'styled-components';

import mainImage from '@/img/bunkBed.jpg';
import closeIcon from '@/img/icon/close.png';
import appleLogo from '@/img/snsLogo/apple.png';
import googleLogo from '@/img/snsLogo/google.png';
import kakaoLogo from '@/img/snsLogo/kakao.png';
import naverLogo from '@/img/snsLogo/naver.png';
import kakao from '@/img/snsLogo/kakao.png';

import LogInButton from '@/components/LogIn/LogInForm/LogInButton/LogInButton';

const LogInForm = ({ cancelButtonClickHandler }) => {
  const [isStaffLogIn, setIsStaffLogIn] = useState(false);

  const staffLogInButtonClickHandelr = () => {
    setIsStaffLogIn(true);
  };

  const backButtonClickHandler = () => {
    setIsStaffLogIn(false);
  };

  return (
    <>
      <Wrap>
        {!isStaffLogIn ? (
          <LogInWrap>
            <CancelButton>
              <img src={closeIcon} style={{ width: '100%' }} onClick={cancelButtonClickHandler} />
            </CancelButton>
            <LoginTitle>서비스 시작하기</LoginTitle>
            <LogInFormWrap>
              <LogInButton
                title="카카오톡 계정으로 시작"
                logo={kakaoLogo}
                background="#FFEB00"
                hover="#e3d705"
                logoWidth="23px"
                logoHeight="23px"
              />
              <LogInButton
                title="네이버 계정으로 시작"
                color="white"
                logo={naverLogo}
                background="#1EC800"
                hover="#099634"
                logoHeight="34px"
              />
              <LogInButton
                title="구글 계정으로 시작"
                color="white"
                logo={googleLogo}
                background="#2161ff"
                hover="#1c53d9"
              />
              <LogInButton
                title="애플 계정으로 시작"
                color="black"
                logo={appleLogo}
                background="#dbdbdb"
                hover="#999999"
              />
            </LogInFormWrap>
            <LogInContent>스텝 아이디가 있다면,</LogInContent>
            <StaffLogInButton onClick={staffLogInButtonClickHandelr}>스탭 계정으로 로그인하기</StaffLogInButton>
          </LogInWrap>
        ) : (
          <LogInWrap>
            <CancelButton>
              <img src={closeIcon} style={{ width: '100%' }} onClick={cancelButtonClickHandler} />
            </CancelButton>
            <StaffLogInTitle>스탭 계정 로그인</StaffLogInTitle>
            <LogInFormWrap>
              <LogInFormContent style={{ marginTop: '15px' }}>아이디</LogInFormContent>
              <LogInInput />
              <LogInFormContent>비밀번호</LogInFormContent>
              <LogInInput type="password" />
            </LogInFormWrap>
            <StaffLogInButton style={{ margin: '20px 0' }}>스탭으로 로그인</StaffLogInButton>
            <BacktoSnsLogInButton onClick={backButtonClickHandler}>SNS 로그인 화면으로 돌아가기</BacktoSnsLogInButton>
          </LogInWrap>
        )}
      </Wrap>
    </>
  );
};

export default LogInForm;

const Wrap = styled.div`
  position: relative;
  width: 420px;
  height: 510px;
  max-width: 500px;
  background: white;
`;

const LogInWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CancelButton = styled.button`
  position: absolute;
  top: 15px;
  left: 10px;
  width: 30px;
  font-family: 'S-CoreDream-4Regular';
  color: white;
  font-size: 15px;
  &:hover {
    color: ${({ theme }) => theme.color.point};
  }
`;

const LogInFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  padding: 10px 20px 20px 20px;
  border-radius: 5px;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-family: 'Eoe_Zno_L';
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const LogInContent = styled.div`
  font-family: 'Eoe_Zno_L';
  color: black;
  font-weight: bold;
  font-size: 14px;
  margin: 20px;
`;

const StaffLogInButton = styled.button`
  width: 340px;
  height: 50px;
  background: black;
  border-radius: 2px;
  font-family: 'Eoe_Zno_L';
  color: white;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    background: ${({ theme }) => theme.color.point};
  }
`;

const StaffLogInTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-family: 'Eoe_Zno_L';
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 35px 0;
`;

const LogInFormContent = styled.div`
  font-family: 'Eoe_Zno_L';
  width: 300px;
  color: black;
  font-weight: bold;
  font-size: 13px;
  text-align: left;
  margin: 0 0 10px 15px;
`;

const LogInInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  margin: 2px 0 15px 0;
  padding: 15px;
  font-size: 16px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point};
  }
`;

const BacktoSnsLogInButton = styled.button`
  font-family: 'Eoe_Zno_L';
  color: ${({ theme }) => theme.color.point};
  font-size: 15px;
  font-weight: bold;
  margin: 17px 0;
  &:hover {
    text-decoration: underline;
  }
`;

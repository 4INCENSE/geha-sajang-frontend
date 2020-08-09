import React, { useState } from 'react';
import styled from 'styled-components';
import mainImage from '@/img/bunkBed.jpg';
import appleLogo from '@/img/snsLogo/apple.png';
import googleLogo from '@/img/snsLogo/google.png';
import kakaoLogo from '@/img/snsLogo/kakao.png';
import naverLogo from '@/img/snsLogo/naver.png';

import LogInButton from '@/components/LogIn/LogInForm/LogInButton/LogInButton';

const Wrap = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 1);
  width: 420px;
  height: 510px;
  max-width: 500px;
`;

const LogInWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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
  font-family: 'Eoe_Zno_L';
  font-size: 20px;
  font-weight: bold;
  color: black;
  height: 50px;
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
  font-family: 'Eoe_Zno_L';
  width: 340px;
  height: 50px;
  border-radius: 5px;
  background: black;
  color: white;
  font-size: 15px;
  font-weight: 600;
  &:hover {
    background: ${({ theme }) => theme.color.gray};
  }
`;

const StaffLogInTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Eoe_Zno_L';
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 20px 0 35px 0;
  height: 50px;
`;

const LogInFormContent = styled.div`
  font-family: 'Eoe_Zno_L';
  width: 300px;
  color: black;
  font-weight: bold;
  font-size: 13px;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 15px;
`;

const LogInInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
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
  margin: 17px 0;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.point};
  &:hover {
    text-decoration: underline;
  }
`;

const LogInForm = () => {
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
            <LoginTitle>서비스 시작하기</LoginTitle>
            <LogInFormWrap>
              <LogInButton
                title="카카오톡 계정으로 시작"
                logo={kakaoLogo}
                background="#FFF104"
                hover="#e3d705"
                logoHeight="33px"
              />
              <LogInButton
                title="네이버 계정으로 시작"
                color="white"
                logo={naverLogo}
                background="#09C943"
                hover="#099634"
                logoHeight="37px"
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
                background="#b8b8b8"
                hover="#999999"
              />
            </LogInFormWrap>
            <LogInContent>스텝 아이디가 있다면,</LogInContent>
            <StaffLogInButton onClick={staffLogInButtonClickHandelr}>스탭 계정으로 로그인하기</StaffLogInButton>
          </LogInWrap>
        ) : (
          <LogInWrap>
            <StaffLogInTitle>스탭 계정 로그인</StaffLogInTitle>

            <LogInFormWrap>
              <LogInFormContent style={{ marginTop: '15px' }}>아이디</LogInFormContent>
              <LogInInput />
              <LogInFormContent>비밀번호</LogInFormContent>
              <LogInInput type="password" />
            </LogInFormWrap>

            <StaffLogInButton style={{ margin: '20px 0' }}>스태프로 로그인</StaffLogInButton>
            <BacktoSnsLogInButton onClick={backButtonClickHandler}>SNS 로그인 화면으로 돌아가기</BacktoSnsLogInButton>
          </LogInWrap>
        )}
      </Wrap>
    </>
  );
};

export default LogInForm;

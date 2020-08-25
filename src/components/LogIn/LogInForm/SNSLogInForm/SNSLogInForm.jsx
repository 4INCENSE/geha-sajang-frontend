import React from 'react';
import styled from 'styled-components';

import closeIcon from '@/img/icon/close.png';
import appleLogo from '@/img/snsLogo/apple.png';
import googleLogo from '@/img/snsLogo/google.png';
import kakaoLogo from '@/img/snsLogo/kakao.png';
import naverLogo from '@/img/snsLogo/naver.png';
import kakao from '@/img/snsLogo/kakao.png';

import LogInButton from '@/components/LogIn/LogInForm/SNSLogInForm/LogInButton/LogInButton';

const SNSLogInForm = () => {
  return (
    <>
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
        <LogInButton title="구글 계정으로 시작" color="white" logo={googleLogo} background="#2161ff" hover="#1c53d9" />
        <LogInButton title="애플 계정으로 시작" color="black" logo={appleLogo} background="#dbdbdb" hover="#999999" />
      </LogInFormWrap>
    </>
  );
};

export default SNSLogInForm;

const LogInFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  padding: 10px 20px 20px 20px;
  border-radius: 5px;
`;

const LogInTitle = styled.div`
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

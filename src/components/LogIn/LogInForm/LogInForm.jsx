import React from 'react';
import styled from 'styled-components';
import mainImage from '@/img/bunkBed.jpg';
import appleLogo from '@/img/snsLogo/apple.png';
import googleLogo from '@/img/snsLogo/google.png';
import kakaoLogo from '@/img/snsLogo/kakao.png';
import naverLogo from '@/img/snsLogo/naver.png';

import LogInButton from '@/components/LogIn/LogInForm/LogInButton/LogInButton';

const LogInWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.45);
  height: 560px;
  width: 500px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'S-CoreDream-4Regular';
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
  height: 50px;
`;

const LogInButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 5px;
`;


const LogInDescription = styled.div`
  font-family: 'S-CoreDream-4Regular';
  color: black;
  font-weight: bold;
  font-size: 15px;
  margin: 20px;
`;

const StaffLogInButton = styled.button`
  font-family: 'Eoe_Zno_L';
  width: 390px;
  height: 55px;
  border-radius: 5px;
  background: black;
  color: white;
  font-size: 16px;
  font-weight: 600;
  &:hover {
      background: ${({theme})=> theme.color.point};
  }
`;

const LogInForm = () => {
  return (
    <LogInWrap>
      <LoginTitle>서비스 시작하기</LoginTitle>
      <LogInButtonWrap>
        <LogInButton title='카카오톡 계정으로 시작' logo={kakaoLogo} background='#FFF104' hover='#e3d705' logoHeight='33px'/>
        <LogInButton title='네이버 계정으로 시작' color='white' logo={naverLogo} background='#09C943' hover='#099634' logoHeight='37px'/>
        <LogInButton title='구글 계정으로 시작' color='white' logo={googleLogo} background='#2161ff' hover='#1c53d9'/>
        <LogInButton title='애플 계정으로 시작' logo={appleLogo} background='#dbdbdb' hover='#999999'/>

      </LogInButtonWrap>
      <LogInDescription>스텝 아이디가 있다면,</LogInDescription>
      <StaffLogInButton>게스트하우스 스탭 로그인</StaffLogInButton>
    </LogInWrap>
  );
};

export default LogInForm;

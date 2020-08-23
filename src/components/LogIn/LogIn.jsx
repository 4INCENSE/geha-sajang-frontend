import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '@/img/logo/logo.png';

import LogInForm from '@/components/LogIn/LogInForm/LogInForm';
import ServiceDescription from '@/components/LogIn/ServiceDescription/ServiceDescription';

const LogIn = () => {
  const [logInFormWrapRightValue, setLogInFormWrapRightValueValue] = useState('-650px');
  const [serviceStartDisplay, setServiceStartButtonDisplay] = useState('flex');

  const startButtonClickHandler = () => {
    setLogInFormWrapRightValueValue(0);
    setServiceStartButtonDisplay('none');
  };

  const cancelButtonClickHandler = () => {
    setLogInFormWrapRightValueValue('-650px');
    setTimeout(() => {
      setServiceStartButtonDisplay('flex');
    }, 230);
  };

  return (
    <Wrap>
      <LogInConentWrap>
        <ImgBlur />
        <Logo src={logo} />
        <DescriptionContent>
          게스트 하우스 맞춤형 예약 관리 시스템으로
          <br />
          게스트의 예약을 보다 손쉽게 관리하세요
        </DescriptionContent>
        <ServiceStartButton style={{ display: serviceStartDisplay }} onClick={startButtonClickHandler}>
          지금 바로 시작하기
        </ServiceStartButton>
        <LoginFormWrap style={{ right: logInFormWrapRightValue }}>
          <LogInForm cancelButtonClickHandler={cancelButtonClickHandler} />
        </LoginFormWrap>
      </LogInConentWrap>
      <ServiceDescription />
    </Wrap>
  );
};

export default LogIn;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
  overflow-x: hidden;
`;

const LogInConentWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: inherit;
  height: 680px;
  background-image: url('bunkBed.jpg');
  background-size: cover;
  overflow-x: hidden;
`;

const ImgBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 60px;
  width: 300px;
  padding: 10px;
`;

const ServiceStartButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: 'flex';
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 30px 40px;
  background: ${({ theme }) => theme.color.point};
  border-radius: 5px;
  font-family: 'S-CoreDream-4Regular';
  color: white;
  font-size: 25px;
  font-weight: bold;
  &:hover {
    background: black;
  }
`;

const DescriptionContent = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  display: flex;
  flex-direction: column;
  font-family: 'S-CoreDream-4Regular';
  color: white;
  font-weight: bold;
  font-size: 23px;
  line-height: 40px;
  text-align: left;
`;

const LoginFormWrap = styled.div`
  position: absolute;
  right: -650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 100%;
  transition: 0.5s;
`;

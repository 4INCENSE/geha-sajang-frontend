import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '@/img/logo/logo.png';
import mobileBackground from '@/img/mobileBackground.jpg';

import LogInForm from '@/components/LogIn/LogInForm/LogInForm';
import ServiceDescription from '@/components/LogIn/ServiceDescription/ServiceDescription';

import { mobileModeWidth, loginSlideWidth } from '@/common/constants/responsiveWidth';

const LogIn = () => {
  const [logInFormWrapRightValue, setLogInFormWrapRightValueValue] = useState('-1000px');
  const [serviceStartDisplay, setServiceStartButtonDisplay] = useState('flex');

  const startButtonClickHandler = () => {
    setLogInFormWrapRightValueValue(0);
    setServiceStartButtonDisplay('none');
  };

  const cancelButtonClickHandler = () => {
    setLogInFormWrapRightValueValue('-1000px');
    setTimeout(() => {
      setServiceStartButtonDisplay('flex');
    }, 230);
  };

  const mobileStartButtonClickHandler = () => {
    setLogInFormWrapRightValueValue(0);
    setServiceStartButtonDisplay('none');
  };

  return (
    <Wrap>
      <LogInContentWrap>
        <ImgBlur />
        <LogoDescriptionWrap>
          <Logo src={logo} />
          <DescriptionContent>
            게스트 하우스 맞춤형 예약 관리 시스템으로
            <br />
            게스트의 예약을 보다 손쉽게 관리하세요
          </DescriptionContent>
        </LogoDescriptionWrap>
        <ServiceStartButtonWrap>
          <ServiceStartButton style={{ display: serviceStartDisplay }} onClick={mobileStartButtonClickHandler}>
            지금 바로 시작하기
          </ServiceStartButton>
        </ServiceStartButtonWrap>
        <ServiceStartMobileButton onClick={startButtonClickHandler}>지금 바로 시작하기</ServiceStartMobileButton>
        <LoginFormWrap style={{ right: logInFormWrapRightValue }}>
          <LogInForm cancelButtonClickHandler={cancelButtonClickHandler} />
        </LoginFormWrap>
      </LogInContentWrap>
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
`;

const LogInContentWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: inherit;
  height: 680px;
  background-image: url('bunkBed.jpg');
  background-size: cover;
  overflow-x: hidden;
  @media only screen and (max-width: ${loginSlideWidth}) {
    background-image: url('mobileBackground.jpg');
    background-size: cover;
    width: 100%;
    height: 570px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const ImgBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  @media only screen and (max-width: ${loginSlideWidth}) {
    width: 100%;
    height: 570px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 60px;
  width: 300px;
  padding: 10px;
  @media only screen and (max-width: ${loginSlideWidth}) {
    position: static;
    width: 250px;
    height: 200px;
    padding: 0;
    z-index: 2;
    margin: 10% 0 0 0;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    position: static;
    width: 180px;
    height: 150px;
    padding: 0;
    z-index: 2;
    margin: 15% 0 0 0;
  }
`;

const ServiceStartButtonWrap = styled.div`
  @media only screen and (max-width: ${loginSlideWidth}) {
    display: none;
  }
`;

const ServiceStartButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
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
  word-break: keep-all;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.darkPoint};
  }
  @media only screen and (max-width: ${loginSlideWidth}) {
    display: none;
  }
`;

const ServiceStartMobileButton = styled.button`
  display: none;
  @media only screen and (max-width: ${loginSlideWidth}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    padding: 20px 40px;
    background: ${({ theme }) => theme.color.point};
    border-radius: 5px;
    font-family: 'S-CoreDream-4Regular';
    color: white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.color.darkPoint};
    }
    z-index: 2;
    margin: 0 0 10% 0;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    z-index: 2;
    margin: 0 0 15% 0;
  }
`;

const LogoDescriptionWrap = styled.div`
  @media only screen and (max-width: ${loginSlideWidth}) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
  @media only screen and (max-width: ${loginSlideWidth}) {
    position: static;
    z-index: 2;
    font-size: 20px;
    text-align: center;
    margin: 15px 0 0 0;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    font-size: 15px;
    line-height: 30px;
  }
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
  @media only screen and (max-width: ${loginSlideWidth}) {
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;

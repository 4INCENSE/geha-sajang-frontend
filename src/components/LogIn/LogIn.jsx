import React from 'react';
import styled from 'styled-components';
import logo from '@/img/Logo/logo.png';

import LogInForm from '@/components/LogIn/LogInForm/LogInForm';
import ServiceDescription from '@/components/LogIn/ServiceDescription/ServiceDescription';

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const LogInConentWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: inherit;
  height: 680px;
  background-image: url('bunkBed.jpg');
  background-size: cover;
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 60px;
  width: 280px;
`;

const DescriptionContentWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
  bottom: 30px;
  left: 40px;
  padding: 35px;
`;

const EnglishContent = styled.div`
  color: white;
  font-weight: bold;
  font-size: 55px;
  text-align: left;
`;

const KoreanContent = styled.div`
  color: white;
  font-weight: bold;
  font-size: 23px;
  text-align: left;
  font-family: 'S-CoreDream-4Regular';
  margin-bottom: 10px;
`;

const LoginFormWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.75);
`;

const LogIn = () => {
  return (
    <Wrap>
      <LogInConentWrap>
        <Logo src={logo} />
        <DescriptionContentWrap>
          <KoreanContent>게스트하우스 예약관리 서비스</KoreanContent>
          <EnglishContent>
            Guest house
            <br />
            Reservation <br /> management service
          </EnglishContent>
        </DescriptionContentWrap>
        <LoginFormWrap>
          <LogInForm />
        </LoginFormWrap>
      </LogInConentWrap>
      <ServiceDescription />
    </Wrap>
  );
};

export default LogIn;

import React from 'react';
import styled from 'styled-components';

import logo from '@/img/logo/logo_b.png';

const SelectRegistrationType = ({ display, nextButton }) => {
  return (
    <ContentWrap style={{ display: display }}>
      <RegisterWrap>
        <ServiceLogo src={logo} />
        <RegisterTitle> 게스트하우스 예약관리 서비스를 시작합니다</RegisterTitle>
        <RegisterDescription>
          새롭게 게스트하우스를 등록하거나
          <br /> 이미 등록된 게스트하우스에 들어갈 수 있습니다.
          <br />
          이미 등록된 게스트하우스에 들어가려면 <br />
          들어가고자 하는 게스트하우스의 <span>초대코드</span>가 필요합니다.
          <br /> 아래 두가지 중 하나를 선택해주세요.
        </RegisterDescription>
        <SelectButtonWrap>
          <SelectButton>등록된 게스트하우스</SelectButton>
          <SelectButton onClick={nextButton}>새로운 게스트하우스</SelectButton>
        </SelectButtonWrap>
      </RegisterWrap>
    </ContentWrap>
  );
};

export default SelectRegistrationType;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px;
`;

const ServiceLogo = styled.img`
  width: 180px;
  margin: 0px 0px 40px 0px;
`;

const RegisterTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  margin: 0 0 40px 0;
`;

const RegisterDescription = styled.div`
  width: 400px;
  font-family: 'S-CoreDream-2ExtraLight';
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  text-align: center;
  margin-bottom: 20px;
  span {
    font-family: 'S-CoreDream-4Regular';
    font-size: 16px;
    font-weight: bold;
    line-height: 30px;
    color: ${({ theme }) => theme.color.point};
  }
`;

const RegisterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 830px;
  border: 0.5px solid #b3b3b3;
  padding: 60px;
`;

const SelectButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 80px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.point};
  font-family: 'S-CoreDream-2ExtraLight';
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  color: white;
  padding: 15px;
  margin: 30px 0 0 0;

  &:hover {
    background: black;
    color: white;
  }
`;

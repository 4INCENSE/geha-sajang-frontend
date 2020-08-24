import React from 'react';
import styled from 'styled-components';

import BlackButton from '@/components/UIComponents/Button/BlackButton';

const RegisterRegisteredGuesthouse = ({ display, nextButton }) => {
  return (
    <ContentWrap style={{ display: display }}>
      <RegisterWrap>
        <RegisterTitle>등록된 게스트하우스에 들어가기</RegisterTitle>
        <InputWrap>
          <InputTitle>게스트하우스 식별 코드</InputTitle>
          <InputButtonWrap>
            <Input />
            <InputButton>확인</InputButton>
          </InputButtonWrap>
        </InputWrap>
        <InputWrap>
          <InputTitle>초대코드</InputTitle>
          <Input />
        </InputWrap>
        <BlackButton title="다음" onClick={nextButton} />
      </RegisterWrap>
    </ContentWrap>
  );
};

export default RegisterRegisteredGuesthouse;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px;
`;

const RegisterTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  margin: 0 0 60px 0;
`;

const RegisterWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 830px;
  border: 0.5px solid #b3b3b3;
  padding: 60px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-bottom: 35px;
`;

const InputTitle = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 17px;
  color: ${({ theme }) => theme.color.darkGray};
  padding-left: 5px;
  margin-bottom: 10px;
  span {
    color: ${({ theme }) => theme.color.point};
    margin-left: 3px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  margin-top: 2px;
  padding: 15px;
  font-size: 16px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point};
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  -moz-appearance: textfield;
  ::placeholder {
    font-size: 13px;
  }
`;

const GuestHouseWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 35px;
`;

const GuestHouseImage = styled.img`
  width: 100px;
`;

const GuestHouseName = styled.div`
  font-family: 'Eoe_Zno_L';
  font-size: 20px;
`;

const InputMessage = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  color: ${({ theme }) => theme.color.point};
  padding: 10px 5px 0px 5px;
`;

const InputButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Eoe_Zno_L';
  width: 50px;
  height: 40px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  font-size: 13px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
  margin-left: 10px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.point};
  }
`;

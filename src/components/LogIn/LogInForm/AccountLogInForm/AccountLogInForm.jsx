import React from 'react';
import styled from 'styled-components';

const AccountLogInForm = ({ title, buttonTitle }) => {
  return (
    <>
      <LogInTitle>{title}</LogInTitle>
      <LogInFormWrap>
        <LogInFormContent style={{ marginTop: '15px' }}>아이디</LogInFormContent>
        <LogInInput />
        <LogInFormContent>비밀번호</LogInFormContent>
        <LogInInput type="password" />
      </LogInFormWrap>
      <ButtonWrap>
        <Button>{buttonTitle}</Button>
      </ButtonWrap>
    </>
  );
};

export default AccountLogInForm;

const LogInFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  padding: 20px;
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

const LogInFormContent = styled.div`
  font-family: 'Eoe_Zno_L';
  width: 300px;
  color: black;
  font-weight: bold;
  font-size: 13px;
  text-align: left;
  margin: 10px 0 10px 15px;
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
const ButtonWrap = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  width: 340px;
  height: 50px;
  background: black;
  border-radius: 2px;
  font-family: 'Eoe_Zno_L';
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin: 0px 0px 18px 0px;
  &:hover {
    background: ${({ theme }) => theme.color.point};
  }
`;

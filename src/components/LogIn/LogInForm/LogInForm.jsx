import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import mainImage from '@/img/bunkBed.jpg';
import closeIcon from '@/img/icon/close.png';

import AccountLogInForm from '@/components/LogIn/LogInForm/AccountLogInForm/AccountLogInForm';
import SNSLogInForm from '@/components/LogIn/LogInForm/SNSLogInForm/SNSLogInForm';

const LogInForm = ({ cancelButtonClickHandler }) => {
  const history = useHistory();

  const [isStaffLogIn, setIsStaffLogIn] = useState(false);

  const staffLogInButtonClickHandler = () => {
    setIsStaffLogIn(true);
  };

  const backButtonClickHandler = () => {
    setIsStaffLogIn(false);
  };

  const moveToRegister = () => {
    history.push('/register');
  };

  return (
    <>
      <Wrap>
        <LogInWrap>
          <CancelButton>
            <img src={closeIcon} style={{ width: '100%' }} onClick={cancelButtonClickHandler} />
          </CancelButton>
          {!isStaffLogIn ? (
            <>
              <AccountLogInForm title="서비스 시작하기" buttonTitle="로그인" />
              <ButtonWrap>
                <span>사이트가 처음이신가요?</span>
                <BackToLogInButton onClick={moveToRegister}>회원가입</BackToLogInButton>
              </ButtonWrap>
              <ButtonWrap>
                <span>스텝 계정이 있으시다면,</span>
                <BackToLogInButton onClick={staffLogInButtonClickHandler}>스탭 계정으로 로그인하기</BackToLogInButton>
              </ButtonWrap>
            </>
          ) : (
            <>
              <AccountLogInForm title="스텝 계정 로그인" buttonTitle="스텝으로 로그인" />
              <BackToLogInButton style={{ marginTop: '10px' }} onClick={backButtonClickHandler}>
                사장님 로그인 화면으로 돌아가기
              </BackToLogInButton>
            </>
          )}
        </LogInWrap>
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

const ButtonWrap = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;
  line-height: 27px;
  span {
    font-family: 'Eoe_Zno_L';
    color: ${({ theme }) => theme.color.darkGray};
    font-size: 14px;
    font-weight: bold;
  }
`;

const BackToLogInButton = styled.button`
  font-family: 'Eoe_Zno_L';
  color: ${({ theme }) => theme.color.point};
  font-size: 14px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

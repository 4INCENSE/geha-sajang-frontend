import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { postLogIn } from '@/redux/LogInLogOut/thunk/postLogIn';
import { postResendEmail } from '@/redux/LogInLogOut/thunk/postResendEmail';

import { logInErrorCode } from '@/common/constants/errorCode';
import { unregistered, inProgress, registered, staff } from '@/common/constants/registerState';

import LoadingIndicator from '@/components/LoadingIndicator/LoadingIndicator';
import Modal from '@/components/Modal/Modal';
import Input from '@/components/UIComponents/Input/Input';

const AccountLogInForm = ({ title, buttonTitle }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { logIn, resendEmail } = useSelector((state) => state.logInLogOutReducer);

  const [modalMessage, setModalMessage] = useState('계정 아이디 혹은 비밀번호가 일치하지 않습니다');
  const [messageDisplay, setMessageDisplay] = useState('none');
  const [buttonMessageDisplay, setButtonMessageDisplay] = useState('none');
  const [isLoading, setIsLoading] = useState(false);

  const IdInput = React.createRef();
  const passwordInput = React.createRef();

  useEffect(() => {
    const { data, error } = logIn;
    if (!data) return;
    if (data.status === 200) return successLogIn(data);
    if (data) setIsLoading(false);
    if (error) return errorLogIn(data);
  }, [logIn]);

  useEffect(() => {
    const { data, error } = resendEmail;
    if (!data) return;
    if (data.status === 200) return successResendEmail();
    if (data) setIsLoading(false);
    if (error) return errorResendEmail(data);
  }, [resendEmail]);

  const logInButtonClickHandler = () => {
    const idValue = IdInput.current.value;
    const passwordValue = passwordInput.current.value;
    if (idValue.length <= 0 || passwordValue <= 0) return setMessageModal('아이디와 비밀번호를 입력해주세요');

    const postData = { account: IdInput.current.value, password: passwordInput.current.value };
    dispatch(postLogIn(postData));
    setIsLoading(true);
  };

  const passwordInputEnterKeyPressHandler = (e) => {
    if (e.keyCode === 13) logInButtonClickHandler();
  };

  const successLogIn = (data) => {
    let registerState = data.data.registerState;
    if (registerState === staff || registerState === registered) {
      return history.push('/');
    }
    if (registerState === unregistered || registerState === inProgress) {
      return history.push('/registerGuestHouse');
    }
  };

  const logOutButtonClickHandler = () => {
    console.log('로그아웃');
  };

  const setMessageModal = (message) => {
    setModalMessage(message);
    setMessageDisplay('flex');
    setButtonMessageDisplay('none');
    setTimeout(() => {
      setMessageDisplay('none');
    }, 1200);
  };

  const yesButtonClickHandler = () => {
    setIsLoading(true);
    const idValue = IdInput.current.value;
    dispatch(postResendEmail(idValue));
    setButtonMessageDisplay('none');
  };

  const noButtonClickHandler = () => {
    setButtonMessageDisplay('none');
  };

  const errorLogIn = (data) => {
    setIsLoading(false);
    if (!data.response) return alert(data.message);
    const errorCode = data.response.data.code;
    const errorMessage = data.response.data.message;
    const { NOT_CERTIFIED_ACCOUNT, NOT_FOUNT_ACCOUNT, INCORRECT_PASSWORD } = logInErrorCode;

    if (errorCode === NOT_CERTIFIED_ACCOUNT) {
      setModalMessage(` 이메일 인증이 완료되지 않았습니다.
      \n\n
      인증 메일을 재전송 하시겠습니까?`);
      setButtonMessageDisplay('flex');
      return;
    }
    if (errorCode === NOT_FOUNT_ACCOUNT || errorCode === INCORRECT_PASSWORD)
      return setMessageModal('계정 혹은 비밀번호가 일치하지 않습니다');
    setMessageModal(errorMessage);
  };

  const successResendEmail = () => {
    setMessageModal('인증 메일이 재전송되었습니다');
    setIsLoading(false);
  };

  const errorResendEmail = (data) => {
    const errorCode = data.response.data.code;
    const errorMessage = data.response.data.message;
    const { CERTIFIED_ACCOUNT } = logInErrorCode;

    if (errorCode === CERTIFIED_ACCOUNT) return setMessageModal('이미 인증 완료된 이메일입니다');
    if (errorCode === NOT_FOUNT_ACCOUNT) return setMessageModal('존재하지 않는 계정이거나 삭제된 계정입니다');
    setMessageModal(errorMessage);
  };

  return (
    <>
      {isLoading ? <LoadingIndicator position="absolute" /> : ''}
      <Modal
        messageDisplay={messageDisplay}
        buttonMessageDisplay={buttonMessageDisplay}
        message={modalMessage}
        yesButtonClickHandler={yesButtonClickHandler}
        noButtonClickHandler={noButtonClickHandler}
      />
      <LogInTitle>{title}</LogInTitle>
      <LogInFormWrap>
        <LogInFormContent style={{ marginTop: '15px' }}>아이디</LogInFormContent>
        <InputWrap>
          <Input inputWidth="300px" refValue={IdInput} />
        </InputWrap>
        <LogInFormContent>비밀번호</LogInFormContent>
        <InputWrap>
          <Input
            inputWidth="300px"
            refValue={passwordInput}
            type="password"
            onKeyDown={passwordInputEnterKeyPressHandler}
          />
        </InputWrap>
      </LogInFormWrap>
      <ButtonWrap>
        <Button onClick={logInButtonClickHandler}>{buttonTitle}</Button>
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

const InputWrap = styled.div`
  margin: 2px 0 15px 0;
`;
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
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
  font-weight: bold;
  margin: 0px 0px 18px 0px;
  &:hover {
    background: ${({ theme }) => theme.color.point};
  }
`;

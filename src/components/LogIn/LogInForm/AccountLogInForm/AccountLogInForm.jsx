import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { postLogIn } from '@/redux/LogInLogOut/thunk/postLogIn';

import Input from '@/components/UIComponents/Input/Input';

const AccountLogInForm = ({ title, buttonTitle }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { logIn } = useSelector((state) => state.logInLogOutReducer);

  const IdInput = React.createRef();
  const passwordInput = React.createRef();

  useEffect(() => {
    const { data, loading, error } = logIn;
    if (!data) return;
    if (data.status === 200) return successLogIn();
    if (error) alert(data.response.data.message);
  }, [logIn]);

  const logInButtonClickHandler = () => {
    const postData = { account: IdInput.current.value, password: passwordInput.current.value };
    dispatch(postLogIn(postData));
  };

  const successLogIn = () => {
    console.log('로그인 성공');
  };

  return (
    <>
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

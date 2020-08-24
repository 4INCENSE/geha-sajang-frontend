import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '@/components/Header/Header';

import BlackButton from '@/components/UIComponents/Button/BlackButton';
import TitleInput from '@/components/UIComponents/Input/TitleInput';
import TitleButtonInput from '@/components/UIComponents/Input/TitleButtonInput';
import UploadFile from '@/components/UIComponents/UploadFile/UploadFile';

const CreateAccount = () => {
  const [currentImage, setCurrentImage] = useState();

  return (
    <Wrap>
      <Header />
      <ContentWrap>
        <RegisterTitle>회원가입</RegisterTitle>
        <RegisterWrap>
          <InputWrap>
            <TitleInput title="이메일 주소" spanValue=" ●" />
          </InputWrap>
          <InputWrap>
            <TitleInput title="비밀번호" spanValue=" ●" />
          </InputWrap>
          <InputWrap>
            <TitleInput title="비밀번호 확인" spanValue=" ●" />
          </InputWrap>
          <InputWrap>
            <TitleInput title="닉네임" spanValue=" ●" />
          </InputWrap>
          <UploadFile title="프로필 사진" getCurrentFile={setCurrentImage} />
          <BlackButton title="회원가입" />
        </RegisterWrap>
      </ContentWrap>
    </Wrap>
  );
};

export default CreateAccount;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;
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
  margin: 0 0 40px 0;
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
  margin-bottom: 25px;
`;

import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '@/img/Logo/logo.png';
import defaultPreviewImg from '@/img/default_preview_img.png';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 25px;
  background: black;
`;

const ServiceLogo = styled.img`
  height: 60px;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px;
`;

const ResisterTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  /* font-family: 'S-CoreDream-2ExtraLight'; */
  font-weight: bold;
  font-size: 22px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  margin: 0 0 40px 0;
`;

const ResisterSubTitle = styled.div`
  font-family: 'Eoe_Zno_L';
  color: ${({ theme }) => theme.color.gray};
  font-weight: bold;
  font-size: 13px;
  margin: 0 0 40px 0;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  span {
    font-family: 'Eoe_Zno_L';
    font-size: 13px;
    color: ${({ theme }) => theme.color.darkGray};
    font-weight: bold;
  }
`;

const ResisterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 800px;
  border: 0.5px solid #b3b3b3;
  padding: 50px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-bottom: 20px;
`;

const InputTitle = styled.div`
  width: 100%;
  text-align: left;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 15px;
  color: ${({ theme }) => theme.color.darkGray};
  padding-left: 5px;
  margin-bottom: 8px;
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
`;

const PreviewWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 280px;
  margin-top: 15px;
`;
const Preview = styled.img`
  max-width: 100%;
  height: 100%;
`;

const ImgUploadWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const UploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Eoe_Zno_L';
  width: 80px;
  height: 40px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
  margin-right: 10px;
  &:hover {
    /* outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point}; */
    border : 1px solid ${({ theme }) => theme.color.point};
    color : ${({ theme }) => theme.color.point};
  }
`;

const UploadImgDeleteButton = styled.button`
    display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Eoe_Zno_L';
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  font-size: 12px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
  margin-left: 10px;
  &:hover {
    /* outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point}; */
    border : 1px solid ${({ theme }) => theme.color.point};
    color : ${({ theme }) => theme.color.point};
  }
`;

const UploadImgValue = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SignUp = () => {
  const userName = 'test';
  const [currentImg, setCurrentImg] = useState(defaultPreviewImg);
  const [currentImgName, setCurrentImgName] = useState('파일을 업로드 해주세요');
  const formData = new FormData();

  const uploadImage = (e) => {
    if (!e.target.files[0]) return;
    setCurrentImg(URL.createObjectURL(e.target.files[0]));
    setCurrentImgName(e.target.files[0].name);
    console.log(e.target.files[0]);

    // formData 생성은 currentImg를 통해서 나중에 하기
    // formData.append('uploadImage', e.target.files[0], userName);
    //axios로 서버에 전송 시 header에 아래와 같이 추가하여 전송해야함
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // };
  };
  const deleteImage = () => {
    setCurrentImg(defaultPreviewImg);
    setCurrentImgName('파일을 업로드 해주세요');
  };
  return (
    <Wrap>
      <Header>
        <ServiceLogo src={logo} />
      </Header>
      <ContentWrap>
        <ResisterTitle>게스트하우스 정보 등록</ResisterTitle>
        <ResisterSubTitle>
          <span>게스트하우스 정보 등록</span> ▶ 방 정보 등록 ▶ 침대 정보 등록
        </ResisterSubTitle>
        <ResisterWrap>
          <InputWrap>
            <InputTitle>게스트하우스 이름</InputTitle>
            <Input />
          </InputWrap>
          <InputWrap>
            <InputTitle>게스트하우스 대표이미지</InputTitle>
            <ImgUploadWrap>
              <UploadButton htmlFor="file">업로드</UploadButton>
              <UploadImgValue>{currentImgName}</UploadImgValue>
              <UploadImgDeleteButton onClick={deleteImage}>삭제</UploadImgDeleteButton>
              <input
                style={{ position: 'absolute', width: '0', height: '0' }}
                id="file"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={uploadImage}
              />
            </ImgUploadWrap>
            <PreviewWrap>
              <Preview src={currentImg} />
            </PreviewWrap>
          </InputWrap>
          <InputWrap>
            <InputTitle>대표 전화번호</InputTitle>
            <Input type="number" maxlength="11" />
          </InputWrap>
        </ResisterWrap>
      </ContentWrap>
    </Wrap>
  );
};

export default SignUp;

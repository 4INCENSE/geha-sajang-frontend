import React, { useState } from 'react';
import styled from 'styled-components';

import defaultPreviewImage from '@/img/default_preview_img.png';

import InputButton from '@/components/UIComponents/Button/InputButton';

const UploadFile = ({ title, getCurrentFile }) => {
  const [currentImage, setCurrentImage] = useState(defaultPreviewImage);
  const [currentImageName, setCurrentImageName] = useState('파일을 업로드 해주세요');
  const [imageMessage, setImageMessage] = useState();
  const [imageMessageDisplay, setImageMessageDisplay] = useState('none');

  const uploadImage = (e) => {
    const currentFile = e.target.files[0];
    const maxSize = 10 * 1024 * 1024;

    if (!currentFile) return;
    if (!validateImageFileType(currentFile)) {
      setImageMessage('이미지 파일 유형은 png, jpg, jpeg만 가능합니다');
      setImageMessageDisplay('block');
      return;
    }
    if (currentFile.size > maxSize) {
      setImageMessage('이미지 파일 크기는 10MB 이내로 등록 가능합니다');
      setImageMessageDisplay('block');
      return;
    }
    setImageMessageDisplay('none');
    setCurrentImage(URL.createObjectURL(currentFile));
    getCurrentFile(currentFile);
    setCurrentImageName(currentFile.name);
    // formData 생성은 currentImage를 통해서 나중에 하기
    //  const formData = new FormData();
    // formData.append('uploadImage', e.target.files[0], 'userName');
    //axios로 서버에 전송 시 header에 아래와 같이 추가하여 전송해야함
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // };
  };
  const deleteImage = () => {
    setCurrentImage(defaultPreviewImage);
    getCurrentFile();
    setCurrentImageName('파일을 업로드 해주세요');
  };

  const validateImageFileType = (file) => {
    const fileTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    return fileTypes.includes(file.type);
  };

  return (
    <InputWrap>
      <InputTitle>{title}</InputTitle>
      <InputButtonWrap>
        <UploadButton htmlFor="file">업로드</UploadButton>
        <UploadImageValue>{currentImageName}</UploadImageValue>
        <InputButton title="삭제" onClick={deleteImage} />
        <Input id="file" type="file" accept=".jpg, .jpeg, .png" onChange={uploadImage} />
      </InputButtonWrap>
      <InputMessage style={{ display: imageMessageDisplay }}>{imageMessage}</InputMessage>
      <PreviewWrap>
        <Preview src={currentImage} />
      </PreviewWrap>
    </InputWrap>
  );
};

export default UploadFile;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-bottom: 35px;
`;

const InputButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  margin-bottom: 15px;
  span {
    color: ${({ theme }) => theme.color.point};
    margin-left: 3px;
  }
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
    border: 2px solid ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.point};
  }
`;

const UploadImageValue = styled.div`
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

const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
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

const InputMessage = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  color: ${({ theme }) => theme.color.point};
  padding: 10px 5px 0px 5px;
`;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { setTimeout } from 'core-js';
import { useSelector, useDispatch } from 'react-redux';

import { addExtraService, deleteExtraService } from '@/redux/actions/extraServiceAction';

import { checkDuplicate } from '@/lib/util/checkDuplicate';

import defaultPreviewImage from '@/img/default_preview_img.png';
import questionIcon from '@/img/icon/question.png';
import closeIcon from '@/img/icon/close_w.png';

import Button from '@/components/Button/Button';

const RegisterGuestHouseInfo = ({ display, nextButton }) => {
  const dispatch = useDispatch();
  const { extraServiceList } = useSelector((state) => state.registerGuestHouseInfoReducer);

  const [currentImage, setCurrentImage] = useState(defaultPreviewImage);
  const [currentImageName, setCurrentImageName] = useState('파일을 업로드 해주세요');
  const [serviceList, setServiceList] = useState([]);
  const [nameMessage, setNameMessage] = useState();
  const [nameMessageDisplay, setNameMessageDisplay] = useState('none');
  const [imageMessage, setImageMessage] = useState();
  const [imageMessageDisplay, setImageMessageDisplay] = useState('none');
  const [numberMessage, setNumberMessage] = useState();
  const [numberMessageDisplay, setNumberMessageDisplay] = useState('none');
  const [serviceMessage, setServiceMessage] = useState();
  const [serviceMessageDisplay, setServiceMessageDisplay] = useState('none');

  const serviceInput = React.createRef();
  const nameInput = React.createRef();
  const numberInput = React.createRef();

  const extraServiceDescription = `  - 게스트하우스 추가 제공 서비스란?
  <br />
  '픽업', '저녁식사', '장비대여' 등 게스트하우스별 게스트에게 추가적으로 제공하는 서비스를 말합니다.
  <br /> 추가 제공 서비스를 등록해두면 게스트의 서비스 이용 여부를 기록하고 관리할 수 있습니다.
  <br /> 추가 제공 서비스는 회원가입 후, '게스트하우스 설정'에서도 추가,수정 가능합니다.`;

  useEffect(() => {
    setServiceList(extraServiceList);
  }, [extraServiceList]);

  const validateName = () => {
    const nameValue = nameInput.current.value;
    const blankPattern = /^\s+|\s+$/g;
    const nameLengthWithoutBlank = nameValue.replace(blankPattern, '').length;

    if (nameLengthWithoutBlank <= 0) {
      setNameMessage('이름 입력은 필수입니다');
      setNameMessageDisplay('block');
      return false;
    }
    if (nameValue.length > 50) {
      setNameMessage('이름은 50자 이내로 입력해주세요');
      setNameMessageDisplay('block');
      return false;
    }
    setNameMessageDisplay('none');
    return true;
  };

  const uploadImage = (e) => {
    const currentFile = e.target.files[0];
    if (!currentFile) return;
    if (!validateImageFileType(currentFile)) {
      setImageMessage('이미지 파일 유형은 png, jpg, jpeg만 가능합니다');
      setImageMessageDisplay('block');
      setCurrentImage(defaultPreviewImage);
      setCurrentImageName('파일을 업로드 해주세요');
      return;
    }
    setImageMessageDisplay('none');
    setCurrentImage(URL.createObjectURL(currentFile));
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
    setCurrentImageName('파일을 업로드 해주세요');
  };

  const validateImageFileType = (file) => {
    const fileTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    return fileTypes.includes(file.type);
  };

  const validatePhoneNumber = () => {
    const numberValue = numberInput.current.value;

    if (numberValue.length <= 0) {
      setNumberMessage('전화번호 입력은 필수입니다');
      setNumberMessageDisplay('block');
      return false;
    }
    if (numberValue.length > 11 || numberValue.length < 9) {
      setNumberMessage('전화번호를 다시 확인해주세요');
      setNumberMessageDisplay('block');
      return false;
    }
    setNumberMessageDisplay('none');
    return true;
  };

  const removeChar = (e) => {
    const pattern = /[^0-9]/gi;
    e.target.value = e.target.value.replace(pattern, '');
  };

  const addServiceButtonClickHandler = () => {
    const serviceValue = serviceInput.current.value;
    const blankPattern = /^\s+|\s+$/g;
    const serviceValueLengthWithoutBlank = serviceValue.replace(blankPattern, '').length;

    if (extraServiceList.length >= 15) {
      setServiceMessage('서비스는 최대 15개까지 등록 가능합니다');
      setServiceMessageDisplay('block');
      setTimeout(() => {
        setServiceMessageDisplay('none');
      }, 1800);
      return;
    }
    if (serviceValueLengthWithoutBlank <= 0) {
      setServiceMessage('서비스 이름을 입력해주세요');
      setServiceMessageDisplay('block');
      return;
    }
    if (serviceValue.length > 25) {
      setServiceMessage('서비스 이름은 최대 25자까지 입력 가능합니다');
      setServiceMessageDisplay('block');
      return;
    }
    if (checkDuplicate(serviceList, serviceValue)) {
      setServiceMessage('이미 등록된 서비스입니다');
      setServiceMessageDisplay('block');
      return;
    }
    setServiceMessageDisplay('none');
    dispatch(addExtraService(serviceValue));
    serviceInput.current.value = '';
  };

  const serviceInputEnterKeyPressHandler = (e) => {
    if (e.keyCode === 13) addServiceButtonClickHandler();
  };

  const deleteServiceButtonClickHandler = (e) => {
    const clickedServiceTitle = e.target.closest('div').firstChild.data;
    dispatch(deleteExtraService(clickedServiceTitle));
  };

  const registerButtonClickHandler = () => {
    validateName();
    validatePhoneNumber();
    if (validateName() && validatePhoneNumber()) nextButton();
  };

  return (
    <ContentWrap style={{ display: display }}>
      <RegisterTitle>게스트하우스 정보 등록</RegisterTitle>
      <RegisterSubTitle>
        <span>게스트하우스 정보 등록</span> ▶ 방 정보 등록 ▶ 침대 정보 등록
      </RegisterSubTitle>
      <RegisterWrap>
        <InputWrap>
          <InputTitle>
            게스트하우스 이름<span> ●</span>
          </InputTitle>
          <Input onBlur={validateName} ref={nameInput} />
          <InputMessage style={{ display: nameMessageDisplay }}>{nameMessage}</InputMessage>
        </InputWrap>
        <InputWrap>
          <InputTitle>게스트하우스 대표이미지</InputTitle>
          <InputButtonWrap>
            <UploadButton htmlFor="file">업로드</UploadButton>
            <UploadImageValue>{currentImageName}</UploadImageValue>
            <InputButton onClick={deleteImage}>삭제</InputButton>
            <input
              style={{ position: 'absolute', width: '0', height: '0' }}
              id="file"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={uploadImage}
            />
          </InputButtonWrap>
          <InputMessage style={{ display: imageMessageDisplay }}>{imageMessage}</InputMessage>
          <PreviewWrap>
            <Preview src={currentImage} />
          </PreviewWrap>
        </InputWrap>
        <InputWrap>
          <InputTitle>
            대표 전화번호<span> ●</span>
          </InputTitle>
          <Input
            onKeyUp={removeChar}
            onBlur={validatePhoneNumber}
            ref={numberInput}
            maxlength="11"
            placeholder="숫자만 입력해주세요"
          />
          <InputMessage style={{ display: numberMessageDisplay }}>{numberMessage}</InputMessage>
        </InputWrap>
        <InputWrap>
          <InputTitle>
            게스트하우스 추가 제공 서비스
            <QuestionMarkIcon>
              <img src={questionIcon} />
              <div>{extraServiceDescription}</div>
            </QuestionMarkIcon>
          </InputTitle>
          <InputButtonWrap>
            <Input
              ref={serviceInput}
              onKeyDown={serviceInputEnterKeyPressHandler}
              placeholder="ex. 픽업, 저녁식사, 장비대여…"
            />
            <InputButton onClick={addServiceButtonClickHandler}>추가</InputButton>
          </InputButtonWrap>
          <InputMessage style={{ display: serviceMessageDisplay }}>{serviceMessage}</InputMessage>
          <ServiceListWrap>
            {serviceList.map((service, index) => {
              return (
                <ServiceWrap key={index}>
                  {service}
                  <button onClick={(e) => deleteServiceButtonClickHandler(e)}>
                    <img src={closeIcon} />
                  </button>
                </ServiceWrap>
              );
            })}
          </ServiceListWrap>
        </InputWrap>
        <Button title="다음" onClick={registerButtonClickHandler} />
      </RegisterWrap>
    </ContentWrap>
  );
};

export default RegisterGuestHouseInfo;

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

const RegisterSubTitle = styled.div`
  font-family: 'Eoe_Zno_L';
  color: ${({ theme }) => theme.color.gray};
  font-weight: bold;
  font-size: 15px;
  margin: 0 0 50px 0;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 15px;
  span {
    font-family: 'Eoe_Zno_L';
    font-size: 15px;
    color: ${({ theme }) => theme.color.darkGray};
    font-weight: bold;
  }
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

const QuestionMarkIcon = styled.div`
  position: relative;
  &:hover {
    div {
      display: block;
    }
  }
  img {
    width: 15px;
    margin: 0 0 -4px 5px;
  }
  div {
    display: none;
    position: absolute;
    bottom: 0;
    left: 25px;
    width: 350px;
    line-height: 25px;
    padding: 15px 20px;
    font-family: 'S-CoreDream-2ExtraLight';
    font-size: 13px;
    color: white;
    background: rgba(0, 0, 0, 0.8);
  }
`;

const ServiceListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 85px;
  border: solid 1px ${({ theme }) => theme.color.lightGray};
  margin-top: 20px;
  padding: 20px 10px 10px 10px;
`;

const ServiceWrap = styled.div`
  display: flex;
  position: relative;
  margin-right: 10px;
  margin-bottom: 12px;
  border-radius: 15px;
  border: solid 2px ${({ theme }) => theme.color.gray};
  display: flex;
  align-items: center;
  padding: 8px 10px 8px 12px;
  font-family: 'Eoe_Zno_L';
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkGray};
  button {
    width: 20px;
    background: ${({ theme }) => theme.color.gray};
    border-radius: 10px;
    padding: 2px;
    margin-left: 7px;
    img {
      width: 10px;
    }
  }
  &:hover {
    border: solid 2px ${({ theme }) => theme.color.point};
    button {
      background: ${({ theme }) => theme.color.point};
    }
  }
`;

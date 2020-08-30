import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { setTimeout } from 'core-js';
import { useSelector, useDispatch } from 'react-redux';

import {
  addExtraService,
  deleteExtraService
} from '@/redux/Registration/actions/RegisterGuestHouseActions/extraServiceAction';

import { guestHouseInfoFormData } from '@/redux/Registration/actions/RegisterGuestHouseActions/guestHouseInfoFormDataAction';

import { checkDuplicate } from '@/common/lib/util/checkDuplicate';

import questionIcon from '@/img/icon/question.png';
import closeIcon from '@/img/icon/close_w.png';

import BlackButton from '@/components/UIComponents/Button/BlackButton';
import TitleInput from '@/components/UIComponents/Input/TitleInput';
import TitleButtonInput from '@/components/UIComponents/Input/TitleButtonInput';
import UploadFile from '@/components/UIComponents/UploadFile/UploadFile';

const GuestHouseInfo = ({ display, nextButton }) => {
  const dispatch = useDispatch();
  const { extraServiceList, postGuestHouseInfo } = useSelector((state) => state.registerGuestHouseReducer);

  const [currentImage, setCurrentImage] = useState();
  const [serviceList, setServiceList] = useState([]);
  const [nameMessage, setNameMessage] = useState();
  const [nameMessageDisplay, setNameMessageDisplay] = useState('none');
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

  useEffect(() => {
    const { data, loading, error } = postGuestHouseInfo;
    if (!data) return;
    if (data.status === 201) return nextButton();
    if (error) alert(data.response.data.message);
  }, [postGuestHouseInfo]);

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
    if (validateName() && validatePhoneNumber()) {
      const postData = {
        name: nameInput.current.value,
        mainNumber: numberInput.current.value,
        image: currentImage
      };

      dispatch(guestHouseInfoFormData(postData));
    }
  };

  return (
    <ContentWrap style={{ display: display }}>
      <RegisterTitle>게스트하우스 정보 등록</RegisterTitle>
      <RegisterSubTitle>
        <span>게스트하우스 정보 등록</span> ▶ 방 정보 등록 ▶ 침대 정보 등록
      </RegisterSubTitle>
      <RegisterWrap>
        <InputWrap>
          <TitleInput
            title="게스트하우스 이름"
            spanValue=" ●"
            onBlur={validateName}
            refValue={nameInput}
            messageDisplay={nameMessageDisplay}
            messageValue={nameMessage}
          />
        </InputWrap>
        <UploadFile title="게스트하우스 대표이미지" getCurrentFile={setCurrentImage} />
        <InputWrap>
          <TitleInput
            title="대표 전화번호"
            spanValue=" ●"
            onKeyUp={removeChar}
            onBlur={validatePhoneNumber}
            refValue={numberInput}
            maxlength="11"
            placeholder="숫자만 입력해주세요"
            messageDisplay={numberMessageDisplay}
            messageValue={numberMessage}
          />
        </InputWrap>
        <InputWrap>
          <InputTitle>
            게스트하우스 추가 제공 서비스
            <QuestionMarkIcon>
              <img src={questionIcon} />
              <div>{extraServiceDescription}</div>
            </QuestionMarkIcon>
          </InputTitle>
          <TitleButtonInput
            refValue={serviceInput}
            onKeyDown={serviceInputEnterKeyPressHandler}
            placeholder="ex. 픽업, 저녁식사, 장비대여…"
            buttonTitle="추가"
            buttonOnClick={addServiceButtonClickHandler}
            messageDisplay={serviceMessageDisplay}
            messageValue={serviceMessage}
          />
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
        <BlackButton title="다음" onClick={registerButtonClickHandler} />
      </RegisterWrap>
    </ContentWrap>
  );
};

export default GuestHouseInfo;

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
  span {
    color: ${({ theme }) => theme.color.point};
    margin-left: 3px;
  }
`;

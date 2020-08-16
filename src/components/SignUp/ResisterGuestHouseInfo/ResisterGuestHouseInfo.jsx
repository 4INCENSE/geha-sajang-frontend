import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { addExtraService, deleteExtraService } from '@/redux/actions/extraServiceAction';

import { checkDuplicate } from '@/lib/util/checkDuplicate';

import defaultPreviewImg from '@/img/default_preview_img.png';
import questionIcon from '@/img/icon/question.png';
import closeIcon from '@/img/icon/close_w.png';

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
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  margin: 0 0 40px 0;
`;

const ResisterSubTitle = styled.div`
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

const ResisterWrap = styled.div`
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

const InputButtonWrap = styled.div`
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
    border: 2px solid ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.point};
  }
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

const ResisterGuestHouseInfo = () => {
  const dispatch = useDispatch();
  const { extraServiceList } = useSelector((state) => state.resisterGuestHouseInfoReducer);

  const [currentImg, setCurrentImg] = useState(defaultPreviewImg);
  const [currentImgName, setCurrentImgName] = useState('파일을 업로드 해주세요');
  const [serviceInputValue, setServiceInputValue] = useState();
  const [serviceList, setServiceList] = useState([]);

  const serviceInput = React.createRef();

  useEffect(() => {
    setServiceList(extraServiceList);
  }, [extraServiceList]);

  const uploadImage = (e) => {
    if (!e.target.files[0]) return;
    setCurrentImg(URL.createObjectURL(e.target.files[0]));
    setCurrentImgName(e.target.files[0].name);
    console.log(e.target.files[0]);

    // formData 생성은 currentImg를 통해서 나중에 하기
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
    setCurrentImg(defaultPreviewImg);
    setCurrentImgName('파일을 업로드 해주세요');
  };

  const addServiceButtonClickHandler = () => {
    if (!serviceInputValue) return alert('서비스 이름을 입력해주세요!');
    if (checkDuplicate(serviceList, serviceInputValue)) return alert('이미 추가된 서비스입니다.');
    dispatch(addExtraService(serviceInputValue));
    serviceInput.current.value = '';
    setServiceInputValue();
  };

  const deleteServiceButtonClickHandler = (e) => {
    const clickedServiceTitle = e.target.closest('div').firstChild.data;
    dispatch(deleteExtraService(clickedServiceTitle));
  };

  const serviceInputEnterKeyPressHandler = (e) => {
    if (e.keyCode === 13) addServiceButtonClickHandler();
  };

  return (
    <ContentWrap>
      <ResisterTitle>게스트하우스 정보 등록</ResisterTitle>
      <ResisterSubTitle>
        <span>게스트하우스 정보 등록</span> ▶ 방 정보 등록 ▶ 침대 정보 등록
      </ResisterSubTitle>
      <ResisterWrap>
        <InputWrap>
          <InputTitle>
            게스트하우스 이름<span> ●</span>
          </InputTitle>
          <Input />
        </InputWrap>
        <InputWrap>
          <InputTitle>게스트하우스 대표이미지</InputTitle>
          <InputButtonWrap>
            <UploadButton htmlFor="file">업로드</UploadButton>
            <UploadImgValue>{currentImgName}</UploadImgValue>
            <InputButton onClick={deleteImage}>삭제</InputButton>
            <input
              style={{ position: 'absolute', width: '0', height: '0' }}
              id="file"
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={uploadImage}
            />
          </InputButtonWrap>
          <PreviewWrap>
            <Preview src={currentImg} />
          </PreviewWrap>
        </InputWrap>
        <InputWrap>
          <InputTitle>
            대표 전화번호<span> ●</span>
          </InputTitle>
          <Input type="number" maxlength="11" placeholder="'-'없이 입력해주세요." />
        </InputWrap>
        <InputWrap>
          <InputTitle>
            게스트하우스 추가 제공 서비스
            <QuestionMarkIcon>
              <img src={questionIcon} />
              <div>
                - 게스트하우스 추가 제공 서비스란?
                <br />
                '픽업', '저녁식사', '장비대여' 등 게스트하우스별 게스트에게 추가적으로 제공하는 서비스를 말합니다.
                <br /> 추가 제공 서비스를 등록해두면 게스트의 서비스 이용 여부를 기록하고 관리할 수 있습니다.
                <br /> 추가 제공 서비스는 회원가입 후, '게스트하우스 설정'에서도 추가,수정 가능합니다.
              </div>
            </QuestionMarkIcon>
          </InputTitle>
          <InputButtonWrap>
            <Input
              ref={serviceInput}
              onChange={(e) => setServiceInputValue(e.target.value)}
              onKeyDown={serviceInputEnterKeyPressHandler}
              placeholder="ex. 픽업, 저녁식사, 장비대여…"
            />
            <InputButton onClick={addServiceButtonClickHandler}>추가</InputButton>
          </InputButtonWrap>
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
      </ResisterWrap>
    </ContentWrap>
  );
};

export default ResisterGuestHouseInfo;

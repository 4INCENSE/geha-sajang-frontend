import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import {
  numberWithCommas,
  removeChar,
  calculateAvailableStringLength,
  checkIsOnlyBlank
} from '@/common/lib/util/inputUtils';
import {
  increaseCapacity,
  decreaseCapacity,
  setCapacity,
  increaseMaxCapacity,
  decreaseMaxCapacity,
  setMaxCapacity
} from '@/redux/Registration/actions/roomCapacityAction';
import { addRoom } from '@/redux/Registration/actions/roomListAction';

import TitleInput from '@/components/UIComponents/Input/TitleInput';
import Input from '@/components/UIComponents/Input/Input';
import BlackButton from '@/components/UIComponents/Button/BlackButton';
import BlueInputButton from '@/components/UIComponents/Button/BlueInputButton';


const RoomInfo = ({ display }) => {
  const dispatch = useDispatch();
  const { roomCapacity, roomMaxCapacity, roomList } = useSelector((state) => state.registerGuestHouseReducer);

  const descriptionLimitLength = 200;

  const [addMessage, setAddMessage] = useState();
  const [addMessageDisplay, setAddMessageDisplay] = useState('none');
  const [nameValue, setNameValue] = useState('');
  const [priceValue, setPriceValue] = useState('0');
  const [capacityValue, setCapacityValue] = useState(roomCapacity);
  const [maxCapacityValue, setMaxCapacityValue] = useState(roomMaxCapacity);
  const [availableDescriptionLength, setAvailableDescriptionLength] = useState(descriptionLimitLength);
  const [descriptionValue, setDescriptionValue] = useState();

  const nameInput = React.createRef();
  const priceInput = React.createRef();
  const typeSelect = React.createRef();

  useEffect(() => {
    setCapacityValue(roomCapacity);
    setMaxCapacityValue(roomMaxCapacity);
  }, [roomCapacity, roomMaxCapacity]);

  useEffect(() => {}, [roomList]);

  const onChangeName = () => {
    const nameInputValue = nameInput.current.value;
    const nameLengthLimit = 25;
    if (nameValue.length >= nameLengthLimit) return;
    setNameValue(nameInputValue.substr(0, nameLengthLimit));
  };

  const validateRoomName = () => {
    const nameInputValue = nameInput.current.value;
    if (checkIsOnlyBlank(nameInputValue) || nameInputValue.length <= 0) return false;
    return true;
  };

  const validateRoomType = () => {
    if (!typeSelect.current.value) return false;
    return true;
  };

  const onFocusPrice = (e) => {
    if (priceValue === '0') e.target.value = '';
  };

  const onChangePrice = () => {
    const priceValueLength = priceInput.current.value.length;
    if (priceValueLength >= 10) return;
    const price = removeChar(priceInput.current.value);
    setPriceValue(numberWithCommas(price));
  };

  const onBlurPrice = (e) => {
    if (e.target.value == '') e.target.value = priceValue;
  };

  const validateCapacity = () => {
    if (roomCapacity <= 0) return false;

    return true;
  };

  const capacityIncreaseButtonClickHandler = () => {
    dispatch(increaseCapacity());
  };

  const capacityDecreaseButtonClickHandler = () => {
    dispatch(decreaseCapacity());
  };

  const maxCapacityIncreaseButtonClickHandler = () => {
    dispatch(increaseMaxCapacity());
  };

  const maxCapacityDecreaseButtonClickHandler = () => {
    dispatch(decreaseMaxCapacity());
  };

  const onBlurCapacity = (e) => {
    const value = Number(e.target.value);
    if (e.target.value.length === 0) return setCapacityValue(roomCapacity);
    if (value > 99 || value < 0) return setCapacityValue(roomCapacity);
    dispatch(setCapacity(value));
  };

  const onBlurMaxCapacity = (e) => {
    const value = Number(e.target.value);
    if (e.target.value.length === 0) return setMaxCapacityValue(roomMaxCapacity);
    if (value > 99 || value < 0) return setMaxCapacityValue(roomMaxCapacity);
    if (value < capacityValue) return setMaxCapacityValue(roomMaxCapacity);
    dispatch(setMaxCapacity(value));
  };

  const onChangeCapacity = (e) => {
    const value = removeChar(e.target.value);
    setCapacityValue(value);
  };

  const onChangeMaxCapacity = (e) => {
    const value = removeChar(e.target.value);
    setMaxCapacityValue(value);
  };

  const onChangeRoomDescription = (e) => {
    const description = e.target.value;
    const availableLength = calculateAvailableStringLength(description, descriptionLimitLength);
    availableLength <= 0 ? setAvailableDescriptionLength(0) : setAvailableDescriptionLength(availableLength);
    if (availableLength === 0) return;
    setDescriptionValue(description.substr(0, descriptionLimitLength));
  };

  const allInputInit = () => {
    setNameValue('');
    setDescriptionValue('');
    typeSelect.current.value = '';
    setPriceValue('0');
    setAvailableDescriptionLength(descriptionLimitLength);
  };

  const addButtonClickHandler = () => {
    if (!validateRoomType() || !validateRoomName() || !validateCapacity()) {
      setAddMessage('필수값을 전부 입력해주세요');
      setAddMessageDisplay('block');
      return;
    }
    setAddMessageDisplay('none');
    const roomData = {
      name: nameValue,
      memo: descriptionValue,
      roomType: typeSelect.current.value,
      maxCapacity: roomMaxCapacity,
      defaultCapacity: roomCapacity,
      peakAmount: '0',
      offPeakAmount: priceValue
    };
    dispatch(addRoom(roomData));
    allInputInit();
  };

  return (
    <ContentWrap style={{ display: display }}>
      <RegisterTitle>방 정보 등록</RegisterTitle>
      <RegisterSubTitle>
        게스트하우스 정보 등록 ▶ <span>방 정보 등록</span> ▶ 침대 정보 등록
      </RegisterSubTitle>
      <RegisterWrap>
        <AddRoomWrap>
          <AddRoomInfoWrap>
            <TitleInput
              title="방 이름"
              spanValue=" ●"
              titleFontSize="15px"
              inputWidth="270px"
              marginRight="10px"
              placeholder="ex.여성 도미토리 A (최대 25자)"
              refValue={nameInput}
              value={nameValue}
              onChange={onChangeName}
            />
            <SelectWrap>
              <Title>
                방 타입<span> ●</span>
              </Title>
              <RoomTypeSelect name="roomType" ref={typeSelect}>
                <option value="">선택</option>
                <option value="일인실">일인실</option>
                <option value="다인실">다인실</option>
                <option value="도미토리">도미토리</option>
              </RoomTypeSelect>
            </SelectWrap>
            <TitleInput
              title="1박 가격(₩)"
              titleFontSize="15px"
              inputWidth="130px"
              marginRight="10px"
              textAlign="right"
              value={priceValue}
              refValue={priceInput}
              onChange={onChangePrice}
              onFocus={onFocusPrice}
              onBlur={onBlurPrice}
            />
            <InputWrap>
              <Title>
                기본 인원<span> ●</span>
              </Title>
              <InputNumberButtonWrap>
                <NumberButton onClick={capacityDecreaseButtonClickHandler}>-</NumberButton>
                <Input
                  inputWidth="50px"
                  textAlign="center"
                  value={capacityValue}
                  onBlur={onBlurCapacity}
                  onChange={onChangeCapacity}
                />
                <NumberButton onClick={capacityIncreaseButtonClickHandler}>+</NumberButton>
              </InputNumberButtonWrap>
            </InputWrap>
            <InputWrap style={{ marginLeft: '10px' }}>
              <Title>최대 인원</Title>
              <InputNumberButtonWrap>
                <NumberButton onClick={maxCapacityDecreaseButtonClickHandler}>-</NumberButton>
                <Input
                  inputWidth="50px"
                  textAlign="center"
                  value={maxCapacityValue}
                  onBlur={onBlurMaxCapacity}
                  onChange={onChangeMaxCapacity}
                />
                <NumberButton onClick={maxCapacityIncreaseButtonClickHandler}>+</NumberButton>
              </InputNumberButtonWrap>
            </InputWrap>
          </AddRoomInfoWrap>
          <AddRoomInfoWrap>
            <InputWrap>
              <Title>방 설명</Title>
              <Description onChange={onChangeRoomDescription} value={descriptionValue} />
              <AvailableLength>{availableDescriptionLength}</AvailableLength>
              <InputMessage style={{ display: addMessageDisplay }}>{addMessage}</InputMessage>
            </InputWrap>
            <BlueInputButton title="추가" width="100px" margin="0 0 10px 10px" onClick={addButtonClickHandler} />
          </AddRoomInfoWrap>
        </AddRoomWrap>
        <RoomListInfo>총 {roomList.length}개</RoomListInfo>
        <RoomListWrap>
          {roomList.map((room, index) => {
            return (
              <RoomWrap key={index}>
                <RoomMenuButtonWrap>
                  <RoomMenuButton>수정</RoomMenuButton>
                  <RoomMenuButton onClick={() => roomDeleteButtonClickHandler(room.name, index)}>삭제</RoomMenuButton>
                </RoomMenuButtonWrap>
                <RoomInfoWrap>
                  <RoomName>{room.name}</RoomName>
                  <RoomCapacityType>
                    {room.roomType} {room.defaultCapacity}인
                  </RoomCapacityType>
                  <RoomMaxCapacity>(최대 {room.maxCapacity}인)</RoomMaxCapacity>
                  <RoomPrice>{room.offPeakAmount}₩</RoomPrice>
                </RoomInfoWrap>
                <RoomDescription>{room.memo}</RoomDescription>
              </RoomWrap>
            );
          })}
        </RoomListWrap>
        <BlackButton title="등록" margin="50px 0 0 0 " onClick={addButtonClickHandler} />
      </RegisterWrap>
    </ContentWrap>
  );
};

export default RoomInfo;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 950px;
  border: 0.5px solid #b3b3b3;
  padding: 60px;
`;

const AddRoomWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 870px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.05);
  padding: 30px 20px 20px 20px;
`;

const AddRoomInfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 10px;
`;
const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  padding: 0 0 10px 0;
`;

const RoomTypeSelect = styled.select`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point};
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 15px;
  color: ${({ theme }) => theme.color.darkGray};
  padding-left: 5px;
  margin-bottom: 10px;
  span {
    color: ${({ theme }) => theme.color.point};
    margin-left: 3px;
  }
`;

const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

const InputNumberButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
`;

const NumberButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background: white;
  border: 2px solid ${({ theme }) => theme.color.gray};
  border-radius: 25px;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.color.gray};
  &:hover {
    border: 2px solid ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.point};
  }
`;

const Description = styled.textarea`
  width: 100%;
  min-height: 70px;
  max-height: 200px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  margin: 2px 10px 0 0;
  padding: 15px;
  font-size: 14px;
  resize: vertical;
  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point};
  }
`;
const InputMessage = styled.div`
  position: absolute;
  bottom: -25px;
  left: 0;
  display: flex;
  width: 300px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.point};
  padding: 10px 5px 0px 5px;
`;

const AvailableLength = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0;
  width: 100%;
  font-size: 12px;
  font-family: 'Eoe_Zno_L';
  color: ${({ theme }) => theme.color.darkGray};
  padding: 10px;
  text-align: right;
`;

const RoomListInfo = styled.div`
  width: 870px;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Eoe_Zno_L';
  color: ${({ theme }) => theme.color.darkGray};
  padding: 10px;
  text-align: left;
  margin-top: 25px;
`;

const RoomListWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 870px;
  height: 400px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 3px;
  padding: 15px 0;
  margin-top: 5px;
`;

const RoomWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 820px;
  max-height: 120px;
  border-radius: 5px;
  border: solid 2px ${({ theme }) => theme.color.lightGray};
  background: white;
  padding: 10px 20px;
  margin-bottom: 10px;
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const RoomMenuButtonWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 5px;
`;

const RoomMenuButton = styled.button`
  font-family: 'Eoe_Zno_L';
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray};
  outline: 0;
  border: 0;
  margin-left: -5px;
  &:hover {
    color: ${({ theme }) => theme.color.point};
  }
`;

const RoomInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const RoomName = styled.span`
  font-family: 'Eoe_Zno_L';
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkGray};
  margin-right: 5px;
`;
const RoomCapacityType = styled.span`
  font-family: 'S-CoreDream-4Regular';
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.point};
  margin-right: 5px;
`;
const RoomMaxCapacity = styled.span`
  font-family: 'S-CoreDream-4Regular';
  font-size: 11px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkGray};
  margin-right: 5px;
`;
const RoomPrice = styled.span`
  font-family: 'Eoe_Zno_L';
  font-size: 13px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkGray};
`;
const RoomDescription = styled.span`
  font-family: 'S-CoreDream-2ExtraLight';
  font-size: 13px;
  line-height: 17px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkGray};
  margin: 8px 0px;
`;

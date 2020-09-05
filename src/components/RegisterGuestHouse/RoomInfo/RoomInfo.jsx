import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TitleInput from '@/components/UIComponents/Input/TitleInput';
import Input from '@/components/UIComponents/Input/Input';
import BlackButton from '@/components/UIComponents/Button/BlackButton';

const RoomInfo = ({ display }) => {
  return (
    <ContentWrap style={{ display: display }}>
      <RegisterTitle>방 정보 등록</RegisterTitle>
      <RegisterSubTitle>
        게스트하우스 정보 등록 ▶ <span>방 정보 등록</span> ▶ 침대 정보 등록
      </RegisterSubTitle>
      <RegisterWrap>
        <AddRoomWrap>
          <TitleInput
            title="방 이름"
            spanValue=" ●"
            titleFontSize="15px"
            inputWidth="270px"
            marginRight="10px"
            marginBottom="10px"
          />
          <AddRoomInfoWrap>
            <SelectWrap>
              <Title>
                방 타입<span> ●</span>
              </Title>
              <RoomTypeSelect name="roomType">
                <option value="">선택</option>
                <option value="일인실">일인실</option>
                <option value="다인실">다인실</option>
                <option value="도미토리">도미토리</option>
              </RoomTypeSelect>
            </SelectWrap>
            <TitleInput
              title="1박 가격(₩)"
              spanValue=" ●"
              titleFontSize="15px"
              inputWidth="130px"
              marginRight="10px"
              textAlign="right"
            />
          </AddRoomInfoWrap>
          <AddRoomInfoWrap>
            <InputWrap>
              <Title>
                인원<span> ●</span>
              </Title>
              <InputNumberButtonWrap>
                <NumberButton>-</NumberButton>
                <Input inputWidth="50px" textAlign="center" />
                <NumberButton>+</NumberButton>
              </InputNumberButtonWrap>
            </InputWrap>
            <InputWrap style={{ marginLeft: '10px' }}>
              <Title>최대 인원</Title>
              <InputNumberButtonWrap>
                <NumberButton>-</NumberButton>
                <Input inputWidth="50px" textAlign="center" />
                <NumberButton>+</NumberButton>
              </InputNumberButtonWrap>
            </InputWrap>
          </AddRoomInfoWrap>
          <InputWrap>
            <Title>방 설명</Title>
            <Description />
          </InputWrap>
          <BlackButton title="추가" width="300px" height="50px" titleSize="15px" />
        </AddRoomWrap>
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 830px;
  border: 0.5px solid #b3b3b3;
  padding: 60px;
`;

const AddRoomWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.05);
  padding: 30px 20px;
`;

const AddRoomInfoWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 270px;
  margin-bottom: 20px;
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
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const InputNumberButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
`;

const NumberButton = styled.button`
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
  min-height: 80px;
  max-height: 200px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  margin-top: 2px;
  padding: 15px;
  font-size: 14px;
  resize: vertical;
  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point};
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';

import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'moment/locale/ko';

import Header from '@/components/Header/Header';
import InputTitle from '@/components/UIComponents/InputTitle/InputTitle';
import TitleInput from '@/components/UIComponents/Input/TitleInput';

const AddReservation = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);

    if (focusedInput === 'endDate') {
      setFocusedInput('startDate');
    }
  };

  const isDayBlocked = () => {};

  return (
    <>
      <Header />
      <Wrap>
        <Title>예약 일정 등록</Title>
        <ReservationWrap>
          <ReservationContentWrap>
            <ItemWrap>
              <InputTitle title="체크인" margin="0 0 15px 0" />
              <SelectedInfo>2020 / 09 / 24 </SelectedInfo>
            </ItemWrap>
            <ItemWrap>
              <InputTitle title="체크아웃" margin="0 0 15px 0" />
              <SelectedInfo>2020 / 09 / 26 (총 2박)</SelectedInfo>
            </ItemWrap>
            <ItemWrap>
              <InputTitle title="방이름" margin="0 0 15px 0" />
              <SelectedInfo>여성 도미토리 A, 남성 도미토리 A</SelectedInfo>
            </ItemWrap>
            <ItemWrap>
              <InputTitle title="숙박인원" spanValue=" ●" margin="15px 0 10px 0" />
              <SetPersonnelWrap>
                <SetNumber
                  title="남"
                  titleMargin="0 -10px 1px 0"
                  titleFontWeight="bold"
                  inputWidth="50px"
                  titleFontSize="16px"
                  readOnlyType="true"
                  inputValue={male}
                  flexDirection="row"
                  onClickIncreaseButton={maleIncreaseButtonClickHandler}
                  onClickDecreaseButton={maleDecreaseButtonClickHandler}
                />
                <SetNumber
                  title="여"
                  titleFontWeight="bold"
                  titleMargin="0 -10px 1px 0"
                  inputWidth="50px"
                  titleFontSize="16px"
                  readOnlyType="true"
                  inputValue={female}
                  flexDirection="row"
                  onClickIncreaseButton={femaleIncreaseButtonClickHandler}
                  onClickDecreaseButton={femaleDecreaseButtonClickHandler}
                />
                <Total onClick={totalPersonnelClickHandler}>{male + female} 명</Total>
              </SetPersonnelWrap>
            </ItemWrap>
            <TitleButtonInput
              title="예약자명"
              spanValue=" ●"
              buttonTitle="검색"
              inputWidth="213px"
              margin="0 0 10px 0"
            />
            <TitleInput title="전화번호" spanValue=" ●" inputWidth="270px" margin="0 0 10px 0" />

            <ItemWrap>
              <InputTitle title="예약 메모" />
              <Description></Description>
            </ItemWrap>
          </ReservationContentWrap>
          <ReservationContentWrap style={{ borderRight: 'none' }}>
            <ItemWrap>
              <InputTitle title="추가제공서비스" />
            </ItemWrap>
            <ServiceWrap>
              <ServiceDateWrap>
                <DateInfo>
                  9월 24일 <AddServiceButton>+</AddServiceButton>
                </DateInfo>
                <ServiceContentWrap>
                  <ServiceInfoWrap>
                    <ServiceName>
                      저녁식사 <ServiceAttendPersonnel>3</ServiceAttendPersonnel>
                    </ServiceName>
                  </ServiceInfoWrap>
                  <ServiceMemo>
                    → 늦게 참여, 제주공항 20시 이후 도착. 여기까지 오려면 한두시간 걸리니까 거의 열시이후에 도착
                  </ServiceMemo>
                </ServiceContentWrap>
                <ServiceContentWrap>
                  <ServiceInfoWrap>
                    <ServiceName>
                      아침식사아침식사아침식사아침식사아침식사아침식사아
                      <ServiceAttendPersonnel>1</ServiceAttendPersonnel>
                    </ServiceName>
                  </ServiceInfoWrap>
                  {/* <ServiceMemo>→ 전복죽</ServiceMemo> */}
                </ServiceContentWrap>
                <ServiceContentWrap>
                  <ServiceInfoWrap>
                    <ServiceName>
                      장비대여<ServiceAttendPersonnel>3</ServiceAttendPersonnel>
                    </ServiceName>
                  </ServiceInfoWrap>
                  <ServiceMemo>→ S,M,M</ServiceMemo>
                </ServiceContentWrap>
              </ServiceDateWrap>
              <ServiceDateWrap>
                <DateInfo>
                  9월 25일<AddServiceButton>+</AddServiceButton>
                </DateInfo>
              </ServiceDateWrap>
              <ServiceDateWrap>
                <DateInfo>
                  9월 26일<AddServiceButton>+</AddServiceButton>
                </DateInfo>
              </ServiceDateWrap>
              <ServiceDateWrap>
                <DateInfo>
                  9월 26일<AddServiceButton>+</AddServiceButton>
                </DateInfo>
              </ServiceDateWrap>
            </ServiceWrap>
          </ReservationContentWrap>
        </ReservationWrap>
      </Wrap>
    </>
  );
};

export default AddReservation;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 20px;
  overflow-x: hidden;
`;
const Title = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  margin: 0 0 40px 0;
`;

const ReservationWrap = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: space-around;
  border: 0.5px solid #b3b3b3;
  padding: 70px 20px;
`;

const ReservationContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 500px;
  border-right: solid 1px ${({ theme }) => theme.color.lightGray};
  @media only screen and (max-width: 1098px) {
    border: none;
  }
`;
const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  margin: 0 0 15px 0;
`;

const SetPersonnelWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 100%; */
  margin: 10px 0 10px 0;
  border: solid 1px ${({ theme }) => theme.color.lightGray};
  border-radius: 10px;
  padding: 10px;
`;

const Total = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  height: 100%;
  width: 30%;
  font-family: 'Eoe_Zno_L';
  font-size: 16px;
  border-left: 1px solid ${({ theme }) => theme.color.lightGray};
  background: rgba(0, 0, 0, 0.05);
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  &:hover {
    cursor: pointer;
  }
`;

const SelectedInfo = styled.div`
  color: ${({ theme }) => theme.color.darkPoint};
  line-height: 15px;
  font-size: 17px;
  padding: 0 5px;
`;
const Description = styled.textarea`
  width: 100%;
  min-height: 150px;
  max-height: 200px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  margin: 2px 10px 15px 0;
  padding: 15px;
  font-size: 15px;
  resize: vertical;
  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point};
  }
`;

const ServiceWrap = styled.div`
  max-width: 270px;
  height: 700px;
  overflow-y: auto;
  border: solid 1px ${({ theme }) => theme.color.gray};
  @media only screen and (max-width: 1098px) {
    height: 100%;
    overflow-y: visible;
  }
`;

const ServiceDateWrap = styled.div`
  width: 100%;
  min-height: 30px;
`;

const AddServiceButton = styled.button`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.color.darkGray};
  &:hover {
    cursor: pointer;
  }
`;

const DateInfo = styled.div`
  position: relative;
  font-family: 'Eoe_Zno_L';
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.darkGray};
  background: rgba(0, 0, 0, 0.05);
  /* border-top: solid 1px ${({ theme }) => theme.color.gray}; */
  border-bottom: solid 1px ${({ theme }) => theme.color.gray};
  padding: 10px;
  &:hover {
    color: white;
    background: ${({ theme }) => theme.color.point};
    cursor: pointer;
    ${AddServiceButton} {
      color: white;
    }
  }
`;

const ServiceInfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ServiceAttendPersonnel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 12px;
  color: white;
  min-width: 17px;
  height: 17px;
  background: ${({ theme }) => theme.color.point};
  margin: 0 0 0 5px;
`;

const ServiceMemo = styled.div`
  margin: 7px 0 0 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.darkGray};
  line-height: 17px;
`;

const ServiceName = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 15px;
  border: solid 2px ${({ theme }) => theme.color.gray};
  padding: 8px 10px 8px 12px;
  font-family: 'Eoe_Zno_L';
  font-size: 13px;
  line-height: 15px;
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
`;

const ServiceContentWrap = styled.div`
  padding: 10px;
  border-bottom: solid 1px ${({ theme }) => theme.color.gray};

  &:hover {
    cursor: pointer;
    ${ServiceName} {
      border: solid 2px ${({ theme }) => theme.color.point};
    }
    ${ServiceMemo} {
      color: ${({ theme }) => theme.color.point};
    }
  }
`;

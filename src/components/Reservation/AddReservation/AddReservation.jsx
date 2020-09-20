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
            <InputTitle title="숙박일" />
            <DateRangePicker
              startDate={startDate}
              endDate={endDate}
              startDateId="start-date"
              endDateId="end-date"
              onDatesChange={handleDatesChange}
              focusedInput={focusedInput}
              onFocusChange={(focusedInput) => {
                setFocusedInput(focusedInput);
              }}
              readOnly
              calendarInfo="false"
              isDayBlocked={isDayBlocked}
              startDatePlaceholderText="체크인"
              endDatePlaceholderText="체크아웃"
              hideKeyboardShortcutsPanel
              daysInfo
            />
            <TitleInput title="인원" margin="15px 0" inputWidth="270px" />
          </ReservationContentWrap>
          <ReservationContentWrap>2</ReservationContentWrap>
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
  align-items: center;
  justify-content: space-around;
  border: 0.5px solid #b3b3b3;
  padding: 30px 20px;
`;

const ReservationContentWrap = styled.div`
  width: 500px;
  height: 700px;
  padding: 20px;
`;

const DateWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

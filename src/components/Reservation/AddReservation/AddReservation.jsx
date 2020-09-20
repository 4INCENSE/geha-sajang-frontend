import React, { useState } from 'react';
import styled from 'styled-components';


import Header from '@/components/Header/Header';
const AddReservation = () => {

  return (
    <>
      <Header />
      <Wrap>
        <Title>예약 일정 등록</Title>
        <ReservationWrap>
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

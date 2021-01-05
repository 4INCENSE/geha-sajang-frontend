import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { inProgress, unregistered, registered, staff } from '@/common/constants/registerState';

import Header from '@/components/Header/Header';

import BlueInputButton from '@/components/UIComponents/Button/BlueInputButton';

const Main = () => {
  const history = useHistory();
  const registerState = localStorage.getItem('registerState');

  if (registerState === unregistered || registerState === inProgress) {
    history.replace('/registerGuestHouse');
  }

  const addReservationButtonClickHandler = () => {
    history.push('/addReservation');
  };

  return (
    <>
      <Header />
      <Wrap>
        <BlueInputButton title="예약등록" width="130px" onClick={addReservationButtonClickHandler} />
      </Wrap>
    </>
  );
};

export default Main;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 730px;
`;

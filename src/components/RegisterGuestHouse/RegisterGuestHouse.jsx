import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { inProgress, unregistered, registered, staff } from '@/common/constants/registerState';

import Header from '@/components/Header/Header';
import SelectRegistrationType from '@/components/RegisterGuestHouse/SelectRegistrationType/SelectRegistrationType';
import RegisterGuestHouseInfo from '@/components/RegisterGuestHouse/GuestHouseInfo/GuestHouseInfo';
import RegisterRegisteredGuestHouse from '@/components/RegisterGuestHouse/RegisteredGuesthouse/RegisteredGuesthouse';
import RoomInfo from '@/components/RegisterGuestHouse/RoomInfo/RoomInfo';

const RegisterGuestHouse = () => {
  const history = useHistory();

  const [selectRegistrationTypeDisplay, setSelectRegistrationTypeDisplay] = useState('flex');
  const [guestHouseInfoDisplay, setGuestHouseInfoDisplay] = useState('none');
  const [registeredGuestHouseDisplay, setRegisteredGuestHouseDisplay] = useState('none');
  const [roomInfoDisplay, setRoomInfoDisplay] = useState('none');

  const registerState = localStorage.getItem('registerState');

  useEffect(() => {
    if (registerState === registered || registerState === staff) history.replace('/');
    if (registerState === inProgress) goToRegisterRoomInfo();
  }, [registerState]);

  const goToRegisterGuestHouseInfo = () => {
    setSelectRegistrationTypeDisplay('none');
    setGuestHouseInfoDisplay('flex');
    setRegisteredGuestHouseDisplay('none');
    setRoomInfoDisplay('none');
  };

  const goToRegisterRegisteredGuestHouse = () => {
    setSelectRegistrationTypeDisplay('none');
    setRegisterGuestHouseInfoDisplay('none');
    setRegisteredGuestHouseDisplay('flex');
    setRoomInfoDisplay('none');
  };

  const goToRegisterRoomInfo = () => {
    setSelectRegistrationTypeDisplay('none');
    setGuestHouseInfoDisplay('none');
    setRegisteredGuestHouseDisplay('none');
    setRoomInfoDisplay('flex');
  };

  if (registerState === registered || registerState === staff) return <></>;
  return (
    <Wrap>
      <Header />
      <SelectRegistrationType
        display={selectRegistrationTypeDisplay}
        registerGuestHouseInfoButton={goToRegisterGuestHouseInfo}
        registeredGuestHouseButton={goToRegisterRegisteredGuestHouse}
      />
      <RegisterGuestHouseInfo display={guestHouseInfoDisplay} nextButton={goToRegisterRoomInfo} />
      <RegisterRegisteredGuestHouse display={registeredGuestHouseDisplay} nextButton={goToRegisterRoomInfo} />
      <RoomInfo display={roomInfoDisplay} />
    </Wrap>
  );
};

export default RegisterGuestHouse;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

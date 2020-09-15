import React, { useState } from 'react';
import styled from 'styled-components';

import { inProgress, unregistered } from '@/common/constants/registerState';

import Header from '@/components/Header/Header';
import SelectRegistrationType from '@/components/RegisterGuestHouse/SelectRegistrationType/SelectRegistrationType';
import RegisterGuestHouseInfo from '@/components/RegisterGuestHouse/GuestHouseInfo/GuestHouseInfo';
import RegisterRegisteredGuestHouse from '@/components/RegisterGuestHouse/RegisteredGuesthouse/RegisteredGuesthouse';
import RoomInfo from '@/components/RegisterGuestHouse/RoomInfo/RoomInfo';

const RegisterGuestHouse = () => {
  const registerState = localStorage.getItem('registerState');

  const [selectRegistrationTypeDisplay, setSelectRegistrationTypeDisplay] = useState('flex');
  const [guestHouseInfoDisplay, setGuestHouseInfoDisplay] = useState('none');
  const [registeredGuestHouseDisplay, setRegisteredGuestHouseDisplay] = useState('none');

  const [roomInfoDisplay, setRoomInfoDisplay] = useState('flex');

  const goToRegisterGuestHouseInfo = () => {
    setSelectRegistrationTypeDisplay('none');
    setGuestHouseInfoDisplay('flex');
    setRegisteredGuestHouseDisplay('none');
    setRoomInfoDisplay('none');
  };

  const goToRegisterRegisteredGuestHouse = () => {
    setSelectRegistrationTypeDisplay('none');
    setGuestHouseInfoDisplay('none');
    setRegisteredGuestHouseDisplay('flex');
    setRoomInfoDisplay('none');
  };

  const renderRegisterComponent = () => {
    switch (registerState) {
      case unregistered:
        return (
          <>
            <SelectRegistrationType
              display={selectRegistrationTypeDisplay}
              registerGuestHouseInfoButton={goToRegisterGuestHouseInfo}
              registeredGuestHouseButton={goToRegisterRegisteredGuestHouse}
            />
            <RegisterGuestHouseInfo display={guestHouseInfoDisplay} />
            <RegisterRegisteredGuestHouse display={registeredGuestHouseDisplay} />
          </>
        );
      case inProgress:
        return <RoomInfo display={roomInfoDisplay} />;

      default:
        break;
    }
  };

  return (
    <Wrap>
      <Header />
      {renderRegisterComponent()}
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

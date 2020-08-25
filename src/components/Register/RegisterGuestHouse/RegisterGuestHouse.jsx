import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '@/components/Header/Header';
import SelectRegistrationType from '@/components/Register/RegisterGuestHouse/SelectRegistrationType/SelectRegistrationType';
import RegisterGuestHouseInfo from '@/components/Register/RegisterGuestHouse/RegisterGuestHouseInfo/RegisterGuestHouseInfo';
import RegisterRegisteredGuestHouse from '@/components/Register/RegisterGuestHouse/RegisterRegisteredGuestHouse/RegisterRegisteredGuestHouse';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

const RegisterGuestHouse = () => {
  const [selectRegistrationTypeDisplay, setSelectRegistrationTypeDisplay] = useState('flex');
  const [registerGuestHouseInfoDisplay, setRegisterGuestHouseInfoDisplay] = useState('none');
  const [registerRegisteredGuestHouseDisplay, setRegisterRegisteredGuestHouseDisplay] = useState('none');

  const goToRegisterGuestHouseInfo = () => {
    setSelectRegistrationTypeDisplay('none');
    setRegisterGuestHouseInfoDisplay('flex');
    setRegisterRegisteredGuestHouseDisplay('none');
  };

  const goToRegisterRegisteredGuestHouse = () => {
    setSelectRegistrationTypeDisplay('none');
    setRegisterGuestHouseInfoDisplay('none');
    setRegisterRegisteredGuestHouseDisplay('flex');
  };

  const goToRegisterRoomInfo = () => {
    setSelectRegistrationTypeDisplay('none');
    setRegisterGuestHouseInfoDisplay('none');
    setRegisterRegisteredGuestHouseDisplay('none');
  };

  return (
    <Wrap>
      <Header />
      <SelectRegistrationType
        display={selectRegistrationTypeDisplay}
        registerGuestHouseInfoButton={goToRegisterGuestHouseInfo}
        registeredGuestHouseButton={goToRegisterRegisteredGuestHouse}
      />
      <RegisterGuestHouseInfo display={registerGuestHouseInfoDisplay} nextButton={goToRegisterRoomInfo} />
      <RegisterRegisteredGuestHouse display={registerRegisteredGuestHouseDisplay} nextButton={goToRegisterRoomInfo} />
    </Wrap>
  );
};

export default RegisterGuestHouse;

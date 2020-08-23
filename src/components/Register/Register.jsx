import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '@/components/Header/Header';
import TermsAndConditions from '@/components/Register/TermsAndConditions/TermsAndConditions';
import SelectRegistrationType from '@/components/Register/SelectRegistrationType/SelectRegistrationType';
import RegisterGuestHouseInfo from '@/components/Register/RegisterGuestHouseInfo/RegisterGuestHouseInfo';
import RegisterRegisteredGuesthouse from '@/components/Register/RegisterRegisteredGuesthouse/RegisterRegisteredGuesthouse';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

const Register = () => {
  const [termsAndConditionDisplay, setTermsAndConditionDisplay] = useState('flex');
  const [selectRegistrationTypeDisplay, setSelectRegistrationTypeDisplay] = useState('none');
  const [registerHouseInfoDisplay, setRegisterHouseInfoDisplay] = useState('none');
  const [registerRegisteredGuesthouseDisplay, setRegisterRegisteredGuesthouseDisplay] = useState('none');

  const goToSelectRegistrationType = () => {
    setTermsAndConditionDisplay('none');
    setSelectRegistrationTypeDisplay('flex');
    setRegisterHouseInfoDisplay('none');
    setRegisterRegisteredGuesthouseDisplay('none');
  };

  const goToRegisterGuestHouseInfo = () => {
    setTermsAndConditionDisplay('none');
    setSelectRegistrationTypeDisplay('none');
    setRegisterHouseInfoDisplay('flex');
    setRegisterRegisteredGuesthouseDisplay('none');
  };

  const goToRegisterRegisteredGuestHouse = () => {
    setTermsAndConditionDisplay('none');
    setSelectRegistrationTypeDisplay('none');
    setRegisterHouseInfoDisplay('none');
    setRegisterRegisteredGuesthouseDisplay('flex');
  };

  const goToRegisterRoomInfo = () => {
    setTermsAndConditionDisplay('none');
    setSelectRegistrationTypeDisplay('none');
    setRegisterHouseInfoDisplay('none');
    setRegisterRegisteredGuesthouseDisplay('none');
  };

  return (
    <Wrap>
      <Header />
      <TermsAndConditions display={termsAndConditionDisplay} nextButton={goToSelectRegistrationType} />
      <SelectRegistrationType
        display={selectRegistrationTypeDisplay}
        registerGuestHouseInfoButton={goToRegisterGuestHouseInfo}
        registeredGuestHouseButton={goToRegisterRegisteredGuestHouse}
      />
      <RegisterGuestHouseInfo display={registerHouseInfoDisplay} nextButton={goToRegisterRoomInfo} />
      <RegisterRegisteredGuesthouse display={registerRegisteredGuesthouseDisplay} nextButton={goToRegisterRoomInfo} />
    </Wrap>
  );
};

export default Register;

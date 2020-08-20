import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '@/components/Header/Header';
import TermsAndConditions from '@/components/Register/TermsAndConditions/TermsAndConditions';
import SelectRegistrationType from '@/components/Register/SelectRegistrationType/SelectRegistrationType';
import RegisterGuestHouseInfo from '@/components/Register/RegisterGuestHouseInfo/RegisterGuestHouseInfo';

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

  const termsAndConditionButtonClickHandler = () => {
    setTermsAndConditionDisplay('none');
    setSelectRegistrationTypeDisplay('flex');
    setRegisterHouseInfoDisplay('none');
  };

  const selectRegistrationTypeButtonClickHandler = () => {
    setTermsAndConditionDisplay('none');
    setSelectRegistrationTypeDisplay('none');
    setRegisterHouseInfoDisplay('flex');
  };

  const registerHouseInfoButtonClickHandler = () => {
    setTermsAndConditionDisplay('none');
    setSelectRegistrationTypeDisplay('none');
    setRegisterHouseInfoDisplay('none');
  };

  return (
    <Wrap>
      <Header />
      <TermsAndConditions display={termsAndConditionDisplay} nextButton={termsAndConditionButtonClickHandler} />
      <SelectRegistrationType
        display={selectRegistrationTypeDisplay}
        nextButton={selectRegistrationTypeButtonClickHandler}
      />
      <RegisterGuestHouseInfo display={registerHouseInfoDisplay} nextButton={registerHouseInfoButtonClickHandler} />
    </Wrap>
  );
};

export default Register;

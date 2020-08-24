import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '@/components/Header/Header';
import CreateAccount from '@/components/Register/CreateAccount/CreateAccount';
import TermsAndConditions from '@/components/Register/CreateAccount/TermsAndConditions/TermsAndConditions';

const Register = () => {
  const [TermsAndConditionsDisplay, setTermsAndConditionsDisplay] = useState('flex');
  const [CreateAccountDisplay, setCreateAccountDisplay] = useState('none');

  const nextButtonClickHandler = () => {
    setTermsAndConditionsDisplay('none');
    setCreateAccountDisplay('flex');
  };

  return (
    <Wrap>
      <Header />
      <TermsAndConditions display={TermsAndConditionsDisplay} nextButtonClickHandler={nextButtonClickHandler} />
      <CreateAccount display={CreateAccountDisplay} />
    </Wrap>
  );
};

export default Register;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

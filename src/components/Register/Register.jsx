import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header/Header';
import RegisterGuestHouseInfo from '@/components/Register/RegisterGuestHouseInfo/RegisterGuestHouseInfo';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

const Register = () => {
  return (
    <Wrap>
      <Header />
      <RegisterGuestHouseInfo />
    </Wrap>
  );
};

export default Register;

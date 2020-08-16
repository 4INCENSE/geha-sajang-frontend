import React from 'react';
import styled from 'styled-components';

import Header from '@/components/Header/Header';
import ResisterGuestHouseInfo from '@/components/SignUp/ResisterGuestHouseInfo/ResisterGuestHouseInfo';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

const SignUp = () => {
  return (
    <Wrap>
      <Header />
      <ResisterGuestHouseInfo />
    </Wrap>
  );
};

export default SignUp;

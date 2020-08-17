import React from 'react';
import styled from 'styled-components';

import logo from '@/img/Logo/logo.png';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 25px;
  background: black;
`;

const ServiceLogo = styled.img`
  height: 60px;
`;

const Header = () => {
  return (
    <Wrap>
      <ServiceLogo src={logo} />
    </Wrap>
  );
};

export default Header;

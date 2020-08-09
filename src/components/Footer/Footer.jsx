import React from 'react';
import styled from 'styled-components';
import teamLogo from '@/img/4INCENSE.png';

const FooterWrap = styled.div`
  width: 100%;
  height: 150px;
  background: ${({ theme }) => theme.color.lightGray};
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items : center;
  width: 100%;
  height: 100%;
  padding : 50px 50px ;
`;
const TeamLogo = styled.img`
  width: 100px;
  top: 30px;
  left: 50px;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <ContentWrap>
        <TeamLogo src={teamLogo} />
      </ContentWrap>
    </FooterWrap>
  );
};

export default Footer;

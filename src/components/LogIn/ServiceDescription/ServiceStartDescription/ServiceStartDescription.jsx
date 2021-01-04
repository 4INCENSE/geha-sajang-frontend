import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import logo from '@/img/logo/logo.png';
import computerEx from '@/img/descriptionImage/computerEx.png';
import mobileEx from '@/img/descriptionImage/mobileEx.png';

import { loginSlideWidth, mobileModeWidth } from '@/common/constants/responsiveWidth';

const ServiceStartDescription = () => {
  return (
    <Wrap>
      <Background>
        <HighlightCircle />
        <LogoWrap>
          <Logo src={logo} />
        </LogoWrap>
        <ImageWrap>
          <ComputerImage src={computerEx} />
          <MobileImage src={mobileEx} />
        </ImageWrap>
        <BackgroundCircle />
      </Background>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const appear = keyframes`
  from { opacity : 0}
  to { opacity : 1}
`;

const computerImageAppear = keyframes`
  from { transform : translateX(2500px)}
  to {  transform : translateX(0px)}
`;

const mobileImageAppear = keyframes`
   from { transform : translateX(2500px)}
  to {  transform : translateX(0px)}
`;

const biggerCircle = keyframes`
   from { 
    width: 0px;
    height: 0px;
    border-radius: 0px 0px 0px 0px;
   }
  to {  
    width: 3000px;
    height: 1500px;
    border-radius: 1500px 1500px 0px 0px;
  }
`;

const rotate = keyframes`
    from {
        transform : rotate(-5deg)
    }
    50%{
        transform : rotate(5deg)
    }
    to {
        transform : rotate(-5deg)

    }

`;

const highlightCircle = keyframes`
   from { 
    width: 0px;
    height: 0px;
    border-radius: 0px 0px 0px 0px;
   }
  to {  
    width: 1500px;
    height: 750px;
    border-radius: 750px 750px 0px 0px;
  }
`;
const Background = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
  animation: ${appear} 0.5s;
  @media only screen and (max-width: ${loginSlideWidth}) {
    flex-direction: column;
    height: 840px;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    min-height: 650px;
    height: auto;
  }
`;

const LogoWrap = styled.div`
  position: relative;
  width: 150px;
  z-index: 1;
  margin-bottom: 25px;
`;

const Logo = styled.img`
  width: 100%;
  &:hover {
    animation: ${rotate} 0.3s;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 95%;
  }
`;

const ComputerImage = styled.img`
  width: 450px;
  height: auto;
  animation: ${computerImageAppear} 1.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: backwards;
  z-index: 1;
  @media only screen and (max-width: ${loginSlideWidth}) {
    width: 400px;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 75%;
  }
`;

const MobileImage = styled.img`
  width: 200px;
  height: auto;
  margin-left: -50px;
  margin-bottom: -50px;
  margin-top: 30px;
  animation: ${mobileImageAppear} 1.5s;
  animation-delay: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: backwards;
  z-index: 1;
  @media only screen and (max-width: ${loginSlideWidth}) {
    width: 150px;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 35%;
    margin-left: -20%;
    margin-bottom: -10%;
  }
`;

const HighlightCircle = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  animation: ${highlightCircle} 1s;
  animation-delay: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1;
  @media only screen and (max-width: ${mobileModeWidth}) {
    animation: none;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.point};
  animation: ${biggerCircle} 1s;
  animation-timing-function: cubic-bezier(0.791, 0.151, 0.003, 0.447);
  animation-fill-mode: backwards;
`;
/* animation-iteration-count: 4; */

export default ServiceStartDescription;

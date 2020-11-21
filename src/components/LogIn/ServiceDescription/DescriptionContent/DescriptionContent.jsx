import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { loginSlideWidth, mobileModeWidth } from '@/common/constants/responsiveWidth';

const DescriptionContent = ({ image, title, description, index }) => {
  const [isEvenIndex, setIsEvenIndex] = useState();

  const checkEven = (number) => {
    return number % 2 ? false : true;
  };

  useEffect(() => {
    setIsEvenIndex(checkEven(index));
  }, []);

  const backgroundStyle = !isEvenIndex ? { background: 'rgba(0,0,0,0.05)' } : {};

  return (
    <Wrap style={backgroundStyle}>
      {isEvenIndex ? (
        <DescriptionWrap right>
          <DescriptionImage right src={image} />
          <DescriptionTitleWrap right>
            <DescriptionTitle>{title}</DescriptionTitle>
            <Description>{description}</Description>
          </DescriptionTitleWrap>
        </DescriptionWrap>
      ) : (
        <DescriptionWrap left>
          <DescriptionTitleWrap left>
            <DescriptionTitle>{title}</DescriptionTitle>
            <Description>{description}</Description>
          </DescriptionTitleWrap>
          <DescriptionImage left src={image} />
        </DescriptionWrap>
      )}
    </Wrap>
  );
};

export default DescriptionContent;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
  @media only screen and (max-width: ${loginSlideWidth}) {
    flex-direction: column;
    height: auto;
    min-height: 650px;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    height: auto;
  }
`;

const DescriptionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px;
  @media only screen and (max-width: ${loginSlideWidth}) {
    ${(props) => {
      if (props.right) {
        return css`
          flex-direction: column;
        `;
      }
      if (props.left) {
        return css`
          flex-direction: column-reverse;
        `;
      }
    }};
  }
`;

const DescriptionImage = styled.img`
  width: 30%;
  min-width: 500px;
  @media only screen and (max-width: ${loginSlideWidth}) {
    width: 75%;
    min-width: 80%;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 90%;
    min-width: 90%;
  }
`;

const DescriptionTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 30px 0 0 0;
  padding: 30px 50px;
  word-break: keep-all;
  ${(props) => {
    if (props.right) {
      return css`
        align-items: flex-end;
        border-right: solid 15px ${({ theme }) => theme.color.darkGray};
        text-align: right;
      `;
    }
    if (props.left) {
      return css`
        align-items: flex-start;
        border-left: solid 15px ${({ theme }) => theme.color.darkGray};
        text-align: left;
      `;
    }
  }};

  @media only screen and (max-width: ${loginSlideWidth}) {
    width: 80%;
    align-items: center;
    text-align: left;
    border: none;
    padding: 10px;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    width: 90%;
  }
`;
const DescriptionTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-size: 35px;
  line-height: 50px;
  font-weight: bold;
  margin-bottom: 30px;
  padding: 0 15px;
  @media only screen and (max-width: ${loginSlideWidth}) {
    width: 100%;
    font-size: 30px;
    line-height: 45px;
    padding: 0;
  }
`;

const Description = styled.div`
  width: 80%;
  font-family: 'S-CoreDream-5Medium';
  font-size: 20px;
  line-height: 30px;
  @media only screen and (max-width: ${loginSlideWidth}) {
    width: 100%;
  }
  @media only screen and (max-width: ${mobileModeWidth}) {
    font-size: 15px;
    line-height: 25px;
  }
`;

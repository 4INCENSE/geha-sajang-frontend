import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import Header from '@/components/Header/Header';

import notFoundImage from '@/img/404.png';

const NotFound = () => {
  return (
    <>
      <Header />
      <Wrap>
        <NotFoundWrap>
          <NotFoundImageWrap>
            <img src={notFoundImage} />
            <NotFoundMessage>요청하신 페이지를 찾을 수 없습니다</NotFoundMessage>
          </NotFoundImageWrap>
        </NotFoundWrap>
      </Wrap>
    </>
  );
};

export default NotFound;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 780px;
`;

const NotFoundWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: black;
`;

const NotFoundImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    height: 450px;
  }
`;

const NotFoundMessage = styled.div`
  position: absolute;
  bottom: 80px;
  display: flex;
  justify-content: center;
  font-family: 'S-CoreDream-9Black';
  font-size: 40px;
  background: white;
  color: ${({ theme }) => theme.color.darkGray};
  padding: 25px 40px;
  border-radius: 45px;
`;

import React from 'react';
import styled from 'styled-components';

import loadingGIF from '@/img/gif/loadingIndicator.gif';

const LoadingIndicator = () => {
  return (
    <LoadingIndicatorWrap>
      <LoadingGIF src={loadingGIF} />
    </LoadingIndicatorWrap>
  );
};

export default LoadingIndicator;

const LoadingIndicatorWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  z-index: 2;
`;

const LoadingGIF = styled.img`
  width: 80px;
`;

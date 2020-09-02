import React, { useEffect } from 'react';
import styled from 'styled-components';

const EmptyComponent = () => {
  return <Wrap></Wrap>;
};

export default EmptyComponent;

const Wrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
`;

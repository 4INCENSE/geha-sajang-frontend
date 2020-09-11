import React from 'react';
import styled from 'styled-components';

const BlackButton = ({ width, height, title, titleSize, onClick, margin }) => {
  return (
    <ButtonComponent style={{ width: width, height: height, fontSize: titleSize, margin: margin }} onClick={onClick}>
      {title}
    </ButtonComponent>
  );
};

export default BlackButton;

const ButtonComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 60px;
  font-family: 'S-CoreDream-2ExtraLight';
  font-size: 17px;
  color: white;
  font-weight: bold;
  background: black;
  border-radius: 3px;
  padding: 20px 30px;
  margin-top: 20px;
  &:hover {
    background: ${({ theme }) => theme.color.point};
  }
`;

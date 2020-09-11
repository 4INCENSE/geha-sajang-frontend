import React from 'react';
import styled from 'styled-components';

const BlueInputButton = ({ width, title, onClick, margin }) => {
  return (
    <InputButtonComponent style={{ width: width, margin: margin }} onClick={onClick}>
      {title}
    </InputButtonComponent>
  );
};

export default BlueInputButton;

const InputButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Eoe_Zno_L';
  width: 50px;
  height: 40px;
  color: white;
  font-weight: bold;
  font-size: 13px;
  background: ${({ theme }) => theme.color.point};
  border-radius: 5px;
  border-radius: 5px;
  margin-left: 10px;
  &:hover {
    background: ${({ theme }) => theme.color.darkPoint};
  }
`;

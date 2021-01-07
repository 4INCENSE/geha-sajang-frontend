import React from 'react';
import styled from 'styled-components';

const InputButton = ({ width, title, onClick, margin }) => {
  return (
    <InputButtonComponent style={{ width: width, margin: margin }} onClick={onClick}>
      {title}
    </InputButtonComponent>
  );
};

export default InputButton;

const InputButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Eoe_Zno_L';
  width: 50px;
  height: 40px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  font-size: 13px;
  background: white;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.point};
  }
`;

import React from 'react';
import styled from 'styled-components';

const InputButton = ({ width, title, onClick }) => {
  return (
    <InputButtonComponent style={{ width: width }} onClick={onClick}>
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
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  border-radius: 5px;
  margin-left: 10px;
  &:hover {
    border: 2px solid ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.point};
  }
`;

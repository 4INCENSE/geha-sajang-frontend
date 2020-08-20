import React from 'react';
import styled from 'styled-components';

const Button = ({ width, title, onClick }) => {
  return (
    <RegisterButton style={{ width: width }} onClick={onClick}>
      {title}
    </RegisterButton>
  );
};

export default Button;

const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  font-family: 'S-CoreDream-2ExtraLight';
  font-size: 15px;
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

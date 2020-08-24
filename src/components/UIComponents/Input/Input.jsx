import React from 'react';
import styled from 'styled-components';

const Input = ({ inputWidth, refValue, placeholder, maxlength, onBlur, onKeyDown, onKeyUp }) => {
  return (
    <>
      <InputComponent
        style={{ width: inputWidth }}
        ref={refValue}
        placeholder={placeholder}
        maxlength={maxlength}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
      />
    </>
  );
};

export default Input;

const InputComponent = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  margin-top: 2px;
  padding: 15px;
  font-size: 16px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point};
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  -moz-appearance: textfield;
  ::placeholder {
    font-size: 13px;
  }
`;

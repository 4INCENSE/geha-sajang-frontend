import React from 'react';
import styled from 'styled-components';

import Input from '@/components/UIComponents/Input/Input';

const SetNumber = ({
  title,
  spanValue,
  onClickIncreaseButton,
  onClickDecreaseButton,
  inputWidth,
  margin,
  inputTextAlign,
  inputValue,
  onBlur,
  onChange
}) => {
  return (
    <InputWrap style={{ margin: margin }}>
      <Title>
        {title}
        <span>{spanValue}</span>
      </Title>
      <InputNumberButtonWrap>
        <NumberButton onClick={onClickDecreaseButton}>-</NumberButton>
        <Input
          inputWidth={inputWidth}
          textAlign={inputTextAlign}
          value={inputValue}
          onBlur={onBlur}
          onChange={onChange}
        />
        <NumberButton onClick={onClickIncreaseButton}>+</NumberButton>
      </InputNumberButtonWrap>
    </InputWrap>
  );
};

export default SetNumber;

const Title = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 15px;
  color: ${({ theme }) => theme.color.darkGray};
  padding-left: 5px;
  margin-bottom: 10px;
  span {
    color: ${({ theme }) => theme.color.point};
    margin-left: 3px;
  }
`;

const InputWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;
const InputNumberButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
`;

const NumberButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background: white;
  border: 2px solid ${({ theme }) => theme.color.gray};
  border-radius: 25px;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.color.gray};
  &:hover {
    border: 2px solid ${({ theme }) => theme.color.point};
    color: ${({ theme }) => theme.color.point};
  }
`;

const Description = styled.textarea`
  width: 100%;
  min-height: 70px;
  max-height: 200px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.lightGray};
  margin: 2px 10px 0 0;
  padding: 15px;
  font-size: 14px;
  resize: vertical;
  &:focus {
    outline: 0;
    box-shadow: 0 0 5px 2px ${({ theme }) => theme.color.point};
  }
`;

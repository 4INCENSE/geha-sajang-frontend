import React from 'react';
import styled from 'styled-components';

import Input from '@/components/UIComponents/Input/Input';
import InputTitle from '@/components/UIComponents/InputTitle/InputTitle';

const SetNumber = ({
  title,
  titleFontSize,
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
      <InputTitle title={title} spanValue={spanValue} fontSize={titleFontSize} />
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

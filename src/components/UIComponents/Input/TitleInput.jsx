import React from 'react';
import styled from 'styled-components';

import Input from '@/components/UIComponents/Input/Input';

const TitleInput = ({
  type,
  title,
  spanValue,
  messageDisplay,
  messageValue,
  inputWidth,
  refValue,
  placeholder,
  maxlength,
  onBlur,
  onKeyDown,
  onKeyUp
}) => {
  return (
    <InputWrap>
      <InputTitle>
        {title}
        <span>{spanValue}</span>
      </InputTitle>
      <Input
        type={type}
        inputWidth={inputWidth}
        refValue={refValue}
        placeholder={placeholder}
        maxlength={maxlength}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
      />
      <InputMessage style={{ display: messageDisplay }}>{messageValue}</InputMessage>
    </InputWrap>
  );
};

export default TitleInput;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const InputTitle = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  font-family: 'Eoe_Zno_L';
  font-weight: bold;
  font-size: 17px;
  color: ${({ theme }) => theme.color.darkGray};
  padding-left: 5px;
  margin-bottom: 10px;
  span {
    color: ${({ theme }) => theme.color.point};
    margin-left: 3px;
  }
`;

const InputMessage = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  color: ${({ theme }) => theme.color.point};
  padding: 10px 5px 0px 5px;
`;

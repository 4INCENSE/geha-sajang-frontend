import React from 'react';
import styled from 'styled-components';

import InputButton from '@/components/UIComponents/Button/InputButton';
import Input from '@/components/UIComponents/Input/Input';

const TitleButtonInput = ({
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
  onKeyUp,
  buttonWidth,
  buttonTitle,
  buttonOnClick
}) => {
  return (
    <InputWrap>
      <InputTitle>
        {title}
        <span>{spanValue}</span>
      </InputTitle>
      <InputButtonWrap>
        <Input
          inputWidth={inputWidth}
          refValue={refValue}
          placeholder={placeholder}
          maxlength={maxlength}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
        />
        <InputButton width={buttonWidth} title={buttonTitle} onClick={buttonOnClick} />
      </InputButtonWrap>
      <InputMessage style={{ display: messageDisplay }}>{messageValue}</InputMessage>
    </InputWrap>
  );
};

export default TitleButtonInput;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;
const InputButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

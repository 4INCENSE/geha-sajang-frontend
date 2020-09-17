import React from 'react';
import styled from 'styled-components';

import Input from '@/components/UIComponents/Input/Input';
import InputTitle from '@/components/UIComponents/InputTitle/InputTitle';

const TitleInput = ({
  type,
  title,
  spanValue,
  titleFontSize,
  messageDisplay,
  messageValue,
  inputWidth,
  marginRight,
  marginBottom,
  textAlign,
  refValue,
  placeholder,
  maxlength,
  onBlur,
  onKeyDown,
  onKeyUp,
  onChange,
  onFocus,
  value
}) => {
  return (
    <InputWrap style={{ marginBottom: marginBottom, width: inputWidth, marginRight: marginRight }}>
      <InputTitle title={title} fontSize={titleFontSize} spanValue={spanValue} />
      <Input
        type={type}
        inputWidth={inputWidth}
        textAlign={textAlign}
        refValue={refValue}
        placeholder={placeholder}
        maxlength={maxlength}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
      />
      <InputMessage style={{ display: messageDisplay }}>{messageValue}</InputMessage>
    </InputWrap>
  );
};

export default TitleInput;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputMessage = styled.div`
  display: flex;
  width: 100%;
  font-size: 13px;
  color: ${({ theme }) => theme.color.point};
  padding: 10px 5px 0px 5px;
`;

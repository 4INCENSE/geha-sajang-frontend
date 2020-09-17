import React from 'react';
import styled from 'styled-components';

const InputTitle = ({ title, fontSize, spanValue }) => {
  return (
    <Title style={{ fontSize: fontSize }}>
      {title} <span>{spanValue}</span>
    </Title>
  );
};

export default InputTitle;

const Title = styled.div`
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

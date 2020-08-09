import React, { useState } from 'react';
import styled from 'styled-components';

const SnsButton = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  margin-top: 15px;
`;

const SnsLogInWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SnsLogo = styled.img`
  width: 35px;
  margin: 0 10px 0 25px;
`;

const SnsTitle = styled.span`
  font-family: 'Eoe_Zno_L';
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray};
`;

const LogInButton = ({ title, color, logo, background, hover,logoHeight }) => {
  const [backgroundColor, setBackgroundColor] = useState(background);

  const setHoverColor=()=>{
    setBackgroundColor(hover)
  }

  const removeHoverColor=()=>{
    setBackgroundColor(background)
  }

  return (
    <SnsButton style={{ background: backgroundColor }} onMouseOver={setHoverColor} onMouseLeave={removeHoverColor}>
      <SnsLogInWrap>
        <SnsLogo style={{height :logoHeight}} src={logo} />
        <SnsTitle style={{color : color}}>{title}</SnsTitle>
      </SnsLogInWrap>
    </SnsButton>
  );
};

export default LogInButton;

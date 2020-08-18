import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const LogInButton = ({ title, color, logo, background, hover, logoWidth, logoHeight }) => {
  const history = useHistory();

  const [backgroundColor, setBackgroundColor] = useState(background);

  const setHoverColor = () => {
    setBackgroundColor(hover);
  };

  const removeHoverColor = () => {
    setBackgroundColor(background);
  };

  const moveToSignUp = () => {
    history.push('/signUp');
  };

  return (
    <SnsButton
      onClick={moveToSignUp}
      style={{ background: backgroundColor }}
      onMouseOver={setHoverColor}
      onMouseLeave={removeHoverColor}>
      <SnsLogInWrap>
        <SnsLogo>
          <LogoImg src={logo} style={{ width: logoWidth, height: logoHeight }} />
        </SnsLogo>
        <SnsTitle style={{ color: color }}>{title}</SnsTitle>
      </SnsLogInWrap>
    </SnsButton>
  );
};

export default LogInButton;

const SnsButton = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 2px;
  margin-top: 15px;
`;

const SnsLogInWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const SnsLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  margin: 0 10px 0 25px;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 37px;
`;

const SnsTitle = styled.span`
  font-family: 'Eoe_Zno_L';
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.darkGray};
`;

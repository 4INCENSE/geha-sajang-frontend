import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from '@/components/style/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html * {
    box-sizing: border-box;
    font-size: ${theme.fontSize.base};
    /* font-family: "Roboto", "Apple SD Gothic Neo", "Helvetica", "Arial", sans-serif; */
  }
  button {
    background: none;
    border: 0;
    outline : 0;
  }
  `;

const GlobalStyleProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

export default GlobalStyleProvider;

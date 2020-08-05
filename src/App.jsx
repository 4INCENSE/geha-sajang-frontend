import React from 'react';
import GlobalStyleProvider from '@/components/style/GlobalStyle';
import LogIn from '@/components/LogIn/LogIn';

const App = () => {
  return (
    <GlobalStyleProvider>
      <LogIn />
    </GlobalStyleProvider>
  );
};

export default App;

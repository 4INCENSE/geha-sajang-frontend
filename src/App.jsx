import React from 'react';
import GlobalStyleProvider from '@/components/style/GlobalStyle';
import LogIn from '@/components/LogIn/LogIn';
import Footer from '@/components/Footer/Footer';

const App = () => {
  return (
    <GlobalStyleProvider>
      <LogIn />
      <Footer/>
    </GlobalStyleProvider>
  );
};

export default App;

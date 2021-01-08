import React from 'react';
import GlobalStyleProvider from '@/components/style/GlobalStyle';

import Routing from '@/components/Routing/Routing';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '@/components/style/react_dates_overrides.css';

const App = () => {
  return (
    <GlobalStyleProvider>
      <Routing />
    </GlobalStyleProvider>
  );
};

export default App;

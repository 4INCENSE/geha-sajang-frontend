import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyleProvider from '@/components/style/GlobalStyle';
import LogIn from '@/components/LogIn/LogIn';
import Main from '@/components/Main/Main';
import SignUp from '@/components/SignUp/SignUp';
import Footer from '@/components/Footer/Footer';

const App = () => {
  return (
    <GlobalStyleProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </GlobalStyleProvider>
  );
};

export default App;

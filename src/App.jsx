import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyleProvider from '@/components/style/GlobalStyle';
import LogIn from '@/components/LogIn/LogIn';
import Main from '@/components/Main/Main';
import Register from '@/components/Register/Register';
import Footer from '@/components/Footer/Footer';

const App = () => {
  return (
    <GlobalStyleProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/register" component={Register} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </GlobalStyleProvider>
  );
};

export default App;

import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { isAuthenticated } from '@/common/lib/authorityCheck';

import GlobalStyleProvider from '@/components/style/GlobalStyle';
import RestrictRoute from '@/common/lib/util/RestrictRoute';
import Register from '@/components/Register/Register';
import RegisterGuestHouse from '@/components/RegisterGuestHouse/RegisterGuestHouse';
import LogIn from '@/components/LogIn/LogIn';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';
import NotFound from '@/components/NotFound/NotFound';

const goToMainPage = () => <Redirect to="/" />;
const goToLogInPage = () => <Redirect to="/logIn" />;

const App = () => {
  return (
    <GlobalStyleProvider>
      <BrowserRouter>
        <Switch>
          <RestrictRoute path="/" component={Main} fallback={goToLogInPage} exact isAllow={isAuthenticated()} />
          <RestrictRoute path="/logIn" component={LogIn} fallback={goToMainPage} isAllow={!isAuthenticated()} />
          <RestrictRoute path="/register" component={Register} fallback={goToMainPage} isAllow={!isAuthenticated()} />
          <RestrictRoute
            path="/registerGuestHouse"
            component={RegisterGuestHouse}
            fallback={goToLogInPage}
            isAllow={isAuthenticated()}
          />
          <Route path="/notFound" component={NotFound} />
          <Redirect path="*" to="/notFound" />
        </Switch>
      </BrowserRouter>
      <Footer />
    </GlobalStyleProvider>
  );
};

export default App;

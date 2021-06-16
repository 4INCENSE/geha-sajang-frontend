import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { isAuthenticated } from '@/common/lib/authorityCheck';
import { useHistory } from 'react-router-dom';

import RestrictRoute from '@/common/lib/RestrictRoute';
import Register from '@/components/Register/Register';
import RegisterGuestHouse from '@/components/RegisterGuestHouse/RegisterGuestHouse';
import LogIn from '@/components/LogIn/LogIn';
import Main from '@/components/Main/Main';
import Footer from '@/components/Footer/Footer';
import NotFound from '@/components/NotFound/NotFound';
import EmptyComponent from '@/components/EmptyComponent/EmptyComponent';
import AddReservation from '@/components/Reservation/AddReservation/AddReservation';

const Routing = () => {
  const goToLogInPage = () => {
    return <Redirect to="logIn" />;
  };

  const goToBeforePage = () => {
    alert('잘못된 접근입니다.\n이전페이지로 돌아갑니다.');
    useHistory().goBack();
    return <EmptyComponent />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <RestrictRoute path="/" component={Main} fallback={goToLogInPage} exact isAllow={isAuthenticated} />
        <RestrictRoute
          path="/logIn"
          component={LogIn}
          fallback={goToBeforePage}
          exact
          isAllow={() => !isAuthenticated()}
        />
        <RestrictRoute
          path="/register"
          component={Register}
          fallback={goToBeforePage}
          exact
          isAllow={() => !isAuthenticated()}
        />
        <RestrictRoute
          path="/registerGuestHouse"
          component={RegisterGuestHouse}
          fallback={goToLogInPage}
          isAllow={isAuthenticated}
        />
        <RestrictRoute
          path="/addReservation"
          component={AddReservation}
          fallback={goToLogInPage}
          isAllow={() => {
            return true;
          }}
          // isAllow={isAuthenticated}
        />
        <Route path="/notFound" component={NotFound} />
        <Redirect path="*" to="/notFound" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;

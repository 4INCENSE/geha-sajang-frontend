import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Header from '@/components/Header/Header';
import CreateAccount from '@/components/Register/CreateAccount/CreateAccount';
import TermsAndConditions from '@/components/Register/TermsAndConditions/TermsAndConditions';

import { getTerms } from '@/redux/Registration/thunk/getTerms';

const Register = () => {
  const dispatch = useDispatch();
  const { terms } = useSelector((state) => state.registerReducer);
  const { data, loading, error } = terms;

  const [TermsAndConditionsDisplay, setTermsAndConditionsDisplay] = useState('flex');
  const [CreateAccountDisplay, setCreateAccountDisplay] = useState('none');

  const [isAgreeToMarketing, setIsAgreeToMarketing] = useState(false);

  useEffect(() => {
    dispatch(getTerms());
  }, [dispatch]);

  useEffect(() => {
    if (error) alertError();
  }, [terms]);

  const nextButtonClickHandler = () => {
    setTermsAndConditionsDisplay('none');
    setCreateAccountDisplay('flex');
  };

  const getIsAgreeToMarketing = (bool) => {
    setIsAgreeToMarketing(bool);
  };

  const alertError = () => {
    alert(data);
    window.history.back();
  };

  console.log(data);
  if (!data) return <></>;
  if (error) return <></>;
  return (
    <Wrap>
      <Header />
      <TermsAndConditions
        termsData={data}
        display={TermsAndConditionsDisplay}
        getIsAgreeToMarketing={getIsAgreeToMarketing}
        nextButtonClickHandler={nextButtonClickHandler}
      />
      <CreateAccount isAgreeToMarketing={isAgreeToMarketing} display={CreateAccountDisplay} />
    </Wrap>
  );
};

export default Register;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

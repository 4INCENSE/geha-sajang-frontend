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
  const { data, error } = terms;

  const [isAgreed, setItAgreed] = useState(false);
  const [isAgreeToMarketing, setIsAgreeToMarketing] = useState(false);

  useEffect(() => {
    dispatch(getTerms());
  }, [dispatch]);

  useEffect(() => {
    if (error) errorGetTerms();
  }, [terms]);

  const nextButtonClickHandler = () => {
    setItAgreed(true);
  };

  const getIsAgreeToMarketing = (bool) => {
    setIsAgreeToMarketing(bool);
  };

  const errorGetTerms = () => {
    alert(data);
    window.history.back();
  };

  if (!data) return <></>;
  if (error) return <></>;
  return (
    <Wrap>
      <Header />
      {!isAgreed ? (
        <TermsAndConditions
          termsData={data}
          getIsAgreeToMarketing={getIsAgreeToMarketing}
          nextButtonClickHandler={nextButtonClickHandler}
        />
      ) : (
        <CreateAccount isAgreeToMarketing={isAgreeToMarketing} />
      )}
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

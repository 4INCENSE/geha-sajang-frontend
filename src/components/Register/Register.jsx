import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Header from '@/components/Header/Header';
import CreateAccount from '@/components/Register/CreateAccount/CreateAccount';
import TermsAndConditions from '@/components/Register/TermsAndConditions/TermsAndConditions';

import { getTermsAndConditions } from '@/redux/actions/getTermsAndConditionsAction';

const Register = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.apiReducer);

  const [TermsAndConditionsDisplay, setTermsAndConditionsDisplay] = useState('flex');
  const [CreateAccountDisplay, setCreateAccountDisplay] = useState('none');
  const [isAgreeToMarketing, setIsAgreeToMarketing] = useState(false);

  useEffect(() => {
    dispatch(getTermsAndConditions());
  }, []);

  const nextButtonClickHandler = () => {
    setTermsAndConditionsDisplay('none');
    setCreateAccountDisplay('flex');
  };

  const getIsAgreeToMarketing = (bool) => {
    setIsAgreeToMarketing(bool);
  };

  return (
    <Wrap>
      <Header />
      {data.length > 0 ? (
        <TermsAndConditions
          termsData={data}
          display={TermsAndConditionsDisplay}
          getIsAgreeToMarketing={getIsAgreeToMarketing}
          nextButtonClickHandler={nextButtonClickHandler}
        />
      ) : (
        ''
      )}
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

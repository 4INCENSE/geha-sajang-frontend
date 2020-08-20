import React, { useState } from 'react';
import styled from 'styled-components';

import checkedIcon from '@/img/icon/checked.png';
import uncheckedIcon from '@/img/icon/unchecked.png';

import Button from '@/components/Button/Button';

const TermsAndConditions = () => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isServiceChecked, setIsServiceChecked] = useState(false);
  const [isPersonalInfoChecked, setIsPersonalInfoChecked] = useState(false);
  const [isMarketingChecked, setIsMarketingChecked] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState('none');

  const allCheckboxIcon = isAllChecked ? checkedIcon : uncheckedIcon;
  const serviceCheckboxIcon = isServiceChecked ? checkedIcon : uncheckedIcon;
  const personalInfoCheckboxIcon = isPersonalInfoChecked ? checkedIcon : uncheckedIcon;
  const marketingCheckboxIcon = isMarketingChecked ? checkedIcon : uncheckedIcon;

  const allCheckClickHandler = () => {
    setIsAllChecked(!isAllChecked);
    checkAll(!isAllChecked);
  };

  const checkAll = (bool) => {
    setIsServiceChecked(bool);
    setIsPersonalInfoChecked(bool);
    setIsMarketingChecked(bool);
  };

  const checkAllChecked = (serviceCheckbox, personalInfoCheckbox, marketingCheckbox) => {
    if (serviceCheckbox && personalInfoCheckbox && marketingCheckbox) setIsAllChecked(true);
    if (!serviceCheckbox || !personalInfoCheckbox || !marketingCheckbox) setIsAllChecked(false);
  };

  const serviceCheckClickHandler = () => {
    setIsServiceChecked(!isServiceChecked);
    checkAllChecked(!isServiceChecked, isPersonalInfoChecked, isMarketingChecked);
  };
  const personalInfoCheckClickHandler = () => {
    setIsPersonalInfoChecked(!isPersonalInfoChecked);
    checkAllChecked(isServiceChecked, !isPersonalInfoChecked, isMarketingChecked);
  };

  const marketingCheckClickHandler = () => {
    setIsMarketingChecked(!isMarketingChecked);
    checkAllChecked(isServiceChecked, isPersonalInfoChecked, !isMarketingChecked);
  };

  const agreementButtonClickHandler = () => {
    if (!isServiceChecked || !isPersonalInfoChecked) return setMessageDisplay('block');
    setMessageDisplay('none');
  };

  return (
    <ContentWrap>
      <RegisterWrap>
        <RegisterTitle>게하사장 서비스 약관 동의</RegisterTitle>
        <AgreementWrap>
          <Checkbox type="checkbox" id="allCheck" />
          <CheckBoxLabel htmlFor="allCheck" onClick={allCheckClickHandler}>
            <CheckBoxIcon src={allCheckboxIcon} />
            <AgreementTitle>모두 동의합니다.</AgreementTitle>
          </CheckBoxLabel>
          <Checkbox type="checkbox" id="serviceCheck" />
          <CheckBoxLabel htmlFor="serviceCheck" onClick={serviceCheckClickHandler}>
            <CheckBoxIcon src={serviceCheckboxIcon} />
            <AgreementTitle>[필수] 이용약관 동의</AgreementTitle>
          </CheckBoxLabel>
          <Content>
            제 1 장 환영합니다! <br />제 1 조 (목적)게하사장 (이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다.
            회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별
            서비스에 모두 접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '게하사장 약관(이하 '본 약관')을
            마련하였습니다. 본 약관은 여러분이 게하사장 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및
            절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.
          </Content>
          <Checkbox type="checkbox" id="personalInfoCheck" />
          <CheckBoxLabel htmlFor="personalInfoCheck" onClick={personalInfoCheckClickHandler}>
            <CheckBoxIcon src={personalInfoCheckboxIcon} />
            <AgreementTitle>[필수] 개인정보 수집 및 이용 동의</AgreementTitle>
          </CheckBoxLabel>
          <Content>
            제 1 장 환영합니다! <br />제 1 조 (목적)게하사장 (이하 ‘회사’)가 제공하는 서비스를 이용해 주셔서 감사합니다.
            회사는 여러분이 다양한 인터넷과 모바일 서비스를 좀 더 편리하게 이용할 수 있도록 회사 또는 관계사의 개별
            서비스에 모두 접속 가능한 통합로그인계정 체계를 만들고 그에 적용되는 '게하사장 약관(이하 '본 약관')을
            마련하였습니다. 본 약관은 여러분이 게하사장 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및
            절차 등 기본적인 사항을 규정하고 있으므로 조금만 시간을 내서 주의 깊게 읽어주시기 바랍니다.
          </Content>
          <Checkbox type="checkbox" id="marketingCheck" />
          <CheckBoxLabel htmlFor="marketingCheck" onClick={marketingCheckClickHandler}>
            <CheckBoxIcon src={marketingCheckboxIcon} />
            <AgreementTitle>[선택] 마케팅 정보 수신 동의</AgreementTitle>
          </CheckBoxLabel>
        </AgreementWrap>
        <InputMessage>이용약관과 개인정보 수집 및 이용에 동의하셔야 합니다.</InputMessage>
        <Button title="다음" />
        <InputMessage style={{ display: messageDisplay }}>
          이용약관과 개인정보 수집 및 이용에 동의하셔야 합니다.
        </InputMessage>
        <Button title="다음" onClick={agreementButtonClickHandler} />
      </RegisterWrap>
    </ContentWrap>
  );
};

export default TermsAndConditions;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 80px;
`;

const RegisterTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-weight: bold;
  font-size: 25px;
  color: ${({ theme }) => theme.color.darkGray};
  font-weight: bold;
  margin: 0 0 40px 0;
`;

const RegisterWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 830px;
  border: 0.5px solid #b3b3b3;
  padding: 60px;
`;

const AgreementWrap = styled.div`
  margin-bottom: 30px;
`;
const Checkbox = styled.input`
  display: none;
`;

const CheckBoxIcon = styled.img`
  width: 25px;
`;
const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  width: 400px;
  margin: 30px 0 0 0;
`;

const AgreementTitle = styled.div`
  font-family: 'S-CoreDream-2ExtraLight';
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

const Content = styled.div`
  width: 400px;
  max-height: 200px;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.05);
  border: solid 1px ${({ theme }) => theme.color.gray};
  line-height: 23px;
  padding: 20px;
  margin: 15px 0 15px 0;
`;

const InputMessage = styled.div`
  display: flex;
  width: 400px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.point};
  padding: 10px 5px 0px 5px;
`;

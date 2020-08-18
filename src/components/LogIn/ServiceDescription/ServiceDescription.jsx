import React from 'react';
import styled from 'styled-components';
import ex1 from '@/img/01.jpg';
import ex2 from '@/img/02.jpg';
import ex3 from '@/img/03.jpg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;

const DescriptionCardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const DescriptionTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
  margin: 30px 0 10px 0;
`;
const DescriptionTitle = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Description = styled.div`
  font-family: 'S-CoreDream-5Medium';
  font-size: 18px;
`;

const Example = styled.img`
  width: 480px;
  height: 300px;
  margin: 0 20px;
`;

const ServiceDescription = () => {
  return (
    <Wrap>
      <DescriptionTitleWrap>
        <DescriptionTitle>방별 게스트 관리</DescriptionTitle>
        <Description>
          게스트를 방별로 관리해보세요. 방별 침대에 게스트를 배치시키고 체크인 체크아웃을 관리하세요!
        </Description>
      </DescriptionTitleWrap>
      <DescriptionCardWrap>
        <Example src={ex1} />
        <Example src={ex2} />
        <Example src={ex3} />
      </DescriptionCardWrap>
    </Wrap>
  );
};

export default ServiceDescription;

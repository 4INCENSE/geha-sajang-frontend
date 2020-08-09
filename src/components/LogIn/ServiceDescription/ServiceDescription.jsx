import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

const DescriptionCardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DescriptionCard = styled.div`
  width: 480px;
  height: 400px;
  background: ${({ theme }) => theme.color.lightGray};
  margin: 20px;
  border-radius: 20px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 20px 20px 20px;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 200px;
  background: white;
  margin-top: 10px;
`;
const Icon = styled.img`
  width: 125px;
`;

const ServiceDescription = () => {
  return (
    <Wrap>
      <DescriptionCardWrap>
        <DescriptionCard>
          <CardContent></CardContent>
        </DescriptionCard>
        <DescriptionCard>
          <CardContent></CardContent>
        </DescriptionCard>
        <DescriptionCard>
          <CardContent></CardContent>
        </DescriptionCard>
      </DescriptionCardWrap>
    </Wrap>
  );
};

export default ServiceDescription;

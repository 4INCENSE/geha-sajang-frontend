import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import blackLogo from '@/img/logo/logo_b.png';

import { mobileModeWidth } from '@/common/constants/responsiveWidth';
import { serviceDescriptionData } from '@/common/constants/serviceInformation';

import DescriptionContent from '@/components/LogIn/ServiceDescription/DescriptionContent/DescriptionContent';
import ServiceStartDescription from '@/components/LogIn/ServiceDescription/ServiceStartDescription/ServiceStartDescription';

const ServiceDescription = () => {
  return (
    <Wrap>
      <DescriptionCardWrap>
        {serviceDescriptionData.map((list, index) => {
          return (
            <DescriptionContent
              image={list.image}
              key={index}
              title={list.title}
              description={list.description}
              index={index}
            />
          );
        })}
        <DescriptionContent type="last" component={<ServiceStartDescription />} />
      </DescriptionCardWrap>
    </Wrap>
  );
};

export default ServiceDescription;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DescriptionCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

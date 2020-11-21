import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ex1 from '@/img/01.jpg';
import ex2 from '@/img/02.jpg';
import ex3 from '@/img/03.jpg';
import ex4 from '@/img/04.jpg';
import blackLogo from '@/img/logo/logo_b.png';

import { mobileModeWidth } from '@/common/constants/responsiveWidth';

import DescriptionContent from '@/components/LogIn/ServiceDescription/DescriptionContent/DescriptionContent';

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
`;

const ServiceDescription = () => {
  const data = [
    {
      image: ex1,
      title: '방별,침대별 게스트 관리',
      description:
        '방에 침대를 등록하고 등록된 침대에 게스트를 배치시켜 게스트의 체크인 체크아웃을 보다 더 디테일하게 관리해보세요!'
    },
    {
      image: ex2,
      title: '게스트하우스 맞춤형,추가제공서비스 관리',
      description:
        '픽업서비스, 식사제공, 액티비티 강습, 장비대여 등 자유롭게 게스트하우스별 제공하는 추가 서비스를 등록하여 게스트의 서비스 이용 여부를 관리하세요'
    },
    {
      image: ex3,
      title: '스텝 계정 생성으로 스텝과 함께!',
      description:
        '게스트의 예약정보, 체크인·체크아웃 기록, 추가제공서비스 이용 여부 그 외 게스트 예약 특이사항 등을 호스트 뿐만 아니라 함께 일하는 스텝과 함께 관리할 수 있습니다'
    },
    {
      image: ex4,
      title: '예약안내 및 안내문자 서식',
      description:
        '예약 안내, 예약 완료, 게스트하우스 이용 안내 문자 등 자주 사용하는 문자 서식을 만들어두고 게스트별 정보만 넣어 바로바로 사용하세요!'
    }
  ];

  return (
    <Wrap>
      <DescriptionCardWrap>
        {data.map((list, index) => {
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
      </DescriptionCardWrap>
    </Wrap>
  );
};

export default ServiceDescription;

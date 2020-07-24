import React from 'react';
import * as S from './AboutMeBox.styled';

function AboutMeBox({ data }) {
  return (
    <S.Wrapper>
      <S.Title>Sobre Mim</S.Title>
      <S.Content dangerouslySetInnerHTML={{ __html: data }} />
    </S.Wrapper>
  )
}

export default AboutMeBox;


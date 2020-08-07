import React from 'react';
import * as S from './AboutMeBox.styled';
import { UserArt } from '../../elements';

function AboutMeBox({ data }) {
  return (
    <S.Wrapper>
      <S.Title>Sobre Mim</S.Title>
      <UserArt />
      <S.Content dangerouslySetInnerHTML={{ __html: data }} />
    </S.Wrapper>
  )
}

export default AboutMeBox;


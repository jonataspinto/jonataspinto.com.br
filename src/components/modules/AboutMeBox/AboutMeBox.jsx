import React from 'react';
import { node } from 'prop-types';
import * as S from './AboutMeBox.styled';

const AboutMeBox = ({ data }) => (
  <S.Wrapper>
    <S.Title>Sobre Mim</S.Title>
    <S.Content dangerouslySetInnerHTML={{ __html: data }} />
  </S.Wrapper>
);

AboutMeBox.propTypes = {
  data: node.isRequired,
};

export default AboutMeBox;

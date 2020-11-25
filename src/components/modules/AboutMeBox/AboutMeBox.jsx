import React from 'react';
import { node } from 'prop-types';
import * as S from './AboutMeBox.styled';
import { UserArt } from '../../elements';

const AboutMeBox = ({ data }) => (
  <S.Wrapper>
    <S.Title>Sobre Mim</S.Title>
    <UserArt />
    <S.Content dangerouslySetInnerHTML={{ __html: data }} />
  </S.Wrapper>
);

AboutMeBox.propTypes = {
  data: node.isRequired,
};

export default AboutMeBox;

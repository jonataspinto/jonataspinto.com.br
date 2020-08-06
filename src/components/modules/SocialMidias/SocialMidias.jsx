import React from 'react';
import * as S from './SocialMidias.styled';
import { SocialMock } from '../../../__mock__';

const SocialMidias = () => (
  <S.SocialMidiasBox>
    {SocialMock.map(({key, url, icon}) => (
      <S.IconWrapper key={key}>
          <S.LinkToSocialPage  href={url} target="_blank" rel="noopener noreferrer">
            {icon}
          </S.LinkToSocialPage>
      </S.IconWrapper>
    ))}
  </S.SocialMidiasBox>
);

export default SocialMidias;

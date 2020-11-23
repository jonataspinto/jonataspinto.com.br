import React from 'react'
import { TransitionPortal } from "gatsby-plugin-transition-link";
import * as S from './Layout.styled';
import GlobalStyles from '../../../styles/global';
import Header from '../Header/Header';
import { SocialMidias } from '../SocialMidias';


function Layout({ children }) {
  return (
    <S.Container>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Header />
      </TransitionPortal>

      <S.MainContent>
        {children}
      </S.MainContent>

      <TransitionPortal>
        <SocialMidias />
      </TransitionPortal>
    </S.Container>
  )
}

export default Layout


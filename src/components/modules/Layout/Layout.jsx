import React from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import { node } from 'prop-types';
import * as S from './Layout.styled';
import GlobalStyles from '../../../styles/global';
import Header from '../Header/Header';
import { SocialMidias } from '../SocialMidias';

const Layout = ({ children }) => (
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
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;

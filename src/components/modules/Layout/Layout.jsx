import React from 'react'
import image from "../../../images/header.svg";
import bottom from "../../../images/bottom.svg";
import * as S from './Layout.styled';
import GlobalStyles from '../../../styles/global';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <S.Container imgHeader={image} imgBottom={bottom}>
      <GlobalStyles />
      <Header />
      {children}
    </S.Container>
  )
}

export default Layout


import React, { useState } from 'react';
import * as S from './Header.styled';
import dataLink from './_mock-links';
import { Avatar } from '../../elements';
import { Menu } from '@styled-icons/feather/Menu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Header>
      <S.ListLinks>
          <Avatar />
          <S.MenuButton onClick={()=> setIsOpen(!isOpen)}><Menu/></S.MenuButton>
        {
          dataLink.map((link, index) => {
            let iKey = index * 1024;
            return (
              <S.ListItem key={iKey}>
                <S.LinkItem to={link.url} activeClassName="active">
                  {link.label}
                </S.LinkItem>
              </S.ListItem>
            )
          })
        }
      </S.ListLinks>

      <S.ListMobile isOpen={isOpen}>
        {
          dataLink.map((link, index) => {
            let iKey = index * 1024;
            return (
              <S.ListItem key={iKey} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <S.LinkItem to={link.url} activeClassName="active">
                  {link.label}
                </S.LinkItem>
              </S.ListItem>
            )
          })
        }
      </S.ListMobile>
    </S.Header>
  )
}

export default Header


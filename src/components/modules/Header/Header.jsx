import React, { useState } from 'react';
import * as S from './Header.styled';
import dataLink from './_mock-links';
import { Avatar } from '../../elements';
import { Menu } from '@styled-icons/feather/Menu'
import { useComponentVisible } from '../../../utils'

const Header = () => {
  const [isOpen, setp] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);


  return (
    <S.Header>
      <S.ListLinks>
          <Avatar />
          <S.MenuButton onClick={()=> setIsComponentVisible(!isComponentVisible)}><Menu/></S.MenuButton>
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

      <S.ListMobile ref={ref} isOpen={isComponentVisible}>
        {
          dataLink.map((link, index) => {
            let iKey = index * 1024;
            return (
              <S.ListItem key={iKey} isOpen={isComponentVisible} onClick={() => setIsComponentVisible(!isComponentVisible)}>
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


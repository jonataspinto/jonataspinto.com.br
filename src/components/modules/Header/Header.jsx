import React from 'react';
import * as S from './Header.styled';
import dataLink from './_mock-links';
import { Avatar } from '../../elements';
import { Menu } from '@styled-icons/feather/Menu'
import { useComponentVisible } from '../../../utils'

const Header = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <S.Header ref={ref}>
      <S.ListLinks>
          <Avatar />
          <S.MenuButton
            onClick={()=> setIsComponentVisible(!isComponentVisible)}
            arial-label="botão menu"
          >
            <Menu/>
          </S.MenuButton>
        {
          dataLink.map((link, index) => {
            let iKey = index * 1024;
            return (
              <S.ListLinksItem key={iKey} current={(typeof window !== 'undefined') && (window.location.pathname === link.url) ? true : false}>
                <S.LinkItem
                  to={link.url}
                  activeClassName="active"
                >
                  {link.label}
                </S.LinkItem>
              </S.ListLinksItem>
            )
          })
        }
      </S.ListLinks>

      <S.ListMobile isOpen={isComponentVisible}>
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


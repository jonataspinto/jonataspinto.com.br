import React from 'react';
import { Menu } from '@styled-icons/feather/Menu'
import { SearchAlt } from 'styled-icons/boxicons-regular';
import dataLink from '../../../__mock__/_mock-links';
import { Avatar } from '../../elements';
import { useComponentVisible } from '../../../utils'
import * as S from './Header.styled';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Header = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <S.Header ref={ref}>
      <AniLink
        cover
        direction="top"
        bg="#0c0c0c"
        duration={0.7}
        to="/"
      >
        <Avatar />
      </AniLink>
      <S.ListLinks>
        {
          dataLink.map((link, index) => {
            let iKey = index * 1024;
            return (
              <S.ListLinksItem
                key={iKey}
              >
                <S.LinkItem
                  cover
                  direction="top"
                  bg="#0c0c0c"
                  duration={0.7}
                  to={link.url}
                  activeClassName="active"
                >
                  {link.label}
                </S.LinkItem>
              </S.ListLinksItem>
            )
          })
        }
        <S.ListLinksItem>
          <S.LinkItem
            cover
            direction="top"
            bg="#0c0c0c"
            duration={0.7}
            to="/search"
            activeClassName="active"
          >
            <SearchAlt style={{ width: '30px' }} />
          </S.LinkItem>
        </S.ListLinksItem>
      </S.ListLinks>

      <S.MenuButton
        onClick={()=> setIsComponentVisible(!isComponentVisible)}
        arial-label="botao menu"
      >
        <Menu/>
      </S.MenuButton>

      <S.ListMobile isOpen={isComponentVisible}>
        {
          dataLink.map((link, index) => {
            let iKey = index * 1024;
            return (
              <S.ListItem
                key={iKey}
                isOpen={isComponentVisible}
                onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <S.LinkItem
                  cover
                  direction="top"
                  bg="#0c0c0c"
                  duration={0.7}
                  to={link.url}
                  activeClassName="active"
                >
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

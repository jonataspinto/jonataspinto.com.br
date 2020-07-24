import React from 'react';
import * as S from './Header.styled';
import dataLink from './_mock-links';
import { Avatar } from '../../elements';

function Header() {
  return (
    <S.Header>
      <S.ListLinks>
        <S.ListItem>
          <Avatar />
        </S.ListItem>
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

    </S.Header>
  )
}

export default Header


import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import media from 'styled-media-query';
import { lighten, shade } from 'polished';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  z-index: 4;
  padding: 0px 16px ;
  background-color: ${shade(0.3, '#26647A')};
  position: fixed;
  ${media.lessThan('medium')`
    justify-content: space-between;
  `}
`;

export const ListLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  z-index: 2;
  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const ListLinksItem = styled.li`
  .active {
    color: ${lighten(0.4, '#26647A')};
  }
  & + li {
    margin-left: 16px;
  }
`;

export const LinkItem = styled(AniLink)`
  color: #f2f2f2;
  font-size: 1.1rem;
  text-transform: uppercase;
  &:hover {
    color: ${lighten(0.3, '#26647A')};
  }
`;

export const MenuButton = styled.button`
  width: 45px;
  padding: 8px;
  background-color: transparent;
  color: #dbdbdb;
  border: none;
  border-radius: 50%;
  outline: none;
  transition: background .2s ease-in-out;
  &:hover {
    background-color: ${shade(0.4, '#26647A')};
  }
  &:active {
    background-color: ${shade(0.6, '#26647A')};
  }
  ${media.greaterThan('medium')`
    display: none;
  `}
`;

export const ListMobile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;
  position: absolute;
  background-color: ${shade(0.4, '#26647A')};
  left: 0;
  z-index: 1;
  transition: .2s;
  ${media.lessThan('medium')`
    top: ${(props) => (props.isOpen ? '80px' : '40px')};
    display: ${(props) => !props.isOpen && 'none'};
  `}
  ${media.greaterThan('medium')`
    display: none;
  `}
`;

export const ListItem = styled.li`
  .active {
    color: ${lighten(0.4, '#26647A')};
  }
`;

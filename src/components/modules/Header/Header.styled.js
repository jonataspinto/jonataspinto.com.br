import styled from "styled-components";
import { Link } from "gatsby";
import { shade } from 'polished'
import media from "styled-media-query";

export const Header = styled.header`
  height: 80px;
  width: 100%;
  max-width: 768px;
  margin-bottom: 97px;
  position: relative;
  background-color: #26647A;
  ${media.lessThan("medium")`
    position: sticky;
    top: 0;
    z-index: 2;
    margin-bottom: 40px;
  `}
`;

export const MenuButton = styled.button`
  width: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const ListLinks = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  position: relative;
  z-index: 2;
  ${media.lessThan("medium")`
    justify-content: space-between;
    padding: 10px ;
  `}
  li{
    ${media.lessThan("medium")`
      display: none;
    `}
  }
`;

export const ListMobile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: absolute;
  height: 80px;
  background-color: #26647A;
  z-index: 1;
  transition: .2s;
  ${media.lessThan("small")`
    top: ${(props) => props.isOpen ? '80px' : '0'};
    height: 80px;
  `}
  ${media.lessThan("medium")`
    top: ${(props) => props.isOpen ? '80px' : '0'};
  `}
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const ListItem = styled.li`
  ${media.lessThan("small")`
    opacity: ${(props) => props.isOpen ? '1' : '0'};
    transition: opacity .1s;
  `}
  .active {
    color: #f2f2f2;
  }
`;

export const LinkItem = styled(Link)`
  color: ${shade(0.8, '#f2f2f2')};
  font-size: 22px;
  text-transform: uppercase;
  &:hover {
    color: #f2f2f2;
  }
`;

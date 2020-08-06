import styled from "styled-components";
import { Link } from "gatsby";
import { shade } from 'polished'
import media from "styled-media-query";

export const Header = styled.header`
  height: 100px;
  width: 100%;
  max-width: 768px;
  margin-bottom: 40px;
  position: relative;
  z-index: 3;
  ${media.lessThan("medium")`
    height: 100px;
    position: sticky;
    top: 0;
    margin-bottom: 10px;
  `}
  ${media.lessThan("small")`
    height: 80px;
  `}
`;

export const MenuButton = styled.button`
  width: 30px;
  background-color: transparent;
  color: #dbdbdb;
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
    background-image: linear-gradient(#26647A, #000);
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
  height: 40px;
  background-color: #000;
  z-index: 1;
  transition: .2s;
  ${media.lessThan("medium")`
    top: ${(props) => props.isOpen ? '100px' : '40px'};
  `}
  ${media.lessThan("small")`
    top: ${(props) => props.isOpen ? '80px' : '40px'};
    height: 40px;
  `}
  ${media.greaterThan("medium")`
    display: none;
  `}
`;

export const ListItem = styled.li`
  ${media.lessThan("medium")`
    opacity: ${(props) => props.isOpen ? '1' : '0'};
    transition: opacity .1s;
  `}
  .active {
    color: #f2f2f2;
  }
    color: ${(props) => props.current? '#f2f2f2' : '#26647A'};
  ${media.lessThan("medium")`
  `}
`;

export const LinkItem = styled(Link)`
  color: ${shade(0.8, '#f2f2f2')};
  font-size: 22px;
  text-transform: uppercase;
  &:hover {
    color: #f2f2f2;
  }
  ${media.lessThan("medium")`
    font-size: 18px;
    color: #26647A;
  `}
`;

import styled from "styled-components";
import { Link } from "gatsby";

export const Header = styled.header`
  height: 70px;
  width: 100%;
  max-width: 698px;
  margin-bottom: 97px;
`
export const ListLinks = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
`;

export const ListItem = styled.li`
  .active {
    color: #000000;
  }
`;

export const LinkItem = styled(Link)`
  color: #e5e5e5;
  font-size: 22px;
  &:hover {
    color: #000000;
  }
`;

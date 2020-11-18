import { lighten } from "polished";
import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
   "a b c";
  width: 100%;
  padding: 32px 160px;
  color: #f2f2f2;
  width: max-content;

  a {
    color: #f2f2f2;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${lighten(0.3, '#26647A')}
    }
  }

  a:last-child {
    grid-area: c;
    display: flex;
    justify-content: flex-end;
  }

  span {
    grid-area: b;
    display: flex;
    justify-content: center;
  }
`;

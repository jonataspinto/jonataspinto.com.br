import { lighten } from 'polished';
import styled from 'styled-components';
import media from 'styled-media-query';

export const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
   "a b c";
  width: 100%;
  align-items: center;
  padding: 32px 64px;
  color: #f2f2f2;
  ${media.lessThan('medium')`
    padding: 32px 0px;
  `}

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

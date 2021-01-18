import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { lighten } from 'polished';

export const RecommendedPostsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.previous !== null ? 'space-between' : 'flex-end')};
`;

export const RecommendedLink = styled(AniLink)`
  display: flex;
  width: 50%;
  padding: 1.5rem;
  color: ${lighten(0.3, '#26647A')};
  &:hover {
    color: ${lighten(0.5, '#26647A')};
  }
  &.next {
    justify-content: flex-end;
  }
`;

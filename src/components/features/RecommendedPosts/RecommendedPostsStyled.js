import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const RecommendedPostsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.previous !== null ? 'space-between' : 'flex-end' };
`;

export const RecommendedLink = styled(AniLink)`
  display: flex;
  width: 50%;
  padding: 1.5rem;

  &.next {
    justify-content: flex-end;
  }
`;

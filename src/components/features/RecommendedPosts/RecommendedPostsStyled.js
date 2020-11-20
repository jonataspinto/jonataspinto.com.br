import styled from "styled-components";
import { Link } from "gatsby";

export const RecommendedPostsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.previous !== null ? 'space-between' : 'flex-end' }
  ${(props) => console.log(props.hasNext)}
`;

export const RecommendedLink = styled(Link)`
  display: flex;
  width: 50%;
  padding: 1.5rem;

  &.next {
    justify-content: flex-end;
  }
`;

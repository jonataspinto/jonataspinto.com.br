import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled(GatsbyImage).attrs({
  alt: 'Jonatas Pinto',
  'arial-label': 'Jonatas Pinto',
})`
  border-radius: 50%;
  width: 60px;
  object-fit: cover;
`;

export const Description = styled.div`
  margin-left: 16px;
  color: #f2f2f2;
  h2 {
    font-size: 1.3rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

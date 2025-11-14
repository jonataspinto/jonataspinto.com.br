import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import media from 'styled-media-query';

export const Image = styled(GatsbyImage)`
  border-radius: 50%;
  width: 80px;
  ${media.greaterThan('small')`
    width: 120px;
  `}
`;

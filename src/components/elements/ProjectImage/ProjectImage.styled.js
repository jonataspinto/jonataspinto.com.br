import styled from "styled-components";
import Img from "gatsby-image";
import media from "styled-media-query";

export const Image = styled(Img)`
  border-radius: 50%;
  width: 80px;
  ${media.greaterThan("small")`
    width: 120px;
  `}
`;

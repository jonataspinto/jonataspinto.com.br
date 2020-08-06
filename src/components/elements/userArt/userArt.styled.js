import styled from "styled-components";
import Img from "gatsby-image";
import media from "styled-media-query";

export const Wrapper = styled.div`
  position: absolute;
  left: 113px;
  top: 350px;
  ${media.lessThan("1160px")`
    display: none;
  `}
`;

export const Image = styled(Img)`
  min-width: 200px;
`;

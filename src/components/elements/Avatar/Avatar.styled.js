import styled from "styled-components";
import Img from "gatsby-image";
import media from "styled-media-query";

export const Avatar = styled(Img).attrs({
  alt: "Jonatas Pinto",
  "arial-label": "Jonatas Pinto"
})`
  border-radius: 50%;
  width: 80px;
  object-fit: cover;

  ${media.lessThan("small")`
    width: 60px;
  `}
`;

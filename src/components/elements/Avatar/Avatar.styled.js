import styled from "styled-components";
import Img from "gatsby-image";
import media from "styled-media-query";

export const AvatarWrapper = styled.div`
  ${media.lessThan("medium")`
    display: flex;
    align-items: center;
  `}

`;

export const Avatar = styled(Img).attrs({
  alt: "Jonatas Pinto",
  "arial-label": "Jonatas Pinto",
})`
  border-radius: 50%;
  width: 80px;
  object-fit: cover;

  ${media.lessThan("small")`
    width: 60px;
  `}
`;

export const Description = styled.div`
  ${media.greaterThan("medium")`
    display: none;
  `}
  margin-left: 10px;
  h2 {
    font-size: 20px;
  }
  p{
    font-size: 12px;
  }
`;

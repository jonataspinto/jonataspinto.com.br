import styled from "styled-components";
import media from "styled-media-query";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { PriceTag } from "@styled-icons/entypo/PriceTag";

export const PostItemBoxWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const PostItemBox = styled(AniLink)`
  display: flex;
  color: #FCFCFC;
  font-weight: 500;
  font-size: 20px;
  padding: 20px;
  ${media.lessThan("small")`
    flex-direction: column;
  `}

  &:after,
  &:before {
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: transform .2s;
  }

  &:after {
    border-bottom: 2px solid #bdbdbd;;
    transform: scaleX(0);
  }

  &:hover {
    &:after {
      transform: scaleX(1)
    }
  }
`;

export const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  ${media.greaterThan("small")`
    margin-left: 26px;
    align-items: flex-start;
  `}
`;

export const BoxCategory = styled.div`
  margin: 8px 0;
`;

export const ToolsIcon = styled(PriceTag)`
  color: #BDBDBD;
  width: 1.5rem;
  margin-right: 5px;
`;

export const PostCategory = styled.span`
  color: #BDBDBD;
  font-size: 1.2rem;
`;

export const PostDate = styled.span`
  font-size: 0.7rem;
  color: #BDBDBD;
  ${media.lessThan("small")`
    font-size: 14px
  `}
`;

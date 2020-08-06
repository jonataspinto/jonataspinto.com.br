import styled from "styled-components";
import media from "styled-media-query";

export const SocialMidiasBox = styled.div`
  width: 40px;
  position: fixed;
  right: 40px;
  bottom: 60px;
  display: block;
  z-index: 3;
  ${media.lessThan("medium")`
    position: fixed;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    bottom: 0;
    right: auto;
    left: auto;
    background-color: black;
  `}
`;

export const LinkToSocialPage = styled.a`
  text-decoration: none;
  color: #fff;
  display: block;
  border-radius: 50%;
  padding: 5px;
  max-width: 50px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    transition: transform .2s;
    border-radius: 50%;
    border-left: 2px solid #fff;
    transform: scaleX(0);
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    color: #26647A;
    &:before {
      transform: scaleX(1)
    }
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: block;
`;

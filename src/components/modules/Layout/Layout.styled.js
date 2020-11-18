import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction:column;
  align-items: center;
  padding: 0px 0px 138px;
  ${media.lessThan("medium")`
    padding: 0 0 100px;
  `}
  /* ${media.greaterThan("medium")`
    background-image: url(${(props) => props.imgHeader}), url(${(props) => props.imgBottom});
    background-position: top, bottom;
    background-repeat: no-repeat, no-repeat;
    background-size: auto;
  `} */
`;

export const PostItemContainer = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 160px;
  ${media.lessThan("medium")`
    padding: 0 16px;
  `}
  ${media.lessThan("large")`
    padding: 0 80px;
  `}
`;



import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${media.lessThan("medium")`
    padding: 0 18px;
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 597px;
  line-height: 35px;
  text-align: justify;
  a {
    color: #26647A;
    border-bottom: 2px dashed #26647A;
    padding-bottom: 4px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 10px 39px;
    border-right: 2px solid #26647A;
    border-bottom: 2px solid #26647A;
  }
`;

export const Title = styled.h2`
  font-family: Ubuntu;
  font-weight: normal;
  margin-bottom: 23px;
  border-bottom: 2px solid #26647A;
  width: max-content;
  @media (min-width: 768px) {
    font-size: 25px;
    line-height: 29px;
    margin-left: 35px;
    margin-bottom: 23px;
    padding: 0 20px 9px 0;
  }
`;

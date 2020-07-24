import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const Content = styled.div`
  width: 100%;
  max-width: 518px;
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 10px 35px;
    border-right: 2px solid #26647A;
    border-bottom: 2px solid #26647A;
  }
`;

export const Title = styled.h2`
  font-family: Ubuntu;
  font-weight: normal;
  @media (min-width: 768px) {
    width: max-content;
    font-size: 25px;
    line-height: 29px;
    margin-left: 35px;
    margin-bottom: 23px;
    padding: 0 20px 9px 0;
    border-bottom: 2px solid #26647A;
  }
`;

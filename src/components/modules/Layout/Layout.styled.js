import styled from "styled-components";

export const Container = styled.div`
  background-image: url(${(props) => props.imgHeader}), url(${(props) => props.imgBottom});
  background-position: top, bottom;
  background-repeat: no-repeat, no-repeat;
  background-size: auto;
  height: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction:column;
  align-items: center;
  padding: 10px 100px 138px;
  @media (max-width: 768px) {
    padding: 0 0 100px;
  }
`;

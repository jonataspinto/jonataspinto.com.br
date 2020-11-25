import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction:column;
  align-items: center;
  /* ${media.lessThan('medium')`
    padding: 0 0 100px;
  `} */
  /* ${media.greaterThan('medium')`
    background-image: url(${(props) => props.imgHeader}), url(${(props) => props.imgBottom});
    background-position: top, bottom;
    background-repeat: no-repeat, no-repeat;
    background-size: auto;
  `} */
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: calc(100% - 100px);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 16px 90px;
  ${media.lessThan('medium')`
    padding: 16px 32px 32px ;
  `}
  ${media.lessThan('small')`
    min-height: calc(100% - 80px);
    margin-top: 80px;
  `}
`;

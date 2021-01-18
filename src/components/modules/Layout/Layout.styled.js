import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  max-height: 100vh;
  height: 100%;
  width: 100%;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: calc(100% - 100px);
  margin-top: 80px;
  padding: 32px 90px;
  ${media.lessThan('medium')`
    padding: 32px 0px 32px 0 ;
  `}
  ${media.lessThan('small')`
    min-height: calc(100% - 80px);
    margin-top: 80px;
  `}
`;

import styled from 'styled-components';
import { Settings } from '@styled-icons/feather/Settings';
import media from 'styled-media-query';

export const BoxContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProjectsBoxWrapper = styled.div`
  position: relative;
  margin-bottom: 66px;
`;

export const ProjectBox = styled.a`
  display: flex;
  align-items: center;
  color: #FCFCFC;
  font-weight: 500;
  font-size: 20px;
  padding: 20px;
  ${media.lessThan('small')`
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

export const ProjectBoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.greaterThan('small')`
    margin-left: 26px;
    align-items: flex-start;
  `}
`;

export const BoxStacks = styled.div`
  margin-top: 5px;
`;

export const ToolsIcon = styled(Settings)`
  color: #BDBDBD;
  width: 30px;
  margin-right: 5px;
`;

export const StacksName = styled.span`
  color: #BDBDBD;
  ${media.lessThan('small')`
    font-size: 14px
  `}
`;

import React from 'react';
import * as S from './ProjectsBox.styled';
import { ProjectsMock } from '../../../__mock__';
import { ProjectImage } from '../../elements';

function ProjectsBox() {
  return (
    <S.BoxContainer>
      {
        ProjectsMock.map(({
          id,
          title,
          key,
          link,
          stack,
        }) => (
        <S.ProjectsBoxWrapper key={id}>
          <S.ProjectBox
            aria-label={`Ver projeto ${title}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectImage name={key} />
            <S.ProjectBoxDescription>
              {title}
              <S.BoxStacks>
                <S.ToolsIcon />
                <S.StacksName>
                  {stack.map((stk, index) => (
                    (index === stack.length -1 ) ? stk : `${stk}, `
                  ))}
                </S.StacksName>
              </S.BoxStacks>
            </S.ProjectBoxDescription>
          </S.ProjectBox>
        </S.ProjectsBoxWrapper>
        ))
      }
    </S.BoxContainer>
  )
}

export default ProjectsBox

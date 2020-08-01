import React from 'react';
import * as S from './ProjectsBox.styled';
import projects from './_mock-projects';
import { ProjectImage } from '../../elements';

function ProjectsBox() {
  return (
    <S.BoxContainer>
      {
        projects.map((project) => (
        <S.ProjectsBoxWrapper key={project.id}>
          <S.ProjectBox

            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectImage name={project.key} />
            <S.ProjectBoxDescription>
              {project.title}
              <S.BoxStacks>
                <S.ToolsIcon />
                <S.StacksName>
                  {project.stack.map((stk, index) => (
                    (index === project.stack.length -1 ) ? stk : `${stk}, `
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

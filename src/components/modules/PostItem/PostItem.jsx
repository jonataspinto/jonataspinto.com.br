import React from 'react';
import * as S from './PostItem.styled';

function PostItem({
  background,
  category,
  description,
  title,
  date,
  slug,
  timeToRead
}) {
  return (
    <S.PostItemBoxWrapper>
      <S.PostItemBox
        cover
        direction="bottom"
        bg="#0c0c0c"
        duration={0.7}
        aria-label={`Ver post ${title}`}
        to={slug}
      >
        {/* <ProjectImage name={key} /> */}
        <S.PostDescription>
          {title}
          <S.BoxCategory>
            <S.ToolsIcon />
            <S.PostCategory>
              {category}
            </S.PostCategory>
          </S.BoxCategory>
          <S.PostDate>
            {`${date} - ${timeToRead} min de leitura`}
          </S.PostDate>
        </S.PostDescription>
      </S.PostItemBox>
    </S.PostItemBoxWrapper>
  )
}

export default PostItem

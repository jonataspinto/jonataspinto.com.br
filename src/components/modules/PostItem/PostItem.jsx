import React from 'react';
import { string, number } from 'prop-types';
import * as S from './PostItem.styled';

const PostItem = ({
  category,
  title,
  date,
  slug,
  timeToRead,
}) => (
  <S.PostItemBoxWrapper>
    <S.PostItemBox
      cover
      direction="bottom"
      bg="#0c0c0c"
      duration={0.7}
      aria-label={`Ver post ${title}`}
      to={slug}
    >
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
);

PostItem.propTypes = {
  category: string.isRequired,
  title: string.isRequired,
  date: string.isRequired,
  slug: string.isRequired,
  timeToRead: number.isRequired,
};

export default PostItem;

import React from 'react';
import PropTypes from 'prop-types';
import { Disqus } from 'gatsby-plugin-disqus';
import * as S from './CommentsStyled';

const Comments = ({ url, title }) => {
  const completeUrl = `https://jonataspinto.com.br/${url}`;

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <Disqus
        config={{
          identifier: completeUrl,
          title,
          url: completeUrl,
        }}
      />
    </S.CommentsWrapper>
  );
};

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments;

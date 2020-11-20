import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'
import * as S from './CommentsStyled';

function Comments({ url, title }) {
  const completeUrl = `https://jonataspinto.com.br/${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="jontaspinto"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />      
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments


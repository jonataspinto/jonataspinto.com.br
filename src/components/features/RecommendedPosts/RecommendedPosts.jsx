import React from "react"
import PropTypes from "prop-types"
import * as S from "./RecommendedPostsStyled.js"
import { ConditionalRenderer } from "../ConditionalRenderer"

function RecommendedPosts({ next, previous }) {
  const hasNext = next && next.fields.slug
  const hasPrevious = previous && previous.fields.slug

  return (
    <S.RecommendedPostsWrapper previous={previous}>
      <ConditionalRenderer validator={hasPrevious}>
        <S.RecommendedLink
          cover
          direction="right"
          bg="#0c0c0c"
          duration={0.7}
          to={hasPrevious && previous.fields.slug}
        >
          ←
          <p>
            {hasPrevious && previous.frontmatter.title}
          </p>
        </S.RecommendedLink>
      </ConditionalRenderer>

      <ConditionalRenderer validator={hasNext}>
        <S.RecommendedLink
          cover
          direction="right"
          bg="#0c0c0c"
          duration={0.7}
          to={hasNext && next.fields.slug} 
          className="next" 
          option="next"
        >
          <p>
            {hasNext && next.frontmatter.title}
          </p>
          →
        </S.RecommendedLink>
      </ConditionalRenderer>
    </S.RecommendedPostsWrapper>
  )
};

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    })
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    })
  })
};

export default RecommendedPosts;

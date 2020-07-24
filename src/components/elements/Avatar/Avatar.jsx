import React from 'react';
import * as S from './Avatar.styled';
import { useStaticQuery, graphql } from 'gatsby';

function Avatar() {
  const {
    placeholderImage: {
      childImageSharp: {
        fixed
      }
    }
} = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile.jpeg" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <S.Avatar fixed={fixed} />

  )
}

export default Avatar

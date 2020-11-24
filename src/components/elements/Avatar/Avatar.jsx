import React from 'react';
import * as S from './Avatar.styled';
import { useStaticQuery, graphql } from 'gatsby';

function Avatar() {
  const {
    placeholderImage: {
      childImageSharp: {
        fluid
      }
    }
  } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 100, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <S.AvatarWrapper>
      <S.Avatar fluid={fluid} />
      <S.Description>
        <h2>Jonatas Pinto</h2>
        <p>Desenvolvedor Front-end</p>
      </S.Description>
    </S.AvatarWrapper>
  )
}

export default Avatar

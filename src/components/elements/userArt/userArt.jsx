import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from "./userArt.styled";

function UserArt() {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "art-user.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <S.Wrapper>
      <S.Image fluid={data.placeholderImage.childImageSharp.fluid} style={{ }} />
    </S.Wrapper>

  )
}

export default UserArt

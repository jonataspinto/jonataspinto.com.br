import React from 'react';
import * as S from './ProjectImage.styled.js';
// import Images from './images';
import { useStaticQuery, graphql } from 'gatsby';

const ProjectImage = ({ name }) => {
  const data = useStaticQuery(
    graphql`
      query {
        estartandodevs: file(relativePath: { eq: "logo-devs.png" }) {
          childImageSharp {
            fluid(maxWidth: 164, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        youpluv: file(relativePath: { eq: "logo-youpluv.png" }) {
          childImageSharp {
            fluid(maxWidth: 164, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        confortoanimal: file(relativePath: { eq: "logo-confortoanimal.png" }) {
          childImageSharp {
            fluid(maxWidth: 164, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        eliowinter: file(relativePath: { eq: "elio-winter.png" }) {
          childImageSharp {
            fluid(maxWidth: 164, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholderImage: file(relativePath: { eq: "logo-devs.png" }) {
          childImageSharp {
            fluid(maxWidth: 164, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
    `
  )

  return (
    <S.Image fluid={data[name].childImageSharp.fluid} />
  )
}

export default ProjectImage

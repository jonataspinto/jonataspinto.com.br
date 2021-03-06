import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import * as S from './ProjectImageStyled';

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
      }
    `,
  );

  return (
    <S.Image fluid={data[name].childImageSharp.fluid} />
  );
};

ProjectImage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectImage;

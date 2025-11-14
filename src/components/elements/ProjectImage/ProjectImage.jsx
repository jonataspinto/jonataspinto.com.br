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
            fluid: gatsbyImageData(
              layout: CONSTRAINED
              width: 164
              quality: 100
            )
          }
        }
        youpluv: file(relativePath: { eq: "logo-youpluv.png" }) {
          childImageSharp {
            fluid: gatsbyImageData(
              layout: CONSTRAINED
              width: 164
              quality: 100
            )
          }
        }
        confortoanimal: file(relativePath: { eq: "logo-confortoanimal.png" }) {
          childImageSharp {
            fluid: gatsbyImageData(
              layout: CONSTRAINED
              width: 164
              quality: 100
            )
          }
        }
        eliowinter: file(relativePath: { eq: "elio-winter.png" }) {
          childImageSharp {
            fluid: gatsbyImageData(
              layout: CONSTRAINED
              width: 164
              quality: 100
            )
          }
        }
      }
    `
  );

  return <S.Image image={data[name].childImageSharp.fluid} />;
};

ProjectImage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectImage;

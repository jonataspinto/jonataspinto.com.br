import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as S from './Avatar.styled';

const Avatar = () => {
  const {
    placeholderImage: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid: gatsbyImageData(
              layout: CONSTRAINED
              width: 100
              quality: 100
            )
          }
        }
      }
    `
  );

  return (
    <S.AvatarWrapper>
      <S.Avatar image={fluid} />
      <S.Description>
        <h2>Jonatas Pinto</h2>
        <p>Desenvolvedor Front-end</p>
      </S.Description>
    </S.AvatarWrapper>
  );
};

export default Avatar;

import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { ConditionalRenderer } from "../ConditionalRenderer"
import * as S from "./PaginationStyled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => {
  return (
    <S.PaginationWrapper>
      <ConditionalRenderer validator={!isFirst}>
        <AniLink 
          cover
          direction="right"
          bg="#0c0c0c"
          duration={0.7}
          to={`/${prevPage}`}
        >
          ← página anterior
        </AniLink>
      </ConditionalRenderer>

      <span>{currentPage}/{numPages}</span>

      <ConditionalRenderer validator={!isLast}>
        <AniLink 
          cover
          direction="left"
          bg="#0c0c0c"
          duration={0.7}
          to={`${nextPage}`}
        >
          próxima página →
        </AniLink>
      </ConditionalRenderer>
    </S.PaginationWrapper>
  );
};

export default Pagination;

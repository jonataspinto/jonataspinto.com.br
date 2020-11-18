import React from "react"
import { Link } from "gatsby"
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
        <Link to={`/${prevPage}`}>
          ← página anterior
        </Link>
      </ConditionalRenderer>

      <span>{currentPage}/{numPages}</span>

      <ConditionalRenderer validator={!isLast}>
        <Link to={`${nextPage}`}>
          próxima página →
        </Link>
      </ConditionalRenderer>
    </S.PaginationWrapper>
  );
};

export default Pagination;

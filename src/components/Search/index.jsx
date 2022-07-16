import React from "react";
import * as S from "./Search.style";

const Search = () => {
  return (
    <S.Container>
      <S.Input type="text" placeholder="Search" />
      <S.IconSearch />
    </S.Container>
  );
};

export default Search;

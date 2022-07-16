import React from "react";
import * as S from "./header.style";
import Logo from "../Logo";
import ProfileMenu from "../ProfileMenu";

const Header = () => {
  return (
    <S.Header>
      <Logo />
      <ProfileMenu />
    </S.Header>
  );
};

export default Header;

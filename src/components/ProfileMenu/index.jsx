import React from "react";
import * as S from "./profileMenu.style";
import ProfilePic from "../../assets/images/pixel-art.svg";

const ProfileMenu = () => {
  return (
    <S.Container>
      <S.UserName>Parlandim</S.UserName>
      <S.UserPicture>
        <img src={ProfilePic} alt="imagem de perfil" />
      </S.UserPicture>
    </S.Container>
  );
};

export default ProfileMenu;

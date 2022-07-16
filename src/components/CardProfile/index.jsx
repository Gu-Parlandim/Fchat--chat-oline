import React from "react";
import * as S from "./cardProfile";

const CardProfile = ({ name, image, status }) => {
  return (
    <S.Container>
      <S.BoxImage>
        <img src={image} />
      </S.BoxImage>

      <S.Infos>
        <S.UserName>{name}</S.UserName>
        <S.UserStatus>{status}</S.UserStatus>
      </S.Infos>
    </S.Container>
  );
};

export default CardProfile;

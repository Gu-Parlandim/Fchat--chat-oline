import React from "react";
import CardProfile from "../CardProfile";
import Search from "../Search";
import * as S from "./contacts.style";
import data from "./data";

const Contacts = () => {
  return (
    <S.Container>
      <Search />

      <S.ContactsArea>
        {data &&
          data.map((profile, index) => (
            <S.GenericWrapper key={index}>
              <CardProfile
                name={profile.nome}
                image={profile.foto}
                status={profile.status}
              />
            </S.GenericWrapper>
          ))}
      </S.ContactsArea>
    </S.Container>
  );
};

export default Contacts;

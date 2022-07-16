import React from "react";
import * as S from "./chat.style";
import Header from "../../components/Header";
import Contacts from "../../components/Contacts";

const Chat = () => {
  return (
    <S.Container>
      <Header />

      <S.MainContainer>
        <Contacts />
      </S.MainContainer>
    </S.Container>
  );
};

export default Chat;

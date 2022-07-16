import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px);
  flex-direction: column;
  align-items: center;
  border: 3px solid #000;
  border-top: none;
  padding: 12px;
`;

const ContactsArea = styled.div`
  width: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GenericWrapper = styled.div`
  margin: 20px auto;
`;

export { Container, GenericWrapper, ContactsArea };

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserName = styled.p`
  margin-right: 5px;
  font-size: 1.2rem;
`;

const UserPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 42px;
  max-height: 42px;
  height: 100%;
  width: 100%;
  border: 3px solid #000;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export { Container, UserName, UserPicture };

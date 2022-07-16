import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  border: 4px solid transparent;
  transition: all 150ms ease-in-out;

  &:hover {
    border: 4px solid #87ffe9;
    padding: 3px;
  }
`;

const BoxImage = styled.div`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 3px solid #000;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const UserName = styled.p`
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const UserStatus = styled.span`
  font-size: 0.8rem;
`;

export { Container, BoxImage, Infos, UserName, UserStatus };

import styled from "styled-components";

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 24% 76%;
`;

export { Container, MainContainer };

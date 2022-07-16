import styled from "styled-components";
import Lup from "../../assets/images/lup.svg";

const Container = styled.label`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 40px;
  margin: 5px 0;
  background-color: #87ffe9;
  display: flex;
  align-items: center;
  border: 3px solid #000;
`;

const IconSearch = styled.div`
  position: absolute;
  right: 10px;
  background: url(${Lup}) no-repeat center;
  width: 30px;
  height: 30px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  color: #000;
  background-color: transparent;
  border: none;
  font-family: inherit;
  caret-color: red;
  padding-right: 42px;

  &::placeholder {
    font-size: 0.7em;
    color: #000;
  }

  &:focus {
    outline: none;
  }
`;
export { Container, IconSearch, Input };

import styled from "styled-components";
import React from "react";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

export default function SomeFunction({ isBlack }) {
  return <StyledBox isBlack={isBlack} />;
}

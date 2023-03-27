import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function HomePage() {
  return (
    <Container>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </Container>
  );
}

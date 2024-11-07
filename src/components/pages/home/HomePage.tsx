import styled from "styled-components";
import ContainerPage from "./container/ContainerPage";

export default function HomePage() {
  return (
    <HomePageStyled>
      <ContainerPage />
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #ececec;
  height: 100vh;
`;

import styled from "styled-components";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";
import Item5 from "./Item5";
import Item6 from "./Item6";
import Item7 from "./Item7";
import Item8 from "./Item8";

export default function ContainerPage() {
  return (
    <ContainerStyled>
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(4, 140px);
  gap: 20px;

  img {
    width: 150px;
  }
  p {
    font-size: 24px;
    width: 150px;
    text-align: center;
    font-weight: 600;
  }
`;

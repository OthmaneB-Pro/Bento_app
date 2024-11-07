import styled from "styled-components";

export default function Item6() {
  return (
    <ItemStyled>
      <h1>+56% </h1>
      <img src="./img/illustration-audience-growth.webp" alt="sixth" />
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
  grid-row: 3 / 6;
  margin-top: 120px;
  height: 200px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

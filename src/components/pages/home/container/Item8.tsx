import styled from "styled-components";

export default function Item8() {
  return (
    <ItemStyled>
      <img src="./img/illustration-grow-followers.webp" alt="hexth" />
      <p>Grow your audience</p>
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  grid-column: 3 / 5;
  grid-row: 3 / 6;
  background-color: #7d07b4;
  margin-top: 120px;
  height: 200px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

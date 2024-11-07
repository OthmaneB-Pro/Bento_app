import styled from "styled-components";

export default function Item5() {
  return (
    <ItemStyled>
      <img src="./img/illustration-multiple-platforms.webp" alt="fifth" />
      <p>Manage multiple platforms</p>
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  margin-top: 60px;
  height: 200px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

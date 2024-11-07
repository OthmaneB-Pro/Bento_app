import styled from "styled-components";

export default function Item7() {
  return (
    <ItemStyled>
      <p>Maintain a consistent schedule</p>
      <img src="./img/illustration-consistent-schedule.webp" alt="seventh" />
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  height: 200px;
  margin-top: 60px;
  background-color: #ffcb22;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

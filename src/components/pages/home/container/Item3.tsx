import styled from "styled-components";

export default function Item3() {
  return (
    <ItemStyled>
      <p>Schedule to sical media.</p>
      <img src="./img/illustration-schedule-posts.webp" alt="third" />
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 4 / 5;
  grid-row: 1 / span 3;
  background-color: #cb94f8;
  height: 420px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

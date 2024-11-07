import styled from "styled-components";

export default function Item2() {
  return (
    <ItemStyled>
      <h1>
        Social Media <span>10x </span>Faster with AI
      </h1>
      <img src="./img/illustration-five-stars.webp" alt="second" />
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  height: 200px;
  background-color: #7d07b4;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    width: 300px;
    text-align: center;
  }

  span {
    font-size: 32px;
    color: #ffc107;
  }
`;

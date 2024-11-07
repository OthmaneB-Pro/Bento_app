import styled from "styled-components";

export default function Item4() {
  return (
    <ItemStyled>
      <p>Write your content using AI</p>
      <img src="./img/illustration-ai-content.webp" alt="fourth" />
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 3 / span 3;
  background-color: #ffcb22;
  margin-top: 10px;
  height: 310px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

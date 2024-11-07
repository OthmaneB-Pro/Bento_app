import styled from "styled-components";

export default function Item1() {
  return (
    <ItemStyled>
      <p>
        Create and schedule content <span>quicker.</span>
      </p>
      <img src="./img/illustration-create-post.webp" alt="first" />
    </ItemStyled>
  );
}

const ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 2;
  grid-row: 1 / span 2;
  background-color: #f3f29a;
  height: 310px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #6b0fb6;
  }
`;

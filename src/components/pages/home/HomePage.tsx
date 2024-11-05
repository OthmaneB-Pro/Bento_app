import styled from "styled-components";

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="container">
        <div className="item1">Barre 1 (1x2)</div>
        <div className="item2">Barre 2 (2x1.5)</div>
        <div className="item3">Barre 3 (1x2 droite)</div>
        <div className="item4">Barre 4 (1x2 sous 1)</div>
        <div className="item5">Carré 1 (1x1)</div>
        <div className="item6">Carré 2 (1x1 sous carré 1)</div>
        <div className="item7">Carré 3 (1x1 à droite du carré 1)</div>
        <div className="item8">Barre 5 (2x1 en bas à droite)</div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
  .container {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(4, 140px);
    gap: 20px;
  }
  .item1 {
    grid-column: 1 / 2;
    grid-row: 1 / span 2;
    background-color: #4caf50;
    height: 310px;
    border-radius: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }

  .item2 {
    grid-column: 2 / span 2;
    grid-row: 1 / span 1;
    height: 200px;
    background-color: #2196f3;
    border-radius: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }

  .item3 {
    grid-column: 4 / 5;
    grid-row: 1 / span 3;
    background-color: #ffc107;
    height: 420px;
    border-radius: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }

  .item4 {
    grid-column: 1 / 2;
    grid-row: 3 / span 3;
    background-color: #ff5722;
    margin-top: 10px;
    height: 310px;
    border-radius: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }

  .item5 {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin-top: 60px;
    background-color: #9c27b0;
    height: 200px;
    border-radius: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }

  .item6 {
    grid-column: 2 / 3;
    grid-row: 3 / 6;
    background-color: #009688;
    margin-top: 120px;
    height: 200px;
    border-radius: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }

  .item7 {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    height: 200px;
    margin-top: 60px;
    background-color: #3f51b5;
    border-radius: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }

  .item8 {
    grid-column: 3 / 5;
    grid-row: 3 / 6;
    background-color: #795548;
    margin-top: 120px;
    height: 200px;
    border-radius: 15px;
    display : flex;
    justify-content: center;
    align-items: center;
  }
`;

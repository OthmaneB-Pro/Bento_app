import styled from "styled-components";

export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="container">
        <div className="item1">
          <p>
            Create and schedule content <span>quicker.</span>
          </p>
          <img src="./img/illustration-create-post.webp" alt="first" />
        </div>
        <div className="item2">
          <h1>
            Social Media <span>10x </span>Faster with AI
          </h1>
          <img src="./img/illustration-five-stars.webp" alt="second" />
        </div>
        <div className="item3">
          <p>Schedule to sical media.</p>
          <img src="./img/illustration-schedule-posts.webp" alt="third" />
        </div>
        <div className="item4">
          <p>Write your content using AI</p>
          <img src="./img/illustration-ai-content.webp" alt="fourth" />
        </div>
        <div className="item5">
          <img src="./img/illustration-multiple-platforms.webp" alt="fifth" />
          <p>Manage multiple platforms</p>
        </div>
        <div className="item6">
          <h1>+56% </h1>
          <img src="./img/illustration-audience-growth.webp" alt="sixth" />
        </div>
        <div className="item7">
          <p>Maintain a consistent schedule</p>
          <img
            src="./img/illustration-consistent-schedule.webp"
            alt="seventh"
          />
        </div>
        <div className="item8">
          <img src="./img/illustration-grow-followers.webp" alt="hexth" />
          <p>Grow your audience</p>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #ececec;
  height: 100vh;
  p {
    font-size: 24px;
    width: 150px;
    text-align: center;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(4, 140px);
    gap: 20px;

    img {
      width: 150px;
    }
  }
  .item1 {
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
  }

  .item2 {
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
  }

  .item3 {
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
  }

  .item4 {
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
  }

  .item5 {
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
  }

  .item6 {
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
  }

  .item7 {
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
  }

  .item8 {
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
  }
`;

import React from 'react'
import styled from 'styled-components';

function GameOverPage({playAgain}) {
    return (
        <StyledGameOverPage>
            <div>
                <img src="GameOverResources/game-over.svg" alt="GameOver"/>
                <h1>Tavs laiks ir beidzies!</h1>
                <button onClick={playAgain}>Spēlēt velreiz</button>
            </div>
        </StyledGameOverPage>
    )
}
const StyledGameOverPage = styled.div`
  background: linear-gradient(120deg, #efeae4, #ebe1d1);
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  h1{
    text-align: center;
    font-size: 4rem;
    margin-top: -30px;
    font-family: "Josefin Sans",sans-serif;
    margin-bottom: 30px;
  }
  img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 70px;
      align-items: center;
      width: 50vw;
      height: 50vh;
    }
  button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 70px;
    height: 75px;
    width: 220px;
    border-radius: 100px;
    border: none;
    font-family: "Josefin Sans", sans-serif;
    font-size: 26px;
    padding: 5px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    color: white;
    background: linear-gradient(120deg, #97ca93, #c4e0c0);
    background-size: 200% 200%;
    :hover{
    animation: jelly 1s;
    }
  }
  @keyframes jelly {
    25% {
      transform: scale(0.9, 1.1);
    }

    50% {
      transform: scale(1.1, 0.9);
    }

    75% {
      transform: scale(0.95, 1.05);
    }
  }
  @media(max-width: 648px){
    h1{
      font-size: 3rem;
    }
  }
  @media(max-width: 480px){
    img{
      width: 90%;
    }
    h1{
      font-size: 2rem;
    }
  }
  @media(max-height:568px){
    img{
      margin-top: -1px;
    }
  }
`;
export default GameOverPage
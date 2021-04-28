import React from 'react'
import styled from 'styled-components';
import Header from '../header/Header';
import MapImage from "../resources/europe-map.png";
import RandomisedQuestions from '../secondStage/RandomisedQuestions';

function SecondStage({ssQuestionState,setSsQuestionState, openSecondStageQuestion,ssQuestionVisible, setSsAnswer, ssAnswer, closeSecondStageQuestion}) {
    return (
        <StyledSecondStage>
            <Header />
            <div className="wrapper">
                <h1>Karte</h1>
                <p>Nospied, lai izpētītu!</p>
            </div>
            <div className="game__container">
                <img src={MapImage} alt="europe map"/>
                <RandomisedQuestions
                    setSsQuestionState={setSsQuestionState}
                    ssQuestionVisible={ssQuestionVisible}
                    ssAnswer={ssAnswer}
                    setSsAnswer={setSsAnswer}
                    ssQuestionState={ssQuestionState}
                    openSecondStageQuestion={openSecondStageQuestion}
                    closeSecondStageQuestion={closeSecondStageQuestion}
                />      
            </div>  
        </StyledSecondStage>
    )
}
const StyledSecondStage = styled.div`
  background: linear-gradient(120deg, #efeae4, #ebe1d1);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .wrapper {
    z-index: 10;
    height: 130px;
    width: 40%;
    border-radius: 15px;
    text-align: center;
    position: absolute;
    vertical-align: middle;
    display: inline-block;
    color: white;
    background: linear-gradient(120deg, #ffa52f, #ff8e00);
    top: 50px;
    padding: 10px;
    left: 30%;
    animation: Wrapper 1s, Wrapper 1s 6s reverse forwards, flicker1 1.5s infinite alternate;

    h1 {
      font-size: 42px;
      margin-bottom: 10px;
    }

    p {
      font-size: 30px;
      font-weight: 200;
    }
  }

  > .game__container {
    position: relative;
    width: 90%;
    max-width: 900px;

    > img {
      width: 100%;
    }
  }

  @keyframes flicker1 {

    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      box-shadow: 0 0 .5rem #fff,
      inset 0 0 .5rem #fff,
      0 0 2rem #ffaf00,
      inset 0 0 2rem #ffaf00,
      0 0 4rem #ffaf00,
      inset 0 0 4rem #ffaf00;
    }
    20%, 24%, 55% {
      box-shadow: none;
    }
  }
  @media (max-width: 998px) {
    .wrapper {
      h1 {
        font-size: 36px;
        margin-bottom: 10px;
      }

      p {
        font-size: 24px;
        font-weight: 200;
      }
    }
  }
  @media (max-width: 815px) {
    .wrapper {
      width: 60%;
      left: 20%;
      top: 35px;
    }

  }
  @media (max-width: 439px) {
    .wrapper {
      width: 90%;
      height: 110px;
      left: 5%;
    }
  }
`;

export default SecondStage

import React from 'react'
import styled from 'styled-components';

function CorrectAnswerPopup({setCorrectAnswerState, correctAnswerState}) {
    return (
        <StyledCheckPopup>
            <img src={`secondStageImages/${correctAnswerState.answeredCorrectly === true ? "check" : "redcross"}.svg`} alt="reward"/>
            <h2 id="header">{correctAnswerState.answeredCorrectly === true ? "Apsveicam, Jūs atbildējāt pareizi!" : "Diemžēl Jūs atbildējāt nepareizi!"}</h2>
            {correctAnswerState.answeredCorrectly === false && (
                <>
                <div className="correct">
                    <h2>Pareizā atbilde: <br/> <span>{correctAnswerState.correctAnswer}</span></h2>
                    <h4>Jautājums: <span>{correctAnswerState.activeQusetion}</span></h4>
                </div>
                </>
            )}

            <button onClick={() => {
                setCorrectAnswerState({shown: false, correctAnswer: "", xtraInfo: "", answeredCorrectly: false});
            }}>Aizvērt</button>
        </StyledCheckPopup>
    )
}

const StyledCheckPopup = styled.section`
  :root {
    --main-color: #9aca3c;

    --green: #495f41;
    --lightgreen: #c4e0c0;
    --darkblue: #3c3c58;
    --light-brown: #ebe1d1;
    --light-brown1: #efeae4;
    --bereza: #2c85a4;
    --lightbereza: #c3e5ed;
    --orange: #ffa52f;
    --darpink: #fd5679;
  }
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  position: absolute;
  width: 100%;
  border-radius: 15px;
  height: 100%;
  background: white;
  top: 0;
  left: 0;
  text-align: center;
  border: 5px solid #2c85a4;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;

  > img {
    width: 30vw;
    height: 30vh;
    max-width: 300px;
    margin-top: 30px;
  }

  .correct > h2 {
    padding: 10px 15px 0 15px;
    font-size: 30px;
    animation-name: hvr-bob-float, hvr-bob;
  }

  .correct > h2 > span {
    color: green;
  }

  .correct > h4 {
    margin: 30px 0;
    font-size: 18px;
    animation-name: hvr-bob-float, hvr-bob;

    span {
      font-style: italic;
      font-weight: normal;
    }
  }

  #header {
    margin-top: 15px;
    font-size: 36px;
  }

  .correct {
    background-color: whitesmoke;
    border-radius: 15px;
    margin-top: 50px;
    height: fit-content;
    width: 60%;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    animation-name: hvr-bob-float, hvr-bob;
    animation-duration: .3s, 1.5s;
    animation-delay: 0s, .3s;
    animation-timing-function: ease-out, ease-in-out;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: forwards;
    animation-direction: normal, alternate;
  }

  > h3 {
    padding: 10px;
    margin: 10px 0;

    > strong {
      background: #46fb26;
      padding: 30px;
      color: #3b3b3b;
    }
  }

  > button {
    position: absolute;
    bottom: 21px;
    width: 40%;
    height: 50px;
    border: none;
    background-color: #459d31;
    color: white;
    font-family: "Josefin Sans", sans-serif;
    font-size: 20px;

    :hover {
      background-color: #495f41;
    }
  }
  @keyframes levitating {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @media (max-width: 799px) {
    .correct {
      margin-top: 30px;
    }

    .correct > h2 {
      font-size: 24px;
    }

    .correct > h4 {
      font-size: 16px;
    }
  }

  @media (max-width: 820px) {
    #header {
      margin-top: 0px;
    }
  }
  @media(max-width: 739px){
    .correct {
      margin-top: 30px;
    }

    .correct > h2 {
      font-size: 20px;
    }

    .correct > h4 {
      font-size: 14px;
    }
  }
  @media(max-width: 676px){
    .correct > h4 {
      margin: 10px 0;
    }
  }
  @media(max-width: 649px){
    img{
      margin-top: -10px;
    }
  }

  @media (max-width: 626px) {
    #header {
      margin-top: -30px;
      font-size: 30px;
    }
  }
  @media(max-width: 532px){
    .correct{
      width: 95%;
    }
  }
  @media (max-width: 520px) {
    #header {
      font-size: 26px;
    }
  }
  @media (max-width: 530px) {
    img {
      margin-top: -30px;
    }
  }
  @media(max-width: 476px){
    .correct{
      margin-top: 10px;
    }
  }
  @media (max-width: 451px) {
    #header {
      font-size: 24px;
      margin-top: -50px;
    }
  }
  @media(max-width: 436px){
    button{
      bottom: 10px;
    }
  }
  @media (max-width: 423px) {
    #header {
      font-size: 20px;
    }
  }
  @media(max-width: 408px){
    img{
      margin-top: -50px;
    }
  }
  @media(max-width: 391px){
    img {
      height: 25vh;
      width: 25vw;
    }
    .correct > h2 {
      font-size: 20px;
    }

    .correct > h4 {
      font-size: 12px;
    }
    button{
      height: 30px;
      bottom: 5px;
    }
  }
  @media(max-width: 360px){
    img {
      height: 25vh;
      width: 25vw;
      margin-top: -30px;
    }
    #header{
      margin-top: -35px;
    }
  }
  @media(max-width: 373px){
    .correct > h2 {
      font-size: 16px;
    }
  }
  @media (max-width: 349px) {
    height: 100%;
    img {
      height: 25vh;
      width: 25vw;
      margin-top: -30px;
      margin-bottom: 20px;
    }
    #header {
      font-size: 18px;
    }
  }
`;

export default CorrectAnswerPopup

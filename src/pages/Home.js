import React from "react";
import styled from "styled-components";
import Spinner from "../spinner/Spinner";
import FirstStageQuestions from "../firstStage/FirstStageQuestions";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/gameSlice";
import Header from "../header/Header";

function Home({
  SpinTheWheel,
  wheelRef,
  spinAgain,
  firstPartAnswer,
  answerCounter,
  showTreasureChest,
  openTreasureChest,
  loadingPopup
}) {
  const ThemeName = useSelector(selectTheme);

  return (
    <HomePage>
      <Header />
      {showTreasureChest ? (
        <div className={!openTreasureChest ? "shaking_chest" : "open_chest"}>
          <img src={openTreasureChest ? "firstStageResources/treasureopen.svg" : "firstStageResources/treasure.svg"} alt="chest"/>
        </div>
      ) : (
        <SpinnerContainer>
          <SpinnerArrow/>
          <Spinner wheelRef={wheelRef} />
          <button disabled={!spinAgain} onClick={SpinTheWheel}>Iegriezt</button>
        </SpinnerContainer>
      )}

      <div
        className={`question__popup ${
          ThemeName !== "" && spinAgain ? "open__question--popup" : ""
        }`}
      >
        <FirstStageQuestions
          answerCounter={answerCounter}
          firstPartAnswer={firstPartAnswer}
        />
      </div>
      <div className={`loading__popup ${loadingPopup && "loading__popup--active"}`}>
          <div className="loading_animation">
              <div/>
              <div/>
              <div/>
              <div/>
          </div>
        <h3>Lādējas...</h3>
      </div>
    </HomePage>
  );
}
const HomePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden !important;
  height: 100vh;
  background: #ebe1d1;
  width: 100%;
  justify-content: center;
  >.loading__popup{
    width: 90%;
    height: fit-content;
    max-width: 400px;
    background: #f5f5f5;
    padding: 140px 10px;
    border-radius:15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    opacity: 0;
    z-index: -1;
    max-height: 400px;
  }
  >.loading__popup> h3{
    position: absolute;
    margin-top: 130px;
    font-size: 28px;
    font-family: "Josefin Sans", sans-serif;
  }
  >.loading__popup--active{
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 14;
  }
  >.loading__popup--active > .loading_animation{
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
  }
  >.loading__popup--active > .loading_animation > div{
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #9aca3c;
    border-radius: 50%;
    animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #9aca3c transparent transparent transparent;
  }
  .loading__popup--active > .loading_animation > div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .loading__popup--active > .loading_animation > div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .loading__popup--active > .loading_animation > div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  > .question__popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    display: flex;
    flex-direction: column;
    background: #ebe1d1;
    transform: translateY(50%);
    opacity: 0;
    overflow: hidden;
    transition: all 1s ease;
  }
  > .open__question--popup {
    transform: translateY(0%);
    opacity: 1;
    z-index: 10;
  }
  >.shaking_chest{
    animation:shakeChest 0.5s;
    animation-iteration-count: infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    >img{
      width: 90%;
      max-width: 500px;
    }
  }
  >.open_chest{
    display: flex;
    align-items: center;
    justify-content: center;
    >img{
      width: 90%;
      max-width: 500px;
    }
  }
  @keyframes shakeChest{
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;
const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  > button {
    font-family: "Josefin Sans", sans-serif;
    height: 80px;
    width:80px;
    margin-top: 210px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius:50%;
    z-index: 5;
    border: 5px solid lightgray;
    box-shadow:rgba(0,0,0,0.1) 0px 3px 0px;
    -webkit-user-select: none;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    :hover{
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    :active{
      border: 5px solid whitesmoke;
      background-color: lightgray;
    }
    :disabled{
      border: 5px solid whitesmoke;
      background-color: #dbd4d4;
      :hover{
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
    > p {
      font-size: 18px;
      color: #2f2f2f;
      padding-left: 2px;
      padding-top: 5px;
    }
  }
  @media(max-width: 456px){
    >button{
      height: 65px;
      width:65px;
      border: 3px solid lightgray;
    }
  }
  @media(max-height: 568px){
    >button{
      margin-top: 155px;
    }
  }
`;
const SpinnerArrow = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid  #3c3c58;
  top: 26%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 10;
  color:  #3c3c58;
  @media(max-width: 594px){
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #3c3c58;
  }
  @media(max-width:360px){
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #3c3c58;
  }
  @media(max-width: 800px){
    top: 35%;
  }
  @media(max-width: 768px){
    top: 33%;
  }
  @media(max-width: 750px){
    top: 30%;
  }
  @media(max-width: 664px){
    top: 35%;
  }
  @media(max-width: 620px){
    top: 37%;
  }
  @media(max-width: 600px){
    top: 37%;
  }
  @media(max-width: 552px){
    top: 27%;
  }
  @media(max-width: 544px){
    top: 32%;
  }
  @media(max-width: 444px){
    top: 38%;
  }
  @media(max-width: 438px){
    top: 37%;
  }
  @media(max-width: 414px){
    top: 40%;
  }
  @media(max-width: 375px){
    top: 40%;
  }
  @media(max-width: 372px){
    top: 37%;
  }
  @media(max-width: 360px){
    top: 41%;
  }
  @media(max-width: 320px){
    top: 38%;
  }
`;

export default Home;
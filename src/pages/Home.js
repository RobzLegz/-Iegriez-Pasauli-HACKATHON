import React from "react";
import styled from "styled-components";
import Spinner from "../spinner/Spinner";
import FortuneWheel from "../resources/fortune-wheel.svg";
import FirstStageQuestions from "../firstStage/FirstStageQuestions";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/gameSlice";

function Home({
  SpinTheWheel,
  wheelRef,
  spinAgain,
  firstPartAnswer,
  answerCounter,
  showTreasureChest,
  openTreasureChest
}) {
  const ThemeName = useSelector(selectTheme);

  return (
    <HomePage>
      {showTreasureChest ? (
        <div className={!openTreasureChest ? "shaking_chest" : "open_chest"}>
          <img src={openTreasureChest ? "firstStageResources/treasureopen.svg" : "firstStageResources/treasure.svg"} alt="chest"/>
        </div>
      ) : (
        <SpinnerContainer>
          <SpinnerArrow></SpinnerArrow>
          <Spinner wheelRef={wheelRef} />
          <button disabled={!spinAgain} onClick={SpinTheWheel}>
            <img src={FortuneWheel} alt="Fortune wheel" />
            <p>Iegriezt</p>
          </button>
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
    </HomePage>
  );
}
const HomePage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  background: #ebe1d1;
  width: 100%;
  justify-content: center;
  >.shaking_chest{
    animation: shakeChest 0.3s ease infinite;
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
`;
const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  > button {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #3c3c58;
    > p {
      margin-left: 5px;
    }
  }
  @keyframes shakeChest{
    0%{
      transform: rotate(-2deg);
    }
    50%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(2deg);
    }
  }
`;
const SpinnerArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #3c3c58;
  margin-bottom: -10px;
  z-index: 10;
`;

export default Home;
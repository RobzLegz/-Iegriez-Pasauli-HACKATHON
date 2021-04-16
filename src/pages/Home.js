import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import Spinner from "../spinner/Spinner";
import FortuneWheel from "../resources/fortune-wheel.svg";
import FirstStageQuestions from "../firstStage/FirstStageQuestions";
import { useSelector } from "react-redux";
import { selectTheme } from "../features/gameSlice";

function Home({ SpinTheWheel, wheelRef, spinAgain }) {
  const ThemeName = useSelector(selectTheme);

  return (
    <HomePage>
      <SpinnerContainer>
        <SpinnerArrow></SpinnerArrow>
        <Spinner wheelRef={wheelRef} />
        <Button disabled={!spinAgain} onClick={SpinTheWheel}>
          <img src={FortuneWheel} alt="Fortune wheel" />
          <p>Iegriezt</p>
        </Button>
      </SpinnerContainer>
      <div
        className={`question__popup ${
          ThemeName !== "" && spinAgain ? "open__question--popup" : ""
        }`}
      >
        <FirstStageQuestions />
      </div>
    </HomePage>
  );
}
const HomePage = styled.div`
  padding: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  > .question__popup {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    display: flex;
    flex-direction: column;
    padding: 100px 200px;
    background: #ebe1d1;
    transform: translateY(50%);
    opacity: 0;
    transition: all 0.3s ease;
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

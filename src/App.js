import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  findImage,
  addThemeQuestions,
  selectQuestions,
} from "./features/gameSlice";
import { checkSecondStage, startSecondStage } from "./features/secondStageSlice";
import { addPoints  } from "./features/userSlice";
import Home from "./pages/Home";
import SecondStage from "./pages/SecondStage";
import GlobalStyles from "./styles/GlobalStyles";
import {wheelStops} from "./data/wheelOptions";

function App() {
  const [spinAgain, setSpinAgain] = useState(true);
  const [answerCounter, setAnswerCounter] = useState(0);

  const activeQuestions = useSelector(selectQuestions);
  const secondStageStarted = useSelector(checkSecondStage);

  const dispatch = useDispatch();
  const wheelRef = useRef();

  //Izvēlas nejaušu opciju, uz kuras rats uzgriezīsies
  let randomStop = wheelStops[Math.floor(Math.random() * 5) + 0];

  //Iegriež ratu
  const SpinTheWheel = () => {
    setSpinAgain(false); //Ja rats griežas, neļaut iegriezt vēlreiz
    wheelRef.current.style.transform = `rotate(${randomStop.deg}deg)`;
    dispatch(startGame(randomStop.value)); //Aizsūta jautājumu tēmu uz Redux
    dispatch(findImage(randomStop.image));
    dispatch(addThemeQuestions(randomStop.questions));
    setTimeout(() => {
      setSpinAgain(true); //Kad rats beidz griezties, atļaut iegriezt velreiz
    }, 6000);
  };

  //atbild uz pirmās daļas jautājumu
  const firstPartAnswer = (value) => {
    if (answerCounter > 3) {
      //kad atbild uz visiem jautājumiem, sāk otro spēles daļu
      dispatch(startSecondStage());
      return;
    }
    setAnswerCounter(answerCounter + 1);
    if(activeQuestions[answerCounter].a === value) {
      //ja atbild pareizi, palielina punktu skaitu
      dispatch(addPoints());
    }
  };

  return (
    <div>
      <GlobalStyles />
      {secondStageStarted ? (
        <SecondStage />
      ) : (
        <Home
          answerCounter={answerCounter}
          firstPartAnswer={firstPartAnswer}
          spinAgain={spinAgain}
          wheelRef={wheelRef}
          SpinTheWheel={SpinTheWheel}
        />
      )}
    </div>
  );
}

export default App;

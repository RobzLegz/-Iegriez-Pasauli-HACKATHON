import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  findImage,
  addThemeQuestions,
  selectQuestions,
} from "./features/gameSlice";
import { checkSecondStage, setActiveCorrectAnswer, setActiveAnswers, startSecondStage, setAllQs, setActiveQuestion } from "./features/secondStageSlice";
import { addPoints } from "./features/userSlice";
import Home from "./pages/Home";
import SecondStage from "./pages/SecondStage";
import GlobalStyles from "./styles/GlobalStyles";
import {wheelStops} from "./data/wheelOptions";

function App() {
  const [spinAgain, setSpinAgain] = useState(true);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [ssQuestionState, setSsQuestionState] = useState(false);
  const [ssAnswer, setSsAnswer] = useState("");
  const [ssCheckingId, setSsCheckingId] = useState(null);
  const [ssQuestionVisible, setSsQuestionVisible] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
  });

  console.log(ssQuestionVisible);

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
  const firstPartAnswer = (answer) => {
    if (answerCounter > 3) {
      //kad atbild uz visiem jautājumiem, sāk otro spēles daļu
      dispatch(startSecondStage());
      //Aizsūta otrās daļas jautājumus uz Redux
      dispatch(setAllQs(randomStop.secondStageQuestions));
      return;
    }
    setAnswerCounter(answerCounter + 1);
    if(activeQuestions[answerCounter].a === answer) {
      //ja atbild pareizi, palielina punktu skaitu
      dispatch(addPoints());
    }
  };

  //atver jautājuma popupu
  const openSecondStageQuestion = (question, answerOptions, correctAnswer, id) => {
    //atrod bildītes id
    setSsCheckingId(id);
    //nosūta jautājuma info uz Redux
    dispatch(setActiveQuestion(question));
    dispatch(setActiveAnswers(answerOptions));
    dispatch(setActiveCorrectAnswer(correctAnswer));
    //atver jautājuma popupu
    setSsQuestionState(true);
  }

  const hideAnsweredQuestions = () => {
    setSsQuestionVisible({
      0: ssQuestionVisible[0], 
      1: ssQuestionVisible[1],
      2: ssQuestionVisible[2],
      3: ssQuestionVisible[3],
      4: ssQuestionVisible[4],
      5: ssQuestionVisible[5],
      6: ssQuestionVisible[6],
      7: ssQuestionVisible[7],
      8: ssQuestionVisible[8],
      9: ssQuestionVisible[9],
      10: ssQuestionVisible[10],
      11: ssQuestionVisible[11],
      12: ssQuestionVisible[12],
      13: ssQuestionVisible[13],
      14: ssQuestionVisible[14],
      [ssCheckingId]: false
    });
  }

  //pārbauda otrās daļas atbildi
  const closeSecondStageQuestion = (e, correct) => {
    e.preventDefault();
    if(ssAnswer === ""){
      return;
    }else if(ssAnswer === correct){
      //Ja atbild pareizi, palielina punktu skaitu
      dispatch(addPoints());
    }
    hideAnsweredQuestions();
    setSsAnswer("");
    //aizver jautājuma popupu
    setSsQuestionState(false);
  }

  return (
    <div>
      <GlobalStyles />
      {secondStageStarted ? (
        <SecondStage
          ssAnswer={ssAnswer}
          setSsAnswer={setSsAnswer}
          ssQuestionState={ssQuestionState}
          openSecondStageQuestion={openSecondStageQuestion}
          closeSecondStageQuestion={closeSecondStageQuestion}
        />
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

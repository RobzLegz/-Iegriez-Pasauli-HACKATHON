import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  findImage,
  addThemeQuestions,
  selectQuestions,
  addSecond,
} from "./features/gameSlice";
import { checkSecondStage, setActiveCorrectAnswer, setActiveAnswers, startSecondStage, setAllQs, setActiveQuestion } from "./features/secondStageSlice";
import { addPoint, addPoints, selectPoints } from "./features/userSlice";
import Home from "./pages/Home";
import SecondStage from "./pages/SecondStage";
import GlobalStyles from "./styles/GlobalStyles";
import ThirdStage from "./pages/ThirdStage";
import { finish, selectGameEnded, selecthasfinished, stopGame } from "./features/finishSlice";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import axios from "axios";
import GameOverPage from "./pages/GameOverPage";
import { wheelStops } from "./data/wheelOptions";

function App() {
  const [spinAgain, setSpinAgain] = useState(true);
  const [answerCounter, setAnswerCounter] = useState(0);
  const [ssQuestionState, setSsQuestionState] = useState(false);
  const [ssAnswer, setSsAnswer] = useState("");
  const [ssCheckingId, setSsCheckingId] = useState(undefined);
  const [ssAnswerCounter, setSsAnswerCounter] = useState(0);
  const [thirdStageStarted, setThirdStageStarted] = useState(false);
  const [thirdStageFoundWords, setThirdStageFoundWords] = useState([]);
  const [instructionState, setInstructionState] = useState(false);
  const [tsIncorrectWords] = useState([]);//nepareizie trešās daļas jēdzieni
  const [tsCorrectWords, setTsCorrectWords] = useState([]);//pareizie trešās daļas jēdzieni
  const [tsCountdownTimer, setTsCountdownTimer] = useState(7);
  const [startWordFlow, setStartWordFlow] = useState(false);
  const [finishCountDown, setFinishCountDown] = useState(15);
  const [foundWordObject, setFoundWordObject] = useState([]);
  const [showTreasureChest, setShowTreasureChest] = useState(false);
  const [openTreasureChest, setOpenTreasureChest] = useState(false);
  const [leaderboardUsername, setLeaderboardUsername] = useState("");
  const [leaderboardState, setLeaderboardState] = useState(false);
  const [leaderboardUsers, setLeaderboardUsers] = useState([]);
  const [randomStop,setRandomStop] = useState(0);
  const [spinBtnCounter, setSpinBtnCounter] = useState(0);
  const [gameCountDownTimer, setGameCountDownTimer] = useState(900);
  const [leaderboardPopup, setLeaderboardPopup] = useState(false);
  const [loadingPopup, setLoadingPopup] = useState(true);
  const [finishedGame, setFinishedGame] = useState(false);
  const [correctAnswerState, setCorrectAnswerState] = useState({
    shown: false, 
    correctAnswer: "",
    xtraInfo: "",
    answeredCorrectly: false,
    activeQusetion: ""
  })
  const [indexGroupMap] = useState({
    'banana': 0,
    'shirt': 1,
    "longboard": 2,
    "headphones": 3,
    "burger": 4
  })

  const activeQuestions = useSelector(selectQuestions);
  const secondStageStarted = useSelector(checkSecondStage);
  const hasFinished = useSelector(selecthasfinished);
  const points = useSelector(selectPoints);
  const gameOver = useSelector(selectGameEnded);

  const dispatch = useDispatch();
  const wheelRef = useRef();

  useEffect(() => {
    if(loadingPopup){
      axios.get("https://iegriez-pasauli-api.herokuapp.com/api/questions/").then((res) => {
        for(const questionSelector of res.data){
          if(questionSelector.sub_group === "N/A"){
            //Atgriež pirmās daļas jautājumus
            wheelStops[indexGroupMap[questionSelector.group.toLowerCase()]].questions.push(
              {q: questionSelector.q, a: questionSelector.options[0].correct === true ? false : true}
            )
          }else{
            //Atgriež otrās daļas jautājumus
            wheelStops[indexGroupMap[questionSelector.group.toLowerCase()]].secondStageQuestions[questionSelector.sub_group].push(
              {
                image: questionSelector.image, 
                q: questionSelector.q, 
                xtraInfo: questionSelector.xtraInfo,
                answerOptions: questionSelector.options.map((option) => 
                  option.choice_text
                ),
                correctAnswer: questionSelector.options.find((option) => {
                  return option.correct;
                })?.choice_text,
              }
            )
          }
        }
      }).then(() => {
        axios.get("https://iegriez-pasauli-api.herokuapp.com/api/thirdstage/").then((res) => {
          for(const thirdStageOp of res.data){
            if(thirdStageOp.correct === false){
              //Atrod trešās daļas nepareizo vārdu opcijas
              tsIncorrectWords.push(
                {
                  text: thirdStageOp.q, 
                  color: thirdStageOp.color,
                  fontSize: thirdStageOp.fontsize,
                  top: Math.floor((Math.random() * 70) + 20), 
                  left: Math.floor((Math.random() * 70) + 20),               
                }
              )
            }else{
              //Atrod trešās daļas pareizo vārdu opcijas
              tsCorrectWords.push(
                {
                  text: thirdStageOp.q, 
                  color: thirdStageOp.color,
                  fontSize: thirdStageOp.fontsize,
                  bottom: Math.floor((Math.random() * 70) + 20), 
                  right: Math.floor((Math.random() * 70) + 20)              
                }
              )
            }
          }
        }).then(() => {
          setRandomStop(wheelStops[Math.floor(Math.random() * 5)]);//Izvēlas nejaušu jautājumu daļu
          setLoadingPopup(false);//Nolaiž spēles lādēšanās popupu
        })
      })
    }
  }, [indexGroupMap, tsIncorrectWords, tsCorrectWords, loadingPopup]);

  useEffect(() => {
    if(!hasFinished){
      //izpildīt, ja spēle nav beigusies
      if(tsCountdownTimer > 0 && thirdStageStarted){
        setTimeout(() => {
          //atskaita sākuma laiku (3, 2, 1)
          setTsCountdownTimer(tsCountdownTimer - 1);
        }, 1000);
      }else if(tsCountdownTimer === 0){
        //kad (3, 2, 1) atskaites taimeris ir 0, tad izpildīt šo:
        setStartWordFlow(true); //sāk vārdu krišanas spēli
        setTimeout(() => {
          //atskaitīt dotās sekundes līdz finišam
          setFinishCountDown(finishCountDown - 1);
        }, 1000);
        if(finishCountDown === 0){
          //kad finiša laiks sasniedz 0 tad pasaka ka ir finišējis
          setFinishedGame(true);
          dispatch(finish());
          return;
        }
      }
    }else{
      return;
    }    
  }, [thirdStageStarted, tsCountdownTimer, finishCountDown, dispatch, thirdStageFoundWords, hasFinished, foundWordObject]);

  useEffect(() => {
    if(secondStageStarted && !finishedGame){
      //Kad sākas otrās daļa, sākt taimeri
      setTimeout(() => {
        if(gameCountDownTimer <= 0){
          //kad beidzas laiks, aizsūtīt uz game over lapu
          dispatch(stopGame());
          return;
        }
        setGameCountDownTimer(gameCountDownTimer - 1);
        dispatch(addSecond());
      }, 1000);
    }else{
      return;
    }
  }, [gameCountDownTimer, secondStageStarted, dispatch, finishedGame]);

  //Iegriež ratu
  const SpinTheWheel = () => {
    if(localStorage.getItem("lastTheme") === randomStop.value){
      setSpinBtnCounter(spinBtnCounter + 1);
      return;
    }else{
      setSpinAgain(false); //Ja rats griežas, neļaut iegriezt vēlreiz
      wheelRef.current.style.transform = `rotate(${randomStop.deg}deg)`;//iegriež ratu
      dispatch(startGame(randomStop.value)); //Aizsūta jautājumu tēmu uz Redux
      dispatch(findImage(randomStop.image));
      dispatch(addThemeQuestions(randomStop.questions));
      dispatch(setAllQs(randomStop.secondStageQuestions));//Aizsūta otrās daļas jautājumus uz Redux
      setTimeout(() => {
        setShowTreasureChest(true); //Kad rats beidz griezties, parādīt dārgumu lādi
      }, 6000);
      setTimeout(() => {
        setOpenTreasureChest(true);
      }, 8000);
      setTimeout(() => {
        setSpinAgain(true);
      }, 8500)
    }      
  };

  //atbild uz pirmās daļas jautājumu
  const firstPartAnswer = (answer) => {
    setAnswerCounter(answerCounter + 1);
    if(activeQuestions[answerCounter].a === answer) {
      //ja atbild pareizi, palielina punktu skaitu
      dispatch(addPoint());
    }
    if (answerCounter >= 4) {
      //kad atbild uz visiem jautājumiem, sāk otro spēles daļu
      dispatch(startSecondStage());
      return;
    }
  };

  //atver jautājuma popupu
  const openSecondStageQuestion = (question, answerOptions, correctAnswer, id, xtraInfo) => {
    //atrod jautājuma id
    setSsCheckingId(id);
    //nosūta jautājuma info uz Redux
    dispatch(setActiveQuestion(question));
    dispatch(setActiveAnswers(answerOptions));
    dispatch(setActiveCorrectAnswer(correctAnswer));
    //atver jautājuma popupu
    setSsQuestionState(true);
    setCorrectAnswerState({
      shown: false, 
      correctAnswer: correctAnswer, 
      xtraInfo: xtraInfo, 
      answeredCorrectly: false, 
      activeQusetion: question,
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
      setCorrectAnswerState({
        shown: true, 
        correctAnswer: correctAnswerState.correctAnswer, 
        xtraInfo: correctAnswerState.xtraInfo,
        answeredCorrectly: true,
        activeQusetion: correctAnswerState.activeQusetion
      });
    }else if(ssAnswer !== correct){
      setCorrectAnswerState({
        shown: true, 
        correctAnswer: correctAnswerState.correctAnswer, 
        xtraInfo: correctAnswerState.xtraInfo,
        answeredCorrectly: false,
        activeQusetion: correctAnswerState.activeQusetion
      });
    }
    setSsAnswerCounter(ssAnswerCounter + 1);
    if(ssAnswerCounter === 14){
      startThirdStage();
    }
    document.getElementById(`visible${ssCheckingId}`).style.display = "none";//kad atbild uz jautājumu neļaut vēlreiz uzspiest
    setSsAnswer("");
    //aizver jautājuma popupu
    setSsQuestionState(false);
  }

  //sāk trešo spēles daļu
  const startThirdStage = () => {
    setThirdStageStarted(true);    
  }

  //kad noklikšķina uz pareizo vārdu izpildās:
  const clickWord = (foundWord) => {
    setFoundWordObject([foundWord.text, foundWord.bottom, foundWord.right, foundWord.id])
    setThirdStageFoundWords([...thirdStageFoundWords, foundWordObject]); //pieliek noklikšķināto vārdu atrasto vārdu masīvam
    setTsCorrectWords(tsCorrectWords.filter((txt) => txt !== foundWord)); //noņem noklikšķināto vārdu no pareizo vārdu masīva
    dispatch(addPoint()); //palielina punktu skaitu
  }

  const clickIncorrectWord = (index) => {
    document.getElementById(`incorrect__${index}`).style.color = "red";
  }

  //Spēlēt vēlreiz
  const playAgain = () => {
    localStorage.setItem("lastTheme", randomStop.value);//Aizsūta iepriekšējo tēmu uz localstorage
    window.location.reload();
  }

  const addToLeaderboard = (e, role) => {
    e.preventDefault();
    if(leaderboardUsername !== ""){
      setLeaderboardPopup(true);
      axios.post("https://iegriez-pasauli-api.herokuapp.com/api/members/", {"username": leaderboardUsername, "score": points, "role": role}).then(() => {
        axios.get("https://iegriez-pasauli-api.herokuapp.com/api/members/").then((res) => {
          setLeaderboardUsers(res.data);
        })
      })      
    }
  }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <audio autoPlay loop>
        <source src="landingPageResources/iegriez_pasauli.mp3" type="audio/mp3"/>
      </audio>
      <Switch>
        <Route path="/game">
          {gameOver ? (
            <GameOverPage playAgain={playAgain} />
          ) : (
            <>
              {thirdStageStarted ? (
                <ThirdStage
                  clickIncorrectWord={clickIncorrectWord}
                  leaderboardUsers={leaderboardUsers}
                  leaderboardPopup={leaderboardPopup}
                  leaderboardUsername={leaderboardUsername}
                  setLeaderboardUsername={setLeaderboardUsername}
                  addToLeaderboard={addToLeaderboard}
                  leaderboardState={leaderboardState}
                  setLeaderboardState={setLeaderboardState}
                  playAgain={playAgain}
                  finishCountDown={finishCountDown}
                  thirdStageFoundWords={thirdStageFoundWords}
                  clickWord={clickWord}
                  startWordFlow={startWordFlow}
                  tsCountdownTimer={tsCountdownTimer}
                  tsCorrectWords={tsCorrectWords}
                  tsIncorrectWords={tsIncorrectWords}
                />
              ) : (
                <>
                  {secondStageStarted ? (
                    <SecondStage
                      correctAnswerState={correctAnswerState}
                      setCorrectAnswerState={setCorrectAnswerState}
                      setSsQuestionState={setSsQuestionState}
                      ssAnswer={ssAnswer}
                      setSsAnswer={setSsAnswer}
                      ssQuestionState={ssQuestionState}
                      openSecondStageQuestion={openSecondStageQuestion}
                      closeSecondStageQuestion={closeSecondStageQuestion}
                    />
                  ) : (
                    <Home
                      loadingPopup={loadingPopup}
                      openTreasureChest={openTreasureChest}
                      showTreasureChest={showTreasureChest}
                      answerCounter={answerCounter}
                      firstPartAnswer={firstPartAnswer}
                      spinAgain={spinAgain}
                      wheelRef={wheelRef}
                      SpinTheWheel={SpinTheWheel}
                    />
                  )}
                </>
              )}
            </>
          )}
        </Route>
        <Route path="/">
          <LandingPage
            instructionState={instructionState}
            setInstructionState={setInstructionState}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  findImage,
  addThemeQuestions,
  selectQuestions,
  selectThemeImage,
  addSecond,
  selectGameSeconds,
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
import LoginPage from "./pages/LoginPage";
import Cookies from "universal-cookie";
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
  //nepareizie trešās daļas jēdzieni
  const [tsIncorrectWords] = useState([
    {text: "nešķiro atkritumus", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#9aca3c", fontSize: "3rem"},
    {text: "tērē ūdeni", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#495f41", fontSize: "2.5rem"},
    {text: "pērc jaunu", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "rgb(212,138,9)", fontSize: "2rem"},
    {text: "izmanto ķīmiju", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#3c3c58", fontSize: "1.8rem"},
    {text: "neremontē", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#1fbcd8", fontSize: "2.5rem"},
    {text: "nepērc vietējo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#2c85a4", fontSize: "rem"},
    {text: "nepārstrādā", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#c3e5ed", fontSize: "2.7rem"},
    {text: "nelabo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#ffa52f", fontSize: "2.7rem"},
    {text: "nešķiro atkritumus", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#fd5679", fontSize: "2.5rem"},
    {text: "pērc jaunu", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#2032d4", fontSize: "1.6rem"},
    {text: "nešķiro", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#25bcd6", fontSize: "3rem"},
    {text: "piesārņo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#51ca19", fontSize: "2rem"},
    {text: "pērc vairāk", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#51ca20", fontSize: "2.6rem"},
  ]);
  //pareizie trešās daļas jēdzieni
  const [tsCorrectWords, setTsCorrectWords] = useState([
    {text: "remontē", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#9aca3c", fontSize: "3rem"},
    {text: "salabo", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#b4b413", fontSize: "1.6rem"},
    {text: "sašuj", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02e2e", fontSize: "2.7rem"},
    {text: "salāpi", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#74be12", fontSize: "1.5rem"},
    {text: "šķiro", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#2c85a4", fontSize: "2rem"},
    {text: "atdod", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#8d24ca", fontSize: "3rem"},
    {text: "aizņemies", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02eb6", fontSize: "2.7rem"},
    {text: "iestādi", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#4f0f0f", fontSize: "2.5rem"},
    {text: "audzē", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02e2f", fontSize: "1.6rem"},
    {text: "pārstrādā", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#2032d4", fontSize: "3rem"},
    {text: "ēd vietējo", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#1fbcd8", fontSize: "1.4rem"},
    {text: "samal", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#51ca20", fontSize: "2.5rem"},
  ])
  const [tsCountdownTimer, setTsCountdownTimer] = useState(7);
  const [startWordFlow, setStartWordFlow] = useState(false);
  const [finishCountDown, setFinishCountDown] = useState(15);
  const [foundWordObject, setFoundWordObject] = useState([]);
  const [showTreasureChest, setShowTreasureChest] = useState(false);
  const [openTreasureChest, setOpenTreasureChest] = useState(false);
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [leaderboardUsername, setLeaderboardUsername] = useState("");
  const [leaderboardState, setLeaderboardState] = useState(false);
  const [leaderboardUsers, setLeaderboardUsers] = useState([]);
  const [randomStop,setRandomStop] = useState(0);
  const [spinBtnCounter, setSpinBtnCounter] = useState(0);
  const [gameCountDownTimer, setGameCountDownTimer] = useState(900);
  const [leaderboardPopup, setLeaderboardPopup] = useState(false);
  const [loadingPopup, setLoadingPopup] = useState(false);
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

  const themeImage = useSelector(selectThemeImage);
  const activeQuestions = useSelector(selectQuestions);
  const secondStageStarted = useSelector(checkSecondStage);
  const hasFinished = useSelector(selecthasfinished);
  const points = useSelector(selectPoints);
  const gameOver = useSelector(selectGameEnded);
  const gameTime = useSelector(selectGameSeconds);

  const dispatch = useDispatch();
  const wheelRef = useRef();

  const cookies = new Cookies();
  
  useEffect(() => {
    if(themeImage !== ""){
      setTimeout(() => {
        dispatch(addSecond());
      }, 1000);
    }    
  }, [themeImage, gameTime, dispatch])

  useEffect(() => {
    setLoadingPopup(true);
    axios.get("https://iegriez-pasauli-api.herokuapp.com/api/questions/").then((res) => {
      for(const questionSelector of res.data){
        if(questionSelector.sub_group === "N/A"){
          wheelStops[indexGroupMap[questionSelector.group.toLowerCase()]].questions.push(
            {q: questionSelector.q, a: questionSelector.options[0].correct === true ? false : true}
          )
        }else{
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
      setRandomStop(wheelStops[Math.floor(Math.random() * 5)]);
      setLoadingPopup(false);
    })
  }, [indexGroupMap]);

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
          dispatch(finish());
          return;
        }
      }
    }else{
      return;
    }    
  }, [thirdStageStarted, tsCountdownTimer, finishCountDown, dispatch, thirdStageFoundWords, hasFinished, foundWordObject]);

  useEffect(() => {
    if(secondStageStarted){
      //Kad sākas otrās daļa, sākt taimeri
      setTimeout(() => {
        if(gameCountDownTimer <= 0){
          //kad beidzas laiks, aizsūtīt uz game over lapu
          dispatch(stopGame());
          return;
        }
        setGameCountDownTimer(gameCountDownTimer - 1);
      }, 1000);
    }
  }, [gameCountDownTimer, secondStageStarted, dispatch]);

  //Iegriež ratu
  const SpinTheWheel = () => {
    if(randomStop){
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
    setTsCorrectWords(tsCorrectWords.filter(txt => txt !== foundWord)); //noņem noklikšķināto vārdu no pareizo vārdu masīva
    dispatch(addPoint()); //palielina punktu skaitu
  }

  //Spēlēt vēlreiz
  const playAgain = () => {
    localStorage.setItem("lastTheme", randomStop.value);//Aizsūta iepriekšējo tēmu uz localstorage
    window.location.reload();
  }

  const userLogin = (tok) => {
    if (tok) {
      cookies.set("token", tok, { path: "/" });
    }
  };

  const login = (e, user, history) => {
    e.preventDefault();
    fetch("https://iegriez-pasauli-api.herokuapp.com/auth/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((data) => data.json())
      .then((data) => {
        userLogin(data.token);
        if (data.token) {
          history.push("/admin");
          setAdminInfo();
        }
      })
      .catch((error) => console.error(error));
  };

  const setAdminInfo = () => {
    window.location.reload();
  }

  const addToLeaderboard = (e) => {
    e.preventDefault();
    if(leaderboardUsername !== ""){
      setLeaderboardPopup(true);
      axios.post("https://iegriez-pasauli-api.herokuapp.com/api/members/", {"username": leaderboardUsername, "score": points}).then(() => {
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
        <Route path="/login">
          <LoginPage
            login={login}
            loginPassword={loginPassword}
            loginUserName={loginUserName}
            setLoginUserName={setLoginUserName}
            setLoginPassword={setLoginPassword}
          />
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

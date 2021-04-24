import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  findImage,
  addThemeQuestions,
  selectQuestions,
} from "./features/gameSlice";
import { checkSecondStage, setActiveCorrectAnswer, setActiveAnswers, startSecondStage, setAllQs, setActiveQuestion } from "./features/secondStageSlice";
import { addPoint, addPoints, selectPoints } from "./features/userSlice";
import Home from "./pages/Home";
import SecondStage from "./pages/SecondStage";
import GlobalStyles from "./styles/GlobalStyles";
import {wheelStops} from "./data/wheelOptions";
import ThirdStage from "./pages/ThirdStage";
import { finish, selecthasfinished } from "./features/finishSlice";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Cookies from "universal-cookie";
import axios from "axios";
import AdminPannel from "./pages/AdminPannel";
import { v4 as uuidv4 } from 'uuid';

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
    {text: "nešķiro atkritumus", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#e62222", fontSize: "3rem", id: uuidv4()},
    {text: "tērē ūdeni", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#b4b413", fontSize: "2.5rem", id: uuidv4()},
    {text: "pērc jaunu", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#f02e2e", fontSize: "2rem", id: uuidv4()},
    {text: "izmanto ķīmiju", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#74be12", fontSize: "1.8rem", id: uuidv4()},
    {text: "neremontē", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#1fbcd8", fontSize: "2.5rem", id: uuidv4()},
    {text: "nepērc vietējo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#8d24ca", fontSize: "rem", id: uuidv4()},
    {text: "nepārstrādā", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#f02eb6", fontSize: "2.7rem", id: uuidv4()},
    {text: "nelabo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#1a8e92", fontSize: "2.7rem", id: uuidv4()},
    {text: "nešķiro atkritumus", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#f02e2f", fontSize: "2.5rem", id: uuidv4()},
    {text: "pērc jaunu", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#2032d4", fontSize: "1.6rem", id: uuidv4()},
    {text: "nešķiro", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#25bcd6", fontSize: "3rem", id: uuidv4()},
    {text: "piesārņo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#51ca19", fontSize: "2rem", id: uuidv4()},
    {text: "pērc vairāk", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#51ca20", fontSize: "2.6rem", id: uuidv4()},
  ]);
  //pareizie trešās daļas jēdzieni
  const [tsCorrectWords, setTsCorrectWords] = useState([
    {text: "remontē", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#e62222", fontSize: "3rem", id: uuidv4()},
    {text: "salabo", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#b4b413", fontSize: "1.6rem", id: uuidv4()},
    {text: "sašuj", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02e2e", fontSize: "2.7rem", id: uuidv4()},
    {text: "salāpi", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#74be12", fontSize: "1.5rem", id: uuidv4()},
    {text: "šķiro", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#1fbcd8", fontSize: "2rem", id: uuidv4()},
    {text: "atdod", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#8d24ca", fontSize: "3rem", id: uuidv4()},
    {text: "aizņemies", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02eb6", fontSize: "2.7rem", id: uuidv4()},
    {text: "iestādi", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#1a8e92", fontSize: "2.5rem", id: uuidv4()},
    {text: "audzē", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02e2f", fontSize: "1.6rem", id: uuidv4()},
    {text: "pārstrādā", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#2032d4", fontSize: "3rem", id: uuidv4()},
    {text: "ēd vietējo", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#25bcd6", fontSize: "1.4rem", id: uuidv4()},
    {text: "samal", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#51ca19", fontSize: "2.5rem", id: uuidv4()},
  ])
  const [tsCountdownTimer, setTsCountdownTimer] = useState(7);
  const [startWordFlow, setStartWordFlow] = useState(false);
  const [finishCountDown, setFinishCountDown] = useState(15);
  const [foundWordObject, setFoundWordObject] = useState([]);
  const [showTreasureChest, setShowTreasureChest] = useState(false);
  const [openTreasureChest, setOpenTreasureChest] = useState(false);
  const [adminQuestions, setAdminQuestions] = useState([]);
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [token, setToken] = useState("");
  const [leaderboardUsername, setLeaderboardUsername] = useState("");
  const [leaderboardState, setLeaderboardState] = useState(false);
  const [leaderboardUsers, setLeaderboardUsers] = useState([]);
  const [randomStop,setRandomStop] = useState(0);
  const [spinBtnCounter, setSpinBtnCounter] = useState(0);

  const activeQuestions = useSelector(selectQuestions);
  const secondStageStarted = useSelector(checkSecondStage);
  const hasFinished = useSelector(selecthasfinished);
  const points = useSelector(selectPoints);

  const dispatch = useDispatch();
  const wheelRef = useRef();
  const cookies = new Cookies();

  useEffect(() => {
    //Izvēlas nejaušu opciju, uz kuras rats uzgriezīsies
    setRandomStop(wheelStops[Math.floor(Math.random() * 5) + 0]);
  }, [randomStop, spinBtnCounter])

  useEffect(() => {
    if (token) {
      cookies.set("token", token, { path: "/" });
    }
    if(cookies.get('token')){
      axios.get("http://localhost:8000/api/options/")
      .then((res) => {
        setAdminQuestions(res.data);
      })
    }
  });

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
    if (answerCounter > 3) {
      //kad atbild uz visiem jautājumiem, sāk otro spēles daļu
      dispatch(startSecondStage());
      return;
    }
    setAnswerCounter(answerCounter + 1);
    if(activeQuestions[answerCounter].a === answer) {
      //ja atbild pareizi, palielina punktu skaitu
      dispatch(addPoint());
    }
  };

  //atver jautājuma popupu
  const openSecondStageQuestion = (question, answerOptions, correctAnswer, id) => {
    //atrod jautājuma id
    setSsCheckingId(id);
    //nosūta jautājuma info uz Redux
    dispatch(setActiveQuestion(question));
    dispatch(setActiveAnswers(answerOptions));
    dispatch(setActiveCorrectAnswer(correctAnswer));
    //atver jautājuma popupu
    setSsQuestionState(true);
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
    setSsAnswerCounter(ssAnswerCounter + 1);
    if(ssAnswerCounter === 14){
      startThirdStage();
    }
    document.getElementById(`visible${ssCheckingId}`).style.display = "none";
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
    setToken(tok);
  };

  const login = (e, user, history) => {
    e.preventDefault();
    fetch("http://localhost:8000/auth/", {
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
      .catch((error) => console.log(error));
  };

  const setAdminInfo = () => {
    window.location.reload();
  }

  const addToLeaderboard = (e) => {
    e.preventDefault();
    if(leaderboardUsername !== ""){
      axios.post("http://localhost:8000/api/members/", {"username": leaderboardUsername, "score": points});
      axios.get("http://localhost:8000/api/members/").then((res) => {
        setLeaderboardUsers(res.data);
        console.log(leaderboardUsers);
      })
    }
    
  }

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/game">
          {thirdStageStarted ? (
            <ThirdStage
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
                  ssAnswer={ssAnswer}
                  setSsAnswer={setSsAnswer}
                  ssQuestionState={ssQuestionState}
                  openSecondStageQuestion={openSecondStageQuestion}
                  closeSecondStageQuestion={closeSecondStageQuestion}
                />
              ) : (
                <Home
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
        {cookies.get('token') && (
          <Route path="/admin">
            <AdminPannel
              adminQuestions={adminQuestions}
            />
          </Route>
        )}
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

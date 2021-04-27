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
import ThirdStage from "./pages/ThirdStage";
import { finish, selectGameEnded, selecthasfinished, stopGame } from "./features/finishSlice";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Cookies from "universal-cookie";
import axios from "axios";
import AdminPannel from "./pages/AdminPannel";
import { v4 as uuidv4 } from 'uuid';
import GameOverPage from "./pages/GameOverPage";

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
    {text: "nešķiro atkritumus", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#9aca3c", fontSize: "3rem", id: uuidv4()},
    {text: "tērē ūdeni", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#495f41", fontSize: "2.5rem", id: uuidv4()},
    {text: "pērc jaunu", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "rgb(212,138,9)", fontSize: "2rem", id: uuidv4()},
    {text: "izmanto ķīmiju", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#3c3c58", fontSize: "1.8rem", id: uuidv4()},
    {text: "neremontē", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#1fbcd8", fontSize: "2.5rem", id: uuidv4()},
    {text: "nepērc vietējo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#2c85a4", fontSize: "rem", id: uuidv4()},
    {text: "nepārstrādā", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#c3e5ed", fontSize: "2.7rem", id: uuidv4()},
    {text: "nelabo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#ffa52f", fontSize: "2.7rem", id: uuidv4()},
    {text: "nešķiro atkritumus", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#fd5679", fontSize: "2.5rem", id: uuidv4()},
    {text: "pērc jaunu", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#2032d4", fontSize: "1.6rem", id: uuidv4()},
    {text: "nešķiro", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#25bcd6", fontSize: "3rem", id: uuidv4()},
    {text: "piesārņo", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#51ca19", fontSize: "2rem", id: uuidv4()},
    {text: "pērc vairāk", top: Math.floor((Math.random() * 70) + 20), left: Math.floor((Math.random() * 70) + 20), color: "#51ca20", fontSize: "2.6rem", id: uuidv4()},
  ]);
  //pareizie trešās daļas jēdzieni
  const [tsCorrectWords, setTsCorrectWords] = useState([
    {text: "remontē", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#9aca3c", fontSize: "3rem", id: uuidv4()},
    {text: "salabo", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#b4b413", fontSize: "1.6rem", id: uuidv4()},
    {text: "sašuj", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02e2e", fontSize: "2.7rem", id: uuidv4()},
    {text: "salāpi", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#74be12", fontSize: "1.5rem", id: uuidv4()},
    {text: "šķiro", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#2c85a4", fontSize: "2rem", id: uuidv4()},
    {text: "atdod", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#8d24ca", fontSize: "3rem", id: uuidv4()},
    {text: "aizņemies", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02eb6", fontSize: "2.7rem", id: uuidv4()},
    {text: "iestādi", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#4f0f0f", fontSize: "2.5rem", id: uuidv4()},
    {text: "audzē", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#f02e2f", fontSize: "1.6rem", id: uuidv4()},
    {text: "pārstrādā", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#2032d4", fontSize: "3rem", id: uuidv4()},
    {text: "ēd vietējo", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#1fbcd8", fontSize: "1.4rem", id: uuidv4()},
    {text: "samal", bottom: Math.floor((Math.random() * 70) + 20), right: Math.floor((Math.random() * 70) + 20), color: "#51ca20", fontSize: "2.5rem", id: uuidv4()},
  ])
  const [tsCountdownTimer, setTsCountdownTimer] = useState(7);
  const [startWordFlow, setStartWordFlow] = useState(false);
  const [finishCountDown, setFinishCountDown] = useState(15);
  const [foundWordObject, setFoundWordObject] = useState([]);
  const [showTreasureChest, setShowTreasureChest] = useState(false);
  const [openTreasureChest, setOpenTreasureChest] = useState(false);
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [token, setToken] = useState("");
  const [leaderboardUsername, setLeaderboardUsername] = useState("");
  const [leaderboardState, setLeaderboardState] = useState(false);
  const [leaderboardUsers, setLeaderboardUsers] = useState([]);
  const [randomStop,setRandomStop] = useState(0);
  const [spinBtnCounter, setSpinBtnCounter] = useState(0);
  const [gameCountDownTimer, setGameCountDownTimer] = useState(900);
  const [leaderboardPopup, setLeaderboardPopup] = useState(false);
  const [wheelStops, setWheelStops] = useState([]);

  const activeQuestions = useSelector(selectQuestions);
  const secondStageStarted = useSelector(checkSecondStage);
  const hasFinished = useSelector(selecthasfinished);
  const points = useSelector(selectPoints);
  const gameOver = useSelector(selectGameEnded);

  const dispatch = useDispatch();
  const wheelRef = useRef();
  const cookies = new Cookies();

  useEffect(() => {
    axios.get("https://iegriez-pasauli-api.herokuapp.com/api/questions/").then((res) => {
      setWheelStops(
        [
          {
            deg: 685,
            value: "Banana",
            image: res.data[3].image,
            questions: [
              { q: res.data[3].q, a: res.data[3].options[1].correct === true ? false : true },
              { q: res.data[8].q, a: res.data[8].options[0].correct === true ? false : true },
              {
                q:
                res.data[9].q, a: res.data[9].options[0].correct === true ? false : true
              },
              {
                q:
                res.data[10].q, a: res.data[10].options[0].correct === true ? false : true
              },
              {
                q:
                res.data[5].q, a: res.data[5].options[0].correct === true ? false : true,
              },
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: res.data[30].image,
                    q: res.data[30].q,
                    answerOptions: res.data[30].options.map((option) => option.choice_text),
                    correctAnswer: res.data[30].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[30].xtraInfo,
                  },
                  {
                    q: res.data[31].q,
                    answerOptions: res.data[31].options.map((option) => option.choice_text),
                    correctAnswer: res.data[31].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[31].xtraInfo,
                  },
                  {
                    q: res.data[32].q,
                    answerOptions: res.data[32].options.map((option) => option.choice_text),
                    correctAnswer: res.data[32].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[32].xtraInfo,
                  },
                ],
              },
              {
                energy: [
                  {
                    image: res.data[33].image,
                    q: res.data[33].q,
                    answerOptions: res.data[33].options.map((option) => option.choice_text),
                    correctAnswer: res.data[33].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[33].xtraInfo,
                  },
                  {
                    q: res.data[34].q,
                    answerOptions: res.data[34].options.map((option) => option.choice_text),
                    correctAnswer: res.data[34].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[34].xtraInfo,
                  },
                  {
                    q: res.data[35].q,
                    answerOptions: res.data[35].options.map((option) => option.choice_text),
                    correctAnswer: res.data[35].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[35].xtraInfo,
                  },
                ],
              },
              {
                food: [
                  {
                    image: res.data[0].image,
                    q: res.data[0].q,
                    answerOptions: res.data[0].options.map((option) => option.choice_text),
                    correctAnswer: res.data[0].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[0].xtraInfo,
                  },
                  {
                    q: res.data[1].q,
                    answerOptions: res.data[1].options.map((option) => option.choice_text),
                    correctAnswer: res.data[1].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[1].xtraInfo,
                  },
                  {
                    q: res.data[2].q,
                    answerOptions: res.data[2].options.map((option) => option.choice_text),
                    correctAnswer: res.data[2].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[2].xtraInfo,
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: res.data[4].image,
                    q: res.data[4].q,
                    answerOptions: res.data[4].options.map((option) => option.choice_text),
                    correctAnswer: res.data[4].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[4].xtraInfo,
                  },
                  {
                    q: res.data[6].q,
                    answerOptions: res.data[6].options.map((option) => option.choice_text),
                    correctAnswer: res.data[6].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[6].xtraInfo,
                  },
                  {
                    q: res.data[7].q,
                    answerOptions: res.data[7].options.map((option) => option.choice_text),
                    correctAnswer: res.data[7].options.filter(option => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[7].xtraInfo,
                  },
                ],
              },
              {
                waste: [
                  {
                    image: res.data[36].image,
                    q: res.data[36].q,
                    answerOptions: res.data[36].options.map((option) => option.choice_text),
                    correctAnswer: res.data[36].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[36].xtraInfo,
                  },
                  {
                    q: res.data[38].q,
                    answerOptions: res.data[38].options.map((option) => option.choice_text),
                    correctAnswer: res.data[38].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[38].xtraInfo,
                  },
                  {
                    q: res.data[39].q,
                    answerOptions: res.data[39].options.map((option) => option.choice_text),
                    correctAnswer: res.data[39].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[39].xtraInfo,
                  },
                ],
              },
            ],
          },
          {
            deg: 755,
            value: "Shirt",
            image: "firstStageResources/shirt.svg",
            questions: [
              { q:
                res.data[11].q, a: res.data[11].options[0].correct === true ? false : true, },
              { q:
                res.data[12].q, a: res.data[12].options[0].correct === true ? false : true, },
              {
                q:
                res.data[13].q, a: res.data[13].options[0].correct === true ? false : true,
              },
              {
                q:
                res.data[14].q, a: res.data[14].options[0].correct === true ? false : true,
              },
              {
                q:
                res.data[15].q, a: res.data[15].options[0].correct === true ? false : true,
              },
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: res.data[40].image,
                    q: res.data[40].q,
                    answerOptions: res.data[40].options.map((option) => option.choice_text),
                    correctAnswer: res.data[40].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[40].xtraInfo,
                  },
                  {
                    q: res.data[41].q,
                    answerOptions: res.data[41].options.map((option) => option.choice_text),
                    correctAnswer: res.data[41].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[41].xtraInfo,
                  },
                  {
                    q: res.data[42].q,
                    answerOptions: res.data[42].options.map((option) => option.choice_text),
                    correctAnswer: res.data[42].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[42].xtraInfo,
                  },
                ],
              },
              {
                energy: [
                  {
                    image: res.data[43].image,
                    q: res.data[43].q,
                    answerOptions: res.data[43].options.map((option) => option.choice_text),
                    correctAnswer: res.data[43].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[43].xtraInfo,
                  },
                  {
                    q: res.data[44].q,
                    answerOptions: res.data[44].options.map((option) => option.choice_text),
                    correctAnswer: res.data[44].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[44].xtraInfo,
                  },
                  {
                    q: res.data[45].q,
                    answerOptions: res.data[45].options.map((option) => option.choice_text),
                    correctAnswer: res.data[45].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[45].xtraInfo,
                  },
                ],
              },
              {
                food: [
                  {
                    image: res.data[46].image,
                    q: res.data[46].q,
                    answerOptions: res.data[46].options.map((option) => option.choice_text),
                    correctAnswer: res.data[46].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[46].xtraInfo,
                  },
                  {
                    q: res.data[47].q,
                    answerOptions: res.data[47].options.map((option) => option.choice_text),
                    correctAnswer: res.data[47].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[47].xtraInfo,
                  },
                  {
                    q: res.data[48].q,
                    answerOptions: res.data[48].options.map((option) => option.choice_text),
                    correctAnswer: res.data[48].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[48].xtraInfo,
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: res.data[49].image,
                    q: res.data[49].q,
                    answerOptions: res.data[49].options.map((option) => option.choice_text),
                    correctAnswer: res.data[49].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[49].xtraInfo,
                  },
                  {
                    q: res.data[50].q,
                    answerOptions: res.data[50].options.map((option) => option.choice_text),
                    correctAnswer: res.data[50].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[50].xtraInfo,
                  },
                  {
                    q: res.data[51].q,
                    answerOptions: res.data[51].options.map((option) => option.choice_text),
                    correctAnswer: res.data[51].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[51].xtraInfo,
                  },
                ],
              },
              {
                waste: [
                  {
                    image: res.data[52].image,
                    q: res.data[52].q,
                    answerOptions: res.data[52].options.map((option) => option.choice_text),
                    correctAnswer: res.data[52].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[52].xtraInfo,
                  },
                  {
                    q: res.data[53].q,
                    answerOptions: res.data[53].options.map((option) => option.choice_text),
                    correctAnswer: res.data[53].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[53].xtraInfo,
                  },
                  {
                    q: res.data[54].q,
                    answerOptions: res.data[54].options.map((option) => option.choice_text),
                    correctAnswer: res.data[54].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[54].xtraInfo,
                  },
                ],
              },
            ],
          },
          {
            deg: 1550,
            value: "Longboard",
            image: "firstStageResources/longboard.svg",
            questions: [
              {q: res.data[25].q, a: res.data[25].options[0].correct === true ? false : true},
              {q: res.data[26].q, a: res.data[26].options[0].correct === true ? false : true},
              {q: res.data[27].q, a: res.data[27].options[0].correct === true ? false : true},
              {q: res.data[28].q, a: res.data[28].options[0].correct === true ? false : true},
              {q: res.data[29].q, a: res.data[29].options[0].correct === true ? false : true},
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: res.data[55].image,
                    q: res.data[55].q,
                    answerOptions: res.data[55].options.map((option) => option.choice_text),
                    correctAnswer: res.data[55].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[55].xtraInfo,
                  },
                  {
                    q: res.data[56].q,
                    answerOptions: res.data[56].options.map((option) => option.choice_text),
                    correctAnswer: res.data[56].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[56].xtraInfo,
                  },
                  {
                    q: res.data[57].q,
                    answerOptions: res.data[57].options.map((option) => option.choice_text),
                    correctAnswer: res.data[57].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[57].xtraInfo,
                  },
                ],
              },
              {
                energy: [
                  {
                    image: res.data[58].image,
                    q: res.data[58].q,
                    answerOptions: res.data[58].options.map((option) => option.choice_text),
                    correctAnswer: res.data[58].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[58].xtraInfo,
                  },
                  {
                    q: res.data[59].q,
                    answerOptions: res.data[59].options.map((option) => option.choice_text),
                    correctAnswer: res.data[59].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[59].xtraInfo,
                  },
                  {
                    q: res.data[60].q,
                    answerOptions: res.data[60].options.map((option) => option.choice_text),
                    correctAnswer: res.data[60].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[60].xtraInfo,
                  },
                ],
              },
              {
                food: [
                  {
                    image: res.data[61].image,
                    q: res.data[61].q,
                    answerOptions: res.data[61].options.map((option) => option.choice_text),
                    correctAnswer: res.data[61].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[61].xtraInfo,
                  },
                  {
                    q: res.data[62].q,
                    answerOptions: res.data[62].options.map((option) => option.choice_text),
                    correctAnswer: res.data[62].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[62].xtraInfo,
                  },
                  {
                    q: res.data[63].q,
                    answerOptions: res.data[63].options.map((option) => option.choice_text),
                    correctAnswer: res.data[63].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[63].xtraInfo,
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: res.data[64].image,
                    q: res.data[64].q,
                    answerOptions: res.data[64].options.map((option) => option.choice_text),
                    correctAnswer: res.data[64].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[64].xtraInfo,
                  },
                  {
                    q: res.data[65].q,
                    answerOptions: res.data[65].options.map((option) => option.choice_text),
                    correctAnswer: res.data[65].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[65].xtraInfo,
                  },
                  {
                    q: res.data[66].q,
                    answerOptions: res.data[66].options.map((option) => option.choice_text),
                    correctAnswer: res.data[66].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[66].xtraInfo,
                  },
                ],
              },
              {
                waste: [
                  {
                    image: res.data[67].image,
                    q: res.data[67].q,
                    answerOptions: res.data[67].options.map((option) => option.choice_text),
                    correctAnswer: res.data[67].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[67].xtraInfo,
                  },
                  {
                    q: res.data[68].q,
                    answerOptions: res.data[68].options.map((option) => option.choice_text),
                    correctAnswer: res.data[68].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[68].xtraInfo,
                  },
                  {
                    q: res.data[69].q,
                    answerOptions: res.data[69].options.map((option) => option.choice_text),
                    correctAnswer: res.data[69].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[69].xtraInfo,
                  },
                ],
              },
            ],
          },
          {
            deg: 1620,
            value: "Headphones",
            image: "firstStageResources/headphone-symbol.svg",
            questions: [
              {q: res.data[16].q, a: res.data[16].options[0].correct === true ? false : true},
              {q: res.data[17].q, a: res.data[17].options[0].correct === true ? false : true},
              {q: res.data[18].q, a: res.data[18].options[0].correct === true ? false : true},
              {q: res.data[19].q, a: res.data[19].options[0].correct === true ? false : true},
              {q: res.data[96].q, a: res.data[96].options[0].correct === true ? false : true},
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: res.data[70].image,
                    q: res.data[70].q,
                    answerOptions: res.data[70].options.map((option) => option.choice_text),
                    correctAnswer: res.data[70].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[70].xtraInfo,
                  },
                  {
                    q: res.data[71].q,
                    answerOptions: res.data[71].options.map((option) => option.choice_text),
                    correctAnswer: res.data[71].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[71].xtraInfo,
                  },
                  {
                    q: res.data[72].q,
                    answerOptions: res.data[72].options.map((option) => option.choice_text),
                    correctAnswer: res.data[72].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[72].xtraInfo,
                  },
                ],
              },
              {
                energy: [
                  {
                    image: res.data[73].image,
                    q: res.data[73].q,
                    answerOptions: res.data[73].options.map((option) => option.choice_text),
                    correctAnswer: res.data[73].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[73].xtraInfo,
                  },
                  {
                    q: res.data[74].q,
                    answerOptions: res.data[74].options.map((option) => option.choice_text),
                    correctAnswer: res.data[74].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[74].xtraInfo,
                  },
                  {
                    q: res.data[97].q,
                    answerOptions: res.data[97].options.map((option) => option.choice_text),
                    correctAnswer: res.data[97].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[97].xtraInfo,
                  },
                ],
              },
              {
                food: [
                  {
                    image: res.data[75].image,
                    q: res.data[75].q,
                    answerOptions: res.data[75].options.map((option) => option.choice_text),
                    correctAnswer: res.data[75].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[75].xtraInfo,
                  },
                  {
                    q: res.data[76].q,
                    answerOptions: res.data[76].options.map((option) => option.choice_text),
                    correctAnswer: res.data[76].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[76].xtraInfo,
                  },
                  {
                    q: res.data[77].q,
                    answerOptions: res.data[77].options.map((option) => option.choice_text),
                    correctAnswer: res.data[77].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[77].xtraInfo,
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: res.data[78].image,
                    q: res.data[78].q,
                    answerOptions: res.data[78].options.map((option) => option.choice_text),
                    correctAnswer: res.data[78].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[78].xtraInfo,
                  },
                  {
                    q: res.data[79].q,
                    answerOptions: res.data[79].options.map((option) => option.choice_text),
                    correctAnswer: res.data[79].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[79].xtraInfo,
                  },
                  {
                    q: res.data[80].q,
                    answerOptions: res.data[80].options.map((option) => option.choice_text),
                    correctAnswer: res.data[80].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[80].xtraInfo,
                  },
                ],
              },
              {
                waste: [
                  {
                    image: res.data[81].image,
                    q: res.data[81].q,
                    answerOptions: res.data[81].options.map((option) => option.choice_text),
                    correctAnswer: res.data[81].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[81].xtraInfo,
                  },
                  {
                    q: res.data[82].q,
                    answerOptions: res.data[82].options.map((option) => option.choice_text),
                    correctAnswer: res.data[82].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[82].xtraInfo,
                  },
                  {
                    q: res.data[83].q,
                    answerOptions: res.data[83].options.map((option) => option.choice_text),
                    correctAnswer: res.data[83].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[83].xtraInfo,
                  },
                ],
              },
            ],
          },
          {
            deg: 1700,
            value: "Burger",
            image: "firstStageResources/burger.svg",
            questions: [
              {q: res.data[20].q, a: res.data[20].options[0].correct === true ? false : true},
              {q: res.data[21].q, a: res.data[21].options[0].correct === true ? false : true},
              {q: res.data[22].q, a: res.data[22].options[0].correct === true ? false : true},
              {q: res.data[23].q, a: res.data[23].options[0].correct === true ? false : true},
              {q: res.data[24].q, a: res.data[24].options[0].correct === true ? false : true},
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: res.data[100].image,
                    q: res.data[100].q,
                    answerOptions: res.data[100].options.map((option) => option.choice_text),
                    correctAnswer: res.data[100].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[100].xtraInfo,
                  },
                  {
                    q: res.data[101].q,
                    answerOptions: res.data[101].options.map((option) => option.choice_text),
                    correctAnswer: res.data[101].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[101].xtraInfo,
                  },
                  {
                    q: res.data[102].q,
                    answerOptions: res.data[102].options.map((option) => option.choice_text),
                    correctAnswer: res.data[102].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[102].xtraInfo,
                  },
                ],
              },
              {
                energy: [
                  {
                    image: res.data[84].image,
                    q: res.data[84].q,
                    answerOptions: res.data[84].options.map((option) => option.choice_text),
                    correctAnswer: res.data[84].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[84].xtraInfo,
                  },
                  {
                    q: res.data[85].q,
                    answerOptions: res.data[85].options.map((option) => option.choice_text),
                    correctAnswer: res.data[85].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[85].xtraInfo,
                  },
                  {
                    q: res.data[86].q,
                    answerOptions: res.data[86].options.map((option) => option.choice_text),
                    correctAnswer: res.data[86].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[86].xtraInfo,
                  },
                ],
              },
              {
                food: [
                  {
                    image: res.data[87].image,
                    q: res.data[87].q,
                    answerOptions: res.data[87].options.map((option) => option.choice_text),
                    correctAnswer: res.data[87].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[87].xtraInfo,
                  },
                  {
                    q: res.data[88].q,
                    answerOptions: res.data[88].options.map((option) => option.choice_text),
                    correctAnswer: res.data[88].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[88].xtraInfo,
                  },
                  {
                    q: res.data[89].q,
                    answerOptions: res.data[89].options.map((option) => option.choice_text),
                    correctAnswer: res.data[89].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[89].xtraInfo,
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: res.data[90].image,
                    q: res.data[90].q,
                    answerOptions: res.data[90].options.map((option) => option.choice_text),
                    correctAnswer: res.data[90].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[90].xtraInfo,
                  },
                  {
                    q: res.data[91].q,
                    answerOptions: res.data[91].options.map((option) => option.choice_text),
                    correctAnswer: res.data[91].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[91].xtraInfo,
                  },
                  {
                    q: res.data[92].q,
                    answerOptions: res.data[92].options.map((option) => option.choice_text),
                    correctAnswer: res.data[92].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[92].xtraInfo,
                  },
                ],
              },
              {
                waste: [
                  {
                    image: res.data[93].image,
                    q: res.data[93].q,
                    answerOptions: res.data[93].options.map((option) => option.choice_text),
                    correctAnswer: res.data[93].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[93].xtraInfo,
                  },
                  {
                    q: res.data[94].q,
                    answerOptions: res.data[94].options.map((option) => option.choice_text),
                    correctAnswer: res.data[94].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[94].xtraInfo,
                  },
                  {
                    q: res.data[95].q,
                    answerOptions: res.data[95].options.map((option) => option.choice_text),
                    correctAnswer: res.data[95].options.filter((option) => option.correct === true)[0].choice_text,
                    xtraInfo: res.data[95].xtraInfo,
                  },
                ],
              },
            ],
          },
        ]
      )
      setRandomStop(wheelStops[Math.floor(Math.random() * 5) + 0]);
    })
  }, [wheelStops])

  useEffect(() => {
    if (token) {
      cookies.set("token", token, { path: "/" });
    }
  }, [token]);

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
    setToken(tok);
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
      .catch((error) => console.log(error));
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
              wheelStops={wheelStops}
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

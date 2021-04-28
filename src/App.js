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
  const [loadingPopup, setLoadingPopup] = useState(false);
  const [gameTime, setGameTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const activeQuestions = useSelector(selectQuestions);
  const secondStageStarted = useSelector(checkSecondStage);
  const hasFinished = useSelector(selecthasfinished);
  const points = useSelector(selectPoints);
  const gameOver = useSelector(selectGameEnded);

  const dispatch = useDispatch();
  const wheelRef = useRef();
  const cookies = new Cookies();

  useEffect(() => {
    setLoadingPopup(true);
    axios.get("https://iegriez-pasauli-api.herokuapp.com/api/questions/").then((res) => {
      setWheelStops(
        [
          {
            deg: 685,
            value: "Banana",
            image: "firstStageResources/banana.svg",
            questions: [
              { q: "Viens Latvijas iedzīvotājs gadā apēd 4 banānus.", a: false },
              { q: "Banānu mizas var izmantot kurpju spodrināšanai.", a: true },
              {
                q:
                  "Ēst vietējo nozīmē ēst Latvijā audzētus ābolus, nevis vietējā veikalā pirktus banānus.",
                a: true,
              },
              {
                q:
                  "Banānu lielražošanā tiek patērēts vairāk agroķimikāliju kā jebkuras citas kultūras audzēšanā.",
                a: true,
              },
              {
                q:
                  "Banānu mizas labvēlīgi ietekmē zobu emalju. Berzējiet zobus ar mizu divas minūtes un tie kļūs baltāki.",
                a: true,
              },
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: "secondStageImages/airplane.svg",
                    q: "No kuras valsts tiek vesti visvairāk banāni?",
                    answerOptions: ["Ekvadora", "Madagaskara", "Austrālija"],
                    correctAnswer: "Ekvadora",
                    xtraInfo: "Lielākās banānu eksportētājvalstis ir Ekvadora, Filipīnas, Kostarika un Kolumbija."
                  },
                  {
                    q: "Kā pasargāt vidi?",
                    answerOptions: ["Pārvadāt banānus tikai ar vilcienu", "Ēst vairāk vietējo augļu"],
                    correctAnswer: "Ēst vairāk vietējo augļu",
                  },
                  {
                    q: "Kāds ir banānu eksportēšanai visbiežāk lietotais transports?",
                    answerOptions: ["lidmašīna", "smagā automašīna", "vilciens"],
                    correctAnswer: "lidmašīna",
                  },
                ],
              },
              {
                energy: [
                  {
                    image: "secondStageImages/wind-turbine.svg",
                    q: "Vai banānu tirdzniecība patērē elektrību?",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Jā",
                  },
                  {
                    q: "Lai banāns nonāktu Tavās mājās...",
                    answerOptions: ["ir nepieciešama elektroenerģija", "nav nepieciešama elektroenerģija"],
                    correctAnswer: "ir nepieciešama elektroenerģija",
                  },
                  {
                    q: "Vai ar banānu palīdzību var ražot elektrību?",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Jā",
                    xtraInfo: "Elektrības radīšanas ierīci savienojot ar banānu mizu var radīt lidz 5 voltu stipru eletrību."
                  },
                ],
              },
              {
                food: [
                  {
                    image: "secondStageImages/restaurant.svg",
                    q: "Kā izskatās banāns pirms nobriešanas?",
                    answerOptions: ["sarkans", "zaļš", "dzeltens"],
                    correctAnswer: "zaļš",
                  },
                  {
                    q: "Izvēloties banānus ar Godīgās tirdzniecības marķējumu...",
                    answerOptions: ["tu ziedo naudu labdarībā.", "tu labvēlīgi ietekmē plantāciju strādnieku dzīvi."],
                    correctAnswer: "tu labvēlīgi ietekmē plantāciju strādnieku dzīvi.",
                  },
                  {
                    q: "Katrs trešais ar Godīgās tirdzniecības uzlīmi marķētais banāns ir",
                    answerOptions: ["audzēts, izmantojot ķimikālijas.", "audzēts, izmantojot bioloģiskās lauksaimniecības metodes."],
                    correctAnswer: "audzēts, izmantojot bioloģiskās lauksaimniecības metodes.",
                    xtraInfo: "Katrs trešais ar Godīgās tirdzniecības uzlīmi marķētais banāns ir audzēts, izmantojot bioloģiskās lauksaimniecības metodes."
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: "secondStageImages/backpack.svg",
                    q: "Uz kuru valsti cilvēki dodas apskatīt banānu fermas?  ",
                    answerOptions: ["Kostarika", "Peru", "Mozambika"],
                    correctAnswer: "Kostarika",
                    xtraInfo: "Kostarika ir izveidojusi biznesa centru, ar kura palīdzību pelna naudu, veidojot ekskursijas tūristiem."
                  },
                  {
                    q: "Kādēļ tūristiem ir aizliegs apskatīt banānu plantācijas?",
                    answerOptions: ["Tūristi piesārņo bio vidi", "Tūristi zog banānus"],
                    correctAnswer: "Tūristi piesārņo bio vidi",
                    xtraInfo: "Banāni tiek audzēti speciālos apstākļos, lai tie būtu bioloģiski tīri, tiem ir speciāls gaisa sastāvs un jebkura detaļa var pasliktināt banānu augšanu"
                  },
                  {
                    q: "Kā tūristi var palīdzēt banānu augšanai?",
                    answerOptions: ["ēdot banānus", "atstājot savu urīnu komposta kaudzē"],
                    correctAnswer: "atstājot savu urīnu komposta kaudzē",
                  },
                ],
              },
              {
                waste: [
                  {
                    image: "secondStageImages/delete.svg",
                    q: "Cik ilgā laikā banāni pārgatavojas",
                    answerOptions: ["18 dienās", "27 dienās", "30 dienās"],
                    correctAnswer: "30 dienās",
                  },
                  {
                    q: "Banānu ražošana",
                    answerOptions: ["ir ceturtajā vietā pēc atkritumu daudzuma lauksaimniecības nozarē.", "saražo visvairāk atkritumu lauksaimniecības nozarē jaunattīstības valstīs."],
                    correctAnswer: "saražo visvairāk atkritumu lauksaimniecības nozarē jaunattīstības valstīs.",
                    xtraInfo: "Saskaņā ar Pasaules Dabas fonda datiem banānu nozare saražo vairāk atkritumu nekā jebkura cita lauksaimniecības nozare jaunattīstības valstīs."
                  },
                  {
                    q: "Ražojot banānus...",
                    answerOptions: ["tiek piesārņota augsne un ūdenstilpnes.", "netiek piesārņota apkārtējā vide."],
                    correctAnswer: "tiek piesārņota augsne un ūdenstilpnes.",
                    xtraInfo: "Banānu lielražošanā tiek patērēts vairāk agroķimikāliju nekā jebkuras citas kultūras audzēšanā un tā kā tropos bieži līst, pesticīdi no augu lapām nepārtraukti tiek ieskaloti augsnē un ūdenstilpēs."
                  },
                ],
              },
            ],
          },
          {
            deg: 725,
            value: "Shirt",
            image: "firstStageResources/shirt.svg",
            questions: [
              { q: "Visbiežāk t-kreklus izgatavo no kokvilnas.", a: true },
              { q: "Ik gadu tiek pārdots 1 miljards t-kreklu visā pasaulē.", a: false },
              {
                q:
                  "Pasaules dārgākais t-krekls maksā 200’000 euro",
                a: false,
              },
              {
                q:
                  "Sākotnēji t-krekli skaitījās kā apakšveļa.",
                a: true,
              },
              {
                q:
                  "Lai izgatavot vienu T-kreklu nepieciešami 2700 litri ūdens.",
                a: true,
              },
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: "secondStageImages/airplane.svg",
                    q: "T-kreklu transports rada...",
                    answerOptions: ["10% no pasaules oglekļa emisijām.", "5.5% no pasaules oglekļa emisijām."],
                    correctAnswer: "10% no pasaules oglekļa emisijām.",
                    xtraInfo: "T-kreklu piegāde no ražotāja uz veikaliem un pēc tam pie pircēja rada lielu oglekļu emisiju daudzumu."
                  },
                  {
                    q: "T-kreklu ražošana visbiežāk izmanto kokvilnu, ko piegādā no:",
                    answerOptions: ["Eiropas", "Ķīnas un Indijas", "Amerikas"],
                    correctAnswer: "Ķīnas un Indijas",
                    xtraInfo: "Ķīna un Indija ir lielākās kokvilnas ražotājas pasaulē."
                  },
                  {
                    q: "Ar kāda transportlīdzekļa palīdzību var nogādāt pēc iespējas vairāk T-kreklu?",
                    answerOptions: ["Ar kuģi", "Ar lidmašīnu", "Ar vilcienu"],
                    correctAnswer: "Ar kuģi",
                    xtraInfo: "Ar 1 lielā kuģa palīdzību, tiek piegādāts visvairāk apģērba nekā ar citiem transportiem."
                  },
                ],
              },
              {
                energy: [
                  {
                    image: "secondStageImages/wind-turbine.svg",
                    q: "Uz t-kreklu tiek patērēta enerģija arī pēc tā izgatavošanas?",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Jā",
                    xtraInfo: "Uz t-kreklu tiek patērēta enerģija arī pēc tā izgatavošanas, jo tas ir jāmazgā (veļasmašīna patērē elektrību) un jāgludina (gludeklis patērē elektrību)."
                  },
                  {
                    q: "Lai saražotu vienu t-kreklu...",
                    answerOptions: ["tiek tērēta elektrība", "netiek tērēta elektrība"],
                    correctAnswer: "tiek tērēta elektrība",
                  },
                  {
                    q: "Elektrība, kas izmantota t-krekla ražošanai parasti nāk no...",
                    answerOptions: ["neizsmeļamajiem resursiem", "izsmeļamajiem resursiem", "tīra elektrības ieguves veida"],
                    correctAnswer: "izsmeļamajiem resursiem",
                  },
                ],
              },
              {
                food: [
                  {
                    image: "secondStageImages/restaurant.svg",
                    q: "Viena t-krekla ražošanā patērētais ūdens var nodrošināt cilvēku ar ūdeni: ",
                    answerOptions: ["300 dienas", "2000 dienas", "900 dienas"],
                    correctAnswer: "900 dienas",
                    xtraInfo: "Viena t-krekla radīšanai tiek izmantoti 2700l ūdens, kas varētu nodrošināt cilvēku ar ūdeni 900 dienas."
                  },
                  {
                    q: "Kāds ēdiens visbiežāk tiek attēlos uz T-krekliem?",
                    answerOptions: ["Fast food", "Sušī", "Pelmeņi"],
                    correctAnswer: "Fast food",
                    xtraInfo: "Uz T-krekliem visbiežāk tiek attēlots fast food, jo tas ir lēts un cilvēkiem saistošs, cilvēka acis strādā, kā vēders, tas paēd ar bildēm."
                  },
                  {
                    q: "Cik procentu gadījumos cilvēki T-kreklu nosmērē ar ēdienu?",
                    answerOptions: ["18%", "32%", "100%"],
                    correctAnswer: "32%",
                    xtraInfo: "Veiktajā pētījumā atklājās, ka gandrīz katrs trešais nosmērē savu apģērbu ar ēdienu, galvenie iemesli ir ātra ēšana, steigšanas."
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: "secondStageImages/backpack.svg",
                    q: "Kad ir T-krekla diena? ",
                    answerOptions: ["14. augustā", "21. jūnijā", "32. decembrī"],
                    correctAnswer: "21. jūnijā",
                  },
                  {
                    q: "Vai ir iespējamas ekskursijas T-kreklu ražotnēs?",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Jā",
                  },
                  {
                    q: "Kura valsts visvairāk t-kreklus saražo gadā?",
                    answerOptions: ["Ķīna", "Amerika", "Latvija"],
                    correctAnswer: "Ķīna",
                  },
                ],
              },
              {
                waste: [
                  {
                    image: "secondStageImages/delete.svg",
                    q: "Cik daudz T-kreklu rada atkritumus 1kg svarā?",
                    answerOptions: ["6", "20", "1"],
                    correctAnswer: "6",
                  },
                  {
                    q: "Cik % no T-krekla ražošanā un patērēšanā radīto atkritumu rada tā uzkopšana? ",
                    answerOptions: ["40%", "60%", "5%"],
                    correctAnswer: "60%",
                  },
                  {
                    q: "Cik grami ogļskābās gāzes tiek radīti ražojot vienu t kreklu?",
                    answerOptions: ["10", "0", "1000"],
                    correctAnswer: "10",
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
              { q: "Garākais pasaules longboards ir aptuveni 2 metrus.", a: true },
              { q: "Uzstādītais ātruma rekors ar longboardu ir 90km/h.", a: false },
              {
                q:
                  "70-tajos gados longbordi vēl nebija 'modē'.",
                a: true,
              },
              {
                q:
                  "“Surf-style” longbordi ir vieni no mazākajiem longbordiem.",
                a: false,
              },
              {
                q:
                  "Longbordi ir piemērotāki triku izpildei nekā skeitbordi.",
                a: false,
              },
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: "secondStageImages/airplane.svg",
                    q: "Kādu transportu visbiežāk izmanto longbordu transportēšanai?",
                    answerOptions: ["Lidmašīnu", "Kuģi", "Zemūdeni"],
                    correctAnswer: "Lidmašīnu",
                  },
                  {
                    q: "Braucot ar longbordu, nevis mašīnu, ogļskābās gāzes izmešu daudzums...",
                    answerOptions: ["palielinās", "samazinās", "nemainās"],
                    correctAnswer: "samazinās",
                  },
                  {
                    q: "Kāds ir vidējais ātrums, kuru var sasniegt ar parasto longbordu?",
                    answerOptions: ["1-5 km/h","15-20 km/h","50-60 km/h"],
                    correctAnswer: "15-20 km/h",
                  },
                ],
              },
              {
                energy: [
                  {
                    image: "secondStageImages/wind-turbine.svg",
                    q: "Braucot ar elektrisko longbordu, nevis parasto...",
                    answerOptions: ["ogļskābās gāzes izmeši netiek radīti", "tiek samazināti ogļskābās gāzes izmeši", "tiek radīti ogļskābās gāzes izmeši"],
                    correctAnswer: "tiek radīti ogļskābās gāzes izmeši",
                  },
                  {
                    q: "Braucot ar elektrisko longbordu...",
                    answerOptions: ["tiek patērēta elektrība","netiek patērēta elektrība"],
                    correctAnswer: "tiek patērēta elektrība",
                  },
                  {
                    q: "Kāda ir normālais akumulatora jauda elektriskajā skeitbordā?",
                    answerOptions: ["90-100Wh", "30-40Wh", "250-300Wh"],
                    correctAnswer: "90-100Wh",
                  },
                ],
              },
              {
                food: [
                  {
                    image: "secondStageImages/restaurant.svg",
                    q: "Lai saražotu vienu longbordu...",
                    answerOptions: ["netiek patērēts ūdens", "tiek patērēts ūdens"],
                    correctAnswer: "tiek patērēts ūdens",
                  },
                  {
                    q: "Kuru dzērienu visbiežāk attēlo uz longborda?",
                    answerOptions: ["Limonādi","Kolu", "Fantu"],
                    correctAnswer: "Limonādi",
                  },
                  {
                    q: "Vai ir droši ēst braucot ar longbordu?",
                    answerOptions: ["Jā","Nē"],
                    correctAnswer: "Nē",
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: "secondStageImages/backpack.svg",
                    q: "Kura pilsēta ir uzskatīts par longbordu galvaspilsētu?",
                    answerOptions: ["Rīga", "Berlīne", "Losandželosa"],
                    correctAnswer: "Losandželosa",
                  },
                  {
                    q: "Kurā valstī tika radīts pirmais longbords?",
                    answerOptions: ["Latvijā", "Vācijā", "Amerikā"],
                    correctAnswer: "Amerikā",
                  },
                  {
                    q: "Kurā valstī visvairāk saražo longbordus?",
                    answerOptions: ["Spānijā", "Ķīnā", "Kazahstānā"],
                    correctAnswer: "Ķīnā",
                  },
                ],
              },
              {
                waste: [
                  {
                    image: "secondStageImages/delete.svg",
                    q: "Vai izmests, sabojāts longbords var bojāt apkārtējo vidi?",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Jā",
                  },
                  {
                    q: "Kuru novecojuša longborda daļu var visvieglāk pārstrādāt?",
                    answerOptions: ["Longborda klāju", "Riteņus", "Skrūves"],
                    correctAnswer: "Longborda klāju",
                  },
                  {
                    q: "Kāda tipa longborda ražošanai tiek radīti vairāk atkritumi?",
                    answerOptions: ["Elektriskā", "Parastā"],
                    correctAnswer: "Elektriskā",
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
              { q: "Skaņu slāpējošā funkcija tika radīta zāles pļāvēja lielā trokšņa dēļ.", a: false },
              { q: "Pasaules dārgākās austiņas maksā 30’000 euro.", a: false },
              {
                q:
                  "Jūtīgākās austiņas ir 110 dB/mW.",
                a: true,
              },
              {
                q:
                  "Pirmās mūsdienīgās austiņas tika radītas virtuvē.",
                a: true,
              },
              {
                q:
                  "Pirmajām austiņām bija tikai viens austiņas uzgalis.",
                a: true,
              },
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: "secondStageImages/airplane.svg",
                    q: "Kā labāk pārvadāt austiņas?",
                    answerOptions: ["Kastē", "Aizsargmaciņā ", "Mugursomā"],
                    correctAnswer: "Aizsargmaciņā",
                  },
                  {
                    q: "Kāds ir lielākais risks, lietojot austiņas transportlīdzeklī?",
                    answerOptions: ["Pazūd uzmanība", "Var aizmigt", "Sāk gribēties ēst"],
                    correctAnswer: "Pazūd uzmanība",
                    xtraInfo: "Lietojot austiņas transportlīdzeklī cilvēkam pazūd uzmanība un ja viņš piedalās satiksme, tas var apdraudēt pārējos."
                  },
                  {
                    q: "Kā austiņas palīdz braucot kādā transportlīdzeklī?",
                    answerOptions: ["Nedzirdi apkārtējos", "Netraucē citiem"],
                    correctAnswer: "Netraucē citiem",
                  },
                ],
              },
              {
                energy: [
                  {
                    image: "secondStageImages/wind-turbine.svg",
                    q: "Vai ir nepieciešama elektrība, lai austiņas darbotos?",
                    answerOptions: ["Jā", "Nē", "Ne vienmēr"],
                    correctAnswer: "Ne vienmēr",
                  },
                  {
                    q: "Vai bezvadu austiņas patērē elektrību?",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Jā",
                    xtraInfo: "Bezvadu austiņām ir nepieciešama elektrība, lai tās varētu uzlādēt."
                  },
                  {
                    q: "Kurš no uzlādes veidiem patērē vairāk elektrības?",
                    answerOptions: ["Bezvadu", "Ar vadu"],
                    correctAnswer: "Bezvadu",
                    xtraInfo: "Bezvadu uzlāde patērē par 47% vairāk elektrības, nekā ladējot ar vada palīdzību."
                  },
                ],
              },
              {
                food: [
                  {
                    image: "secondStageImages/restaurant.svg",
                    q: "Zivīm apēdot plastmasu, no kuras veidotas austiņas... ",
                    answerOptions: ["Nekas nenotiek", "zivs plastmasu sagremo", "Zivs nomirst"],
                    correctAnswer: "Zivs nomirst",
                  },
                  {
                    q: "Plastmasas atkritumi, kuri nāk no nolietotām austiņām...",
                    answerOptions: ["piesārņo ūdenstilpnes", "nerada piesārņojumu"],
                    correctAnswer: "piesārņo ūdenstilpnes",
                  },
                  {
                    q: "Plastmasas atkritumu skaits okeānos...",
                    answerOptions: ["pieaug", "nemainās", "samazinās"],
                    correctAnswer: "pieaug",
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: "secondStageImages/backpack.svg",
                    q: "Kā austiņas palīdz pārvarēt pārlidojumus?",
                    answerOptions: ["Aizmirsti ka esi lidmašīnā", "Laiks paiet ātrāk", "Palīdz aimigt"],
                    correctAnswer: "Laiks paiet ātrāk",
                  },
                  {
                    q: "kā ceļojumu ietekmē austiņas?",
                    answerOptions: ["Ceļojums tiek izbaudīts","Uzmanība tiek novērsta no ceļojuma","tiek patērēta vairāk nauda"],
                    correctAnswer: "Uzmanība tiek novērsta no ceļojuma",
                  },
                  {
                    q: "Kā austiņas atšķirās citās valstīs?",
                    answerOptions: ["Tās kalpo kā čips smadzenēs","Tās ir mazākas","Tās neatšķiras"],
                    correctAnswer: "Tās neatšķiras",
                  },
                ],
              },
              {
                waste: [
                  {
                    image: "secondStageImages/delete.svg",
                    q: "Vai austiņas drīkst mest sadzīves atkritumu miskastēs?",
                    answerOptions: ["Jā", "Nē", "Dažreiz"],
                    correctAnswer: "Nē",
                    xtraInfo: "Austiņās ir toksiskas vielas, kuru dēļ ir speciālas tvertnes, kurās drīkst atstāt savas nolietotās austiņas."
                  },
                  {
                    q: "Cik ilgi kalpo lētas, nekvalatatīvas austiņas?",
                    answerOptions: ["gadu", "3 gadus", "dažus mēnešus"],
                    correctAnswer: "dažus mēnešus",
                    xtraInfo: "Lētās austiņas tiek taisītas, no nekvalatatīviem materiāliem, kuri ir arī kaitīgi dabai."
                  },
                  {
                    q: "Kura firma sāk ražot austiņas no materiāla, kurš ir pārstrādājam un nekaitīgs dabai?",
                    answerOptions: ["Samsung", "Apple", "Tesla"],
                    correctAnswer: "Apple",
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
              { q: "Lielākais pasaules hamburgers sver 1164.2 kg", a: true },
              { q: "Amerikāņi gada laikā apēd 13 miljardus hamburgeru.", a: true },
              {
                q:
                  "McDonalds ik sekundi pārdod 249 hamburgerus.",
                a: false,
              },
              {
                q:
                  "Vidēji amerikānis apēd 5 burgerus nedēļā.",
                a: false,
              },
              {
                q:
                  "Hamburgeri savu nosaukumu ieguvuši no Hamburgas, Vācijā.",
                a: true,
              },
            ],
            secondStageQuestions: [
              {
                transport: [
                  {
                    image: "secondStageImages/airplane.svg",
                    q: "Kā burgerus transportē?",
                    answerOptions: ["sadalītus pa piedevām", "jau gatavus burgerus"],
                    correctAnswer: "sadalītus pa piedevām",
                  },
                  {
                    q: "Burgeru pārvadāšanai visvairāk izmanto...",
                    answerOptions: ["kravas auto", "vilcienus", "lidmašīnas"],
                    correctAnswer: "kravas auto",
                  },
                  {
                    q: "Kurā valstī tiek pārdoti visvairāk burgeri gadā",
                    answerOptions: ["Indijā", "Kanādā", "Amerikā"],
                    correctAnswer: "Amerikā",
                  },
                ],
              },
              {
                energy: [
                  {
                    image: "secondStageImages/wind-turbine.svg",
                    q: "Burgeru ražošanai radītā elektrība aiziet...",
                    answerOptions: ["burgeru cepšanai", "burgeru piegādei"],
                    correctAnswer: "burgeru cepšanai",
                  },
                  {
                    q: "Vai dedzinot burgerus var ražot elektrību",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Nē",
                  },
                  {
                    q: "Vai Burgeru ražošanā nepieciešams pielietot ",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Jā",
                  },
                ],
              },
              {
                food: [
                  {
                    image: "secondStageImages/restaurant.svg",
                    q: "Kāda tipa ēdiens ir burgers?",
                    answerOptions: ["fast food", "dārzenis", "auglis"],
                    correctAnswer: "fast food",
                  },
                  {
                    q: "Kā burgers atšķirās no citiem ēdieniem?",
                    answerOptions: ["Tas ir ietīts wrapā", "Tas ir apaļš ar dažādiem dārzeņiem, gaļu un piedevām", "Tam ir maize ar sieru pa vidu"],
                    correctAnswer: "Tas ir apaļš ar dažādiem dārzeņiem, gaļu un piedevām",
                  },
                  {
                    q: "Kādu gaļu lieto burgeros?",
                    answerOptions: ["Vistas gaļu", "Cūkgaļu", "Gan vistas gaļu gan cūkas"],
                    correctAnswer: "Gan vistas gaļu gan cūkas",
                  },
                ],
              },
              {
                tourism: [
                  {
                    image: "secondStageImages/backpack.svg",
                    q: "Kā fast food burgeri atšķirās citās valstīs",
                    answerOptions: ["Nav burgera apakšējās maizītes", "Nav burgera augšējās maizes", "Neatšķiras"],
                    correctAnswer: "Neatšķiras",
                  },
                  {
                    q: "Kura valsts visvairāk patērē burgerus?",
                    answerOptions: ["Kanāda", "Amerika", "Latvija"],
                    correctAnswer: "Amerika",
                  },
                  {
                    q: "Kura valsts visvairāk saražo burgeru",
                    answerOptions: ["Austrālija", "Latvija", "Amerika"],
                    correctAnswer: "Amerika",
                  },
                ],
              },
              {
                waste: [
                  {
                    image: "secondStageImages/delete.svg",
                    q: "Vai burgeru atliekas slikti ietekmē apkārtējo vidi",
                    answerOptions: ["Jā", "Nē"],
                    correctAnswer: "Nē",
                  },
                  {
                    q: "Burgeru iepakojums parasti ir...",
                    answerOptions: ["ražots no bioloģiskiem materiāliem", "kaitīgs dabai"],
                    correctAnswer: "kaitīgs dabai",
                  },
                  {
                    q: "Vidēji cik kg ogļskābās gāzes tie radīti lai saražotu vienu burgeru?",
                    answerOptions: ["4", "0.5", "10"],
                    correctAnswer: "4",
                  },
                ],
              },
            ],
          },
        ]
      )
      setRandomStop(wheelStops[Math.floor(Math.random() * 6) + 0]);
    }).then(() => {
      setLoadingPopup(false);
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

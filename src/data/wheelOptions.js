//Grādu piemēri, bildes un objektu jautājumi
export const wheelStops = [
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
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        energy: [
          {
            image: "secondStageImages/wind-turbine.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        food: [
          {
            image: "secondStageImages/restaurant.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        tourism: [
          {
            image: "secondStageImages/backpack.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        waste: [
          {
            image: "secondStageImages/delete.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
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
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        energy: [
          {
            image: "secondStageImages/wind-turbine.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        food: [
          {
            image: "secondStageImages/restaurant.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        tourism: [
          {
            image: "secondStageImages/backpack.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        waste: [
          {
            image: "secondStageImages/delete.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
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
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        energy: [
          {
            image: "secondStageImages/wind-turbine.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        food: [
          {
            image: "secondStageImages/restaurant.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        tourism: [
          {
            image: "secondStageImages/backpack.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        waste: [
          {
            image: "secondStageImages/delete.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
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
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        energy: [
          {
            image: "secondStageImages/wind-turbine.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        food: [
          {
            image: "secondStageImages/restaurant.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        tourism: [
          {
            image: "secondStageImages/backpack.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
      {
        waste: [
          {
            image: "secondStageImages/delete.svg",
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
          {
            q: "Cik tonnu ogļskābās gāzes saražo viena reize?",
            answerOptions: ["1000", "2000", "3000"],
            correctAnswer: "3000",
          },
        ],
      },
    ],
  },
];

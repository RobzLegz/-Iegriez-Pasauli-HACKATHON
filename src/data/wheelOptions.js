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
];

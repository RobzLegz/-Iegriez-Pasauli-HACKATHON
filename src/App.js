import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { startGame, findImage, addThemeQuestions } from "./features/gameSlice";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [spinAgain, setSpinAgain] = useState(true);

  const dispatch = useDispatch();
  const wheelRef = useRef();

  //Grādu piemēri, bildes un objektu jautājumi
  let wheelStops = [
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
    },
    {
      deg: 725,
      value: "Shirt",
      image: "firstStageResources/shirt.svg",
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
    },
    {
      deg: 1550,
      value: "Longboard",
      image: "firstStageResources/longboard.svg",
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
    },
    {
      deg: 1620,
      value: "Headphones",
      image: "firstStageResources/headphone-symbol.svg",
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
    },
    {
      deg: 1700,
      value: "Burger",
      image: "firstStageResources/burger.svg",
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
    },
  ];

  //Izvēlas nejaušu grādu skaitli (par cik grādiem pagriezīsies ritenis)
  let randomStop = wheelStops[Math.floor(Math.random() * 4) + 0];

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

  return (
    <div>
      <GlobalStyles />
      <Home
        spinAgain={spinAgain}
        wheelRef={wheelRef}
        SpinTheWheel={SpinTheWheel}
      />
    </div>
  );
}

export default App;

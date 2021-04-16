import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { popupQuestions, startGame, findImage } from "./features/gameSlice";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [spinAgain, setSpinAgain] = useState(true);
  const [firstStageTheme, setFirstStageTheme] = useState("");

  const dispatch = useDispatch();
  const wheelRef = useRef();  

  //Grādu piemēri
  let wheelStops = [
    {deg: 685, value: "Banana", image: "firstStageResources/banana.svg"},
    {deg: 725, value: "Shirt", image: "firstStageResources/shirt.svg"},
    {deg: 1550, value: "Longboard", image: "firstStageResources/longboard.svg"},
    {deg: 1620, value: "Headphones", image: "firstStageResources/headphone-symbol.svg"},
    {deg: 1700, value: "Burger", image: "firstStageResources/burger.svg"}
  ]

  //Izvēlas nejaušu grādu skaitli (par cik grādiem pagriezīsies ritenis)
  let randomStop = wheelStops[Math.floor(Math.random() * 4) + 0];

  useEffect(() => {
    setFirstStageTheme(randomStop.value);
  }, [randomStop])

  //Iegriež ratu
  const SpinTheWheel = () => {
    setSpinAgain(false); //Ja rats griežas, neļaut iegriezt vēlreiz
    wheelRef.current.style.transform = `rotate(${randomStop.deg}deg)`;
    dispatch(startGame(firstStageTheme)); //Aizsūta jautājumu tēmu uz Redux
    dispatch(findImage(randomStop.image));
    setTimeout(() => {
      setSpinAgain(true);//Kad rats beidz griezties, atļaut iegriezt velreiz
      dispatch(popupQuestions(true))
    }, 6000);
  };

  return (
    <div>
      <GlobalStyles />
      <Home spinAgain={spinAgain} wheelRef={wheelRef} SpinTheWheel={SpinTheWheel} />
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [spinCounter, setSpinCounter] = useState(0);
  const [spinAgain, setSpinAgain] = useState(true);

  const wheelRef = useRef();

  //Ģenerē nejaušu grādu skaitli (par cik grādiem pagriezīsies ritenis)
  let wheelStops = [
    {deg: 685, value: "banana"},
    {deg: 725, value: "shirt"},
    {deg: 1550, value: "longboard"},
    {deg: 1620, value: "headphones"},
    {deg: 1700, value: "burger"}
  ]

  let randomStop = wheelStops[Math.floor(Math.random() * 4) + 0]

  //Iegriež ratu
  const SpinTheWheel = () => {
    setSpinAgain(false); //Ja rats griežas, neļaut iegriezt vēlreiz
    setSpinCounter(spinCounter + 1);
    wheelRef.current.style.transform = `rotate(${randomStop.deg}deg)`;
    setTimeout(() => {
      setSpinAgain(true);//Kad rats beidz griezties, atļaut iegriezt velreiz
      console.log(randomStop.value, randomStop.deg)
    }, 5000);
  };

  return (
    <div>
      <GlobalStyles />
      <Home spinAgain={spinAgain} wheelRef={wheelRef} SpinTheWheel={SpinTheWheel} />
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [spinCounter, setSpinCounter] = useState(0);
  const [spinAgain, setSpinAgain] = useState(true);

  const wheelRef = useRef();

  //Ģenerē nejaušu grādu skaitli (par cik grādiem pagriezīsies ritenis)
  let randDegrees = Math.random() * 5000;

  const SpinTheWheel = () => {
    setSpinAgain(false);
    setSpinCounter(spinCounter + 1);
    wheelRef.current.style.transform = `rotate(${randDegrees}deg)`;
    setTimeout(() => {
      setSpinAgain(true);
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

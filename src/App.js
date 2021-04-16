import React, { useRef, useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [spinCounter, setSpinCounter] = useState(0);

  const wheelRef = useRef();

  let randDegrees = Math.ceil(Math.random() * 5000);

  const SpinTheWheel = () => {
    setSpinCounter(spinCounter + 1);
    wheelRef.current.style.transform = `rotate(${
      randDegrees < 0 ? randDegrees * -1 : randDegrees
    }deg)`;
  };

  return (
    <div>
      <GlobalStyles />
      <Home wheelRef={wheelRef} SpinTheWheel={SpinTheWheel} />
    </div>
  );
}

export default App;

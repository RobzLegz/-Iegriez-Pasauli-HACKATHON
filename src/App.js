import React, { useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [spinCounter, setSpinCounter] = useState(0);

  const SpinTheWheel = () => {
    setSpinCounter(spinCounter + 1);
  };

  return (
    <div>
      <GlobalStyles />
      <Home SpinTheWheel={SpinTheWheel} />
    </div>
  );
}

export default App;

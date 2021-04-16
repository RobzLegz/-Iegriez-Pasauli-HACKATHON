import React from "react";
import { useSelector } from "react-redux";
import { selectTheme, selectThemeImage } from "../features/gameSlice";

function FirstStageQuestions() {
  const activeImage = useSelector(selectThemeImage);
  const activeTheme = useSelector(selectTheme);

  return (
    <div>
      <img src={activeImage} alt={activeTheme} />
    </div>
  );
}

export default FirstStageQuestions;

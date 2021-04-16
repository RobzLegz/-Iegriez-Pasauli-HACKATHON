import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectTheme,
  selectThemeImage,
  selectQuestions,
} from "../features/gameSlice";

function FirstStageQuestions() {
  const activeImage = useSelector(selectThemeImage);
  const activeTheme = useSelector(selectTheme);
  const activeQuestions = useSelector(selectQuestions);

  return (
    <FirstStageQPopup>
      <img src={activeImage} alt={activeTheme} />
      <p>{activeQuestions[0].q}</p>
    </FirstStageQPopup>
  );
}

const FirstStageQPopup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 200px;
  overflow: hidden;
  > img {
    width: 100px;
    height: 100px;
  }
  > p {
    z-index: 10;
  }
`;

export default FirstStageQuestions;

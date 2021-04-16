import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectTheme,
  selectThemeImage,
  selectQuestions,
} from "../features/gameSlice";

function FirstStageQuestions({firstPartAnswer, answerCounter}) {
  const activeImage = useSelector(selectThemeImage);
  const activeTheme = useSelector(selectTheme);
  const activeQuestions = useSelector(selectQuestions);

  return (
    <FirstStageQPopup>
      {activeTheme !== "" && (
        <>
          <img src={activeImage} alt={activeTheme} />
          <p>{activeQuestions[answerCounter].q}</p>
          <div className="true__false--container">
            <button className="true__button" onClick={() => {
              firstPartAnswer(true);
            }}>Patiess</button>
            <button className="false__button" onClick={() => {
              firstPartAnswer(false);
            }}>Aplams</button>
          </div>
        </>
      )}
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
  >.true__false--container{
    display: flex;
    align-items: center;
    justify-content: center;
    >button{
      margin-left: 10px;
    }
  }
`;

export default FirstStageQuestions;

import React from 'react'
import styled from 'styled-components';

function CorrectAnswerPopup({setCorrectAnswerState, correctAnswerState}) {
    return (
        <StyledCheckPopup>
            <img src={`secondStageImages/${correctAnswerState.answeredCorrectly === true ? "check" : "redcross"}.svg`} alt="reward"/>
            <h2>{correctAnswerState.answeredCorrectly === true ? "Apsveicam, Jūs atbildējāt pareizi!" : "Diemžēl Jūs atbildējāt nepareizi!"}</h2>
            {correctAnswerState.answeredCorrectly === false && (
                <>
                    <h2>Pareizā atbilde: {correctAnswerState.correctAnswer}</h2>
                    <h4>Jautājums: {correctAnswerState.activeQusetion}</h4>
                </>
            )}
            {correctAnswerState.xtraInfo !== "" && correctAnswerState.xtraInfo !=="N/A" && correctAnswerState.xtraInfo !== "No extra info" && correctAnswerState.xtraInfo !== "." && (
                <>
                    <h3><strong>Interesanti:</strong></h3>
                    <h3>{correctAnswerState.xtraInfo}</h3>
                </>
            )}
            <button onClick={() => {
                setCorrectAnswerState({shown: false, correctAnswer: "", xtraInfo: "", answeredCorrectly: false});
            }}>Aizvērt</button>
        </StyledCheckPopup>
    )
}

const StyledCheckPopup = styled.div`
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f5f5f5;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    >img{
        width: 50%;
        max-width: 300px;
    }
    >h2{
        margin: 10px 0;
    }
    >h3{
        padding: 10px;
        margin: 10px 0;
        >strong{
            background: #46fb26;
            padding: 30px;
            color: #3b3b3b;
        }
    }
`;

export default CorrectAnswerPopup

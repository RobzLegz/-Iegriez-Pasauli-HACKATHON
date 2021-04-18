import React from 'react'
import styled from 'styled-components'
import WordFlow from "../thirdStage/WordFlow"

function ThirdStage({tsCorrectWords,clickWord, thirdStageFoundWords, tsIncorrectWords, startWordFlow, tsCountdownTimer}) {
    return (
        <StyledThirdStagePage>
            {startWordFlow ? (
                <WordFlow 
                    thirdStageFoundWords={thirdStageFoundWords}
                    clickWord={clickWord}
                    tsCorrectWords={tsCorrectWords} 
                    tsIncorrectWords={tsIncorrectWords} 
                />
            ) : (
                <h3>{tsCountdownTimer}</h3>
            )}
        </StyledThirdStagePage>
    )
}
const StyledThirdStagePage = styled.div`
    background: #ebe1d1;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    >h3{
        font-size: 7rem;
        animation: animateTimer 1s ease infinite;
    }
    @keyframes animateTimer{
        0%{
            color: #9ACA3C;
        }
        50%{
            color: #2c85a4;
        }
        100%{
            color: #9ACA3C;
        }
    }
`;

export default ThirdStage

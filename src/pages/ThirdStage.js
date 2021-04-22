import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selecthasfinished } from '../features/finishSlice';
import WordFlow from "../thirdStage/WordFlow"
import FinishPage from './FinishPage';

function ThirdStage({tsCorrectWords, playAgain, finishCountDown, clickWord, thirdStageFoundWords, tsIncorrectWords, startWordFlow, tsCountdownTimer}) {

  const hasFinished = useSelector(selecthasfinished);

    return (
        <StyledThirdStagePage>
            {hasFinished ? (
                <FinishPage playAgain={playAgain} />
            ) : (
                <>
                    {startWordFlow ? (
                        <WordFlow 
                            finishCountDown={finishCountDown}
                            thirdStageFoundWords={thirdStageFoundWords}
                            clickWord={clickWord}
                            tsCorrectWords={tsCorrectWords} 
                            tsIncorrectWords={tsIncorrectWords} 
                        />
                    ) : (
                        <h3>{tsCountdownTimer > 1 ? tsCountdownTimer > 4 ? "Uzklikšķini uz tiem vārdiem, kuri saistīti ar aprites ekonomiku" : tsCountdownTimer - 1 : "Aiziet!"}</h3>
                    )}
                </>
            )}
            
        </StyledThirdStagePage>
    )
}
const StyledThirdStagePage = styled.div`
    background:linear-gradient(#c3e5ed 65%, #2c85a4);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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

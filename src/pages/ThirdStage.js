import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selecthasfinished } from '../features/finishSlice';
import WordFlow from "../thirdStage/WordFlow"
import FinishPage from './FinishPage';

function ThirdStage({tsCorrectWords, leaderboardUsers, leaderboardPopup,setLeaderboardUsername, leaderboardUsername, addToLeaderboard,leaderboardState,setLeaderboardState, playAgain, finishCountDown, clickWord, thirdStageFoundWords, tsIncorrectWords, startWordFlow, tsCountdownTimer}) {

    const hasFinished = useSelector(selecthasfinished);
    let i = 1;

    return (
        <StyledThirdStagePage>
            {hasFinished ? (
                <>
                    <div className={leaderboardPopup ? "active__leaderboard--popup" : "invisible__leaderboard--popup"}>
                        {leaderboardUsers.map((leaderboardUser) => (
                            <h3 key={i} className={`all__results ${leaderboardUsername === leaderboardUser.username ? "your__result" : ""}`}>{i++}. {leaderboardUser.username}</h3>
                        ))}
                        <button onClick={playAgain}>Spēlēt vēlreiz</button>
                    </div>
                    <FinishPage leaderboardUsername={leaderboardUsername} setLeaderboardUsername={setLeaderboardUsername} addToLeaderboard={addToLeaderboard} leaderboardState={leaderboardState} setLeaderboardState={setLeaderboardState} playAgain={playAgain} />
                </>
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
    >.active__leaderboard--popup{
        position: absolute;
        z-index: 11;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 1;
        pointer-events: all;
        background: linear-gradient(120deg, #efeae4, #ebe1d1);
        text-align: left;
        >h3{
            text-align: left;
        }
        >.your__result{
            background: yellow;
        }
    }
    >.invisible__leaderboard--popup{
        opacity: 0;
        pointer-events: none;
        position: absolute;
        z-index: 11;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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

import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selecthasfinished } from '../features/finishSlice';
import Header from '../header/Header';
import WordFlow from "../thirdStage/WordFlow"
import FinishPage from './FinishPage';

function ThirdStage({tsCorrectWords, leaderboardUsers, leaderboardPopup, setLeaderboardUsername, leaderboardUsername, addToLeaderboard,leaderboardState,setLeaderboardState, playAgain, finishCountDown, clickWord, thirdStageFoundWords, tsIncorrectWords, startWordFlow, tsCountdownTimer}) {
  const hasFinished = useSelector(selecthasfinished);

  return (
    <StyledThirdStagePage>
      <Header />
      {hasFinished ? (
        <>
          <div className={leaderboardPopup ? "active__leaderboard--popup" : "invisible__leaderboard--popup"}>
            <h2>Spēlētāju tops</h2>
            {leaderboardUsers.map((leaderboardUser, i) => (
              <div key={i} className={`all__results ${leaderboardUsername === leaderboardUser.username ? "your__result" : ""}`}>
                <h3>{i + 1}.</h3>
                <h3>{leaderboardUser.username}</h3>
                <h3>{leaderboardUser.score}</h3>
                <h3>{leaderboardUser.role}</h3>
              </div>
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
                <div className="wrapper">
                  <h3>{tsCountdownTimer > 1 ? tsCountdownTimer > 4 ? "Uzklikšķini uz tiem vārdiem, kuri saistīti ar aprites ekonomiku" : tsCountdownTimer - 1 : "Aiziet!"}</h3>
                </div>  
              )}
          </>
      )}            
    </StyledThirdStagePage>
  )
}
const StyledThirdStagePage = styled.div`
    background: linear-gradient(120deg, #efeae4, #ebe1d1);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .wrapper{
      background-color: white;
      border-radius: 15px;
      width: 95%;
      padding: 15px;
      box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
    }
    .wrapper>h3{
        font-size: 9vw;
        text-align: center;
        animation: animateTimer 5s ease infinite;
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
        >.all__results{

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
      0% {
        color: blue;
      }
      10% {
        color: #8e44ad;
      }
      20% {
        color: #1abc9c;
      }
      30% {
        color: #d35400;
      }
      40%{
        color: #495f41;
      }
      50% {
        color: #34495e;
      }
      60% {
        color: blue;
      }
      70% {
        color: #2980b9;
      }
      80% {
        color: #f1c40f;
      }
      90%{
        color:  #9aca3c;
      }
     100% {
        color: #2980b9;
      }
    }
  @media(min-width: 1065px){
    .wrapper>h3{
      font-size: 5vw;
    }
  }
`;

export default ThirdStage

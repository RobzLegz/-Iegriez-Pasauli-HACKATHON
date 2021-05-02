import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selecthasfinished } from '../features/finishSlice';
import Header from '../header/Header';
import WordFlow from "../thirdStage/WordFlow"
import FinishPage from './FinishPage';

function ThirdStage({tsCorrectWords,clickIncorrectWord, leaderboardUsers, leaderboardPopup, setLeaderboardUsername, leaderboardUsername, addToLeaderboard,leaderboardState,setLeaderboardState, playAgain, finishCountDown, clickWord, thirdStageFoundWords, tsIncorrectWords, startWordFlow, tsCountdownTimer}) {
  const hasFinished = useSelector(selecthasfinished);

  return (
    <StyledThirdStagePage>
      {!hasFinished && (
        <Header />
      )}
      {hasFinished ? (
        <>
          <div className={leaderboardPopup ? "active__leaderboard--popup" : "invisible__leaderboard--popup"}>
            <h2>Spēlētāju tops</h2>
            <section className="player__container">
              {leaderboardUsers.map((leaderboardUser, i) => (
                <div key={i} className={`all__results ${leaderboardUsername === leaderboardUser.username ? "your__result" : ""}`}>
                  <h3 className={`place__index ${i + 1 === 1 ? "first__place" : i + 1 === 2 ? "second__place" : i + 1 === 3 ? "third__place" : ""}`}>{i + 1}.</h3>
                  <h3>{leaderboardUser.username}</h3>
                  <h3>{leaderboardUser.score}</h3>
                  <h3>{leaderboardUser.role}</h3>
                </div>
              ))}
            </section>
            <button onClick={playAgain}>Spēlēt vēlreiz</button>
          </div>
          <FinishPage leaderboardUsername={leaderboardUsername} setLeaderboardUsername={setLeaderboardUsername} addToLeaderboard={addToLeaderboard} leaderboardState={leaderboardState} setLeaderboardState={setLeaderboardState} playAgain={playAgain} />
        </>
      ) : (
          <>
              {startWordFlow ? (
                <WordFlow
                  clickIncorrectWord={clickIncorrectWord}
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
      overflow: hidden;
      height: 100vh;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 100px 0;
      opacity: 1;
      pointer-events: all;
      background: linear-gradient(120deg, #efeae4, #ebe1d1);
      text-align: left;
      >button{
        margin-top: 100px;
        padding: 10px 20px;
        outline: none;
        border: none;
        background: #9ACA3C;
        color: #f6f5f5;
      }
      >h2{
        color: #3c3c58;
        margin-bottom: 20px;
      }
      >.player__container{
        width: 80%;
        max-width: 900px;
        height: 500px;
        overflow-y: scroll;
        background: #ecebeb;
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #c0c0b1;
        }

        ::-webkit-scrollbar-thumb {
          background: #3c3c58;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #494970;
        }
        >.all__results{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 30px;
          border-top: 1px solid lightgray;
          >h3{
            text-align: left;
            color: #3c3c58;
          }
          >.place__index{
            border: 1px solid #3c3c58;
            padding: 10px 15px;
            border-radius: 50%;
          }
          >.first__place{
            background: gold;
          }
          >.second__place{
            background: silver;
          }
          >.third__place{
            background: #c77a16;
          }
        }
        >.your__result{
          background: #dada29;
        }
        @media(max-width: 700px){
          width: 95%;
        }
        @media(max-width: 376px){
          width: 100%;
        }
        @media(max-width: 361px){
          >.all__results{
            >h3{
              font-size: 15px;
            } 
            >.place__index{
              border: 1px solid #3c3c58;
              padding: 5px 10px;
              border-radius: 50%;
            }
          }
        }
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

import React from 'react'
import styled from 'styled-components';

function WordFlow({tsCorrectWords, thirdStageFoundWords, clickWord, tsIncorrectWords, finishCountDown}) {
    return (
        <StyledWordFlowStage>
            <div className="time__counter">
                <h4>0.{finishCountDown < 10 ? "0" + finishCountDown : finishCountDown}</h4>
            </div>
            <div className="correct__container">
                {tsCorrectWords.map((correct) => (
                    <h3 
                        key={correct.id}
                        onClick={() => clickWord(correct)} 
                        style={{
                            bottom: `${correct.bottom}%`, 
                            right: `${correct.right}%`,
                            color: `${correct.color}`,
                            fontSize: `${correct.fontSize}`
                        }}
                    >{correct.text}</h3>
                ))}
            </div>            
            <div className="incorrect__container">
                {tsIncorrectWords.map((incorrect) => (
                    <h3 
                        key={incorrect.id}
                        style={{
                            top: `${incorrect.top}%`, 
                            left: `${incorrect.left}%`,
                            color: `${incorrect.color}`,
                            fontSize: `${incorrect.fontSize}`
                        }}
                    >{incorrect.text}</h3>
                ))}
            </div>            
            <div className="answered__container">
                {thirdStageFoundWords.map((found) => (
                    <h3 
                        key={found.id}
                        style={{bottom: `${found[1]}%`, right: `${found[2]}%`}}
                    >{found[0]}</h3>
                ))}
            </div>
        </StyledWordFlowStage>
    )
}
const StyledWordFlowStage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  > .correct__container {
    > h3 {
      cursor: pointer;
      position: absolute;
      animation: floatWords 15s ease-in infinite;
    }

    @keyframes floatWords {
      from {
        transform: scale(0.5);
      }
      to {
        transform: scale(1.3);
      }
    }
  }

  > .incorrect__container {
    > h3 {
      cursor: pointer;
      position: absolute;
      animation: floatWords 15s ease-in infinite;
    }

    @keyframes floatWords {
      from {
        transform: scale(0.5)
      }
      to {
        transform: scale(1)
      }
    }
  }

  > .answered__container {
    h3 {
      position: absolute;
      font-size: 2rem;
      animation: animateFoundWord 1s ease infinite;
      pointer-events: none;
    }

    @keyframes animateFoundWord {
      0% {
        color: #36D63A;
      }
      50% {
        color: #41583c;
      }
      100% {
        color: #36D63A;
      }
    }
  }

  > .time__counter {
    background-color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    border-radius: 5px;
    height: 65px;
    width: 150px;
    padding-top: 5px;
    position: absolute;
    text-align: center;
    top: 70px;
    right: -30px;
    transform: translate(-50%, -50%);
    font-size: 3rem;

    > h4 {
      animation: animateCountDown 15s infinite;
    }

    @keyframes animateCountDown {
      0% {
        color: #2f2f2f;
      }
      50% {
        color: #ffa52f;
      }
      100% {
        color: red;
      }
    }
  }

`;

export default WordFlow
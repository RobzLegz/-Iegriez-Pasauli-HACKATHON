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
                        key={correct.text}
                        onClick={() => clickWord(correct)} 
                        style={{
                            bottom: `${correct.bottom}%`, 
                            right: `${correct.right}%`
                        }}
                    >{correct.text}</h3>
                ))}
            </div>            
            <div className="incorrect__container">
                {tsIncorrectWords.map((incorrect) => (
                    <h3 
                        key={incorrect.top + incorrect.left}
                        style={{
                            top: `${incorrect.top}%`, 
                            left: `${incorrect.left}%`
                        }}
                    >{incorrect.text}</h3>
                ))}
            </div>            
            <div className="answered__container">
                {thirdStageFoundWords.map((found) => (
                    <h3 
                        key={found}
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
    >.correct__container{
        >h3{
            cursor: pointer;
            position: absolute;
            animation: floatWords 15s ease infinite;

            :first-child{
                color: #e62222;
                font-size: 3rem;
            }

            :nth-child(2){
                color: #b4b413;                
                font-size: 2.5rem;
            }

            :nth-child(3){
                color: #f02e2e;                
                font-size: 2rem;
            }

            :nth-child(4){
                color: #74be12;
                font-size: 1.8rem;
            }

            :nth-child(5){
                color: #1fbcd8;
                font-size: 2.5rem;
            }

            :nth-child(6){
                color: #8d24ca;
                font-size: 2.7rem;
            }

            :nth-child(7){
                color: #f02eb6;
                font-size: 2.7rem;
            }

            :nth-child(8){
                color: #1a8e92;
                font-size: 2.5rem;
            }

            :nth-child(9){
                color: #f02e2e;
                font-size: 1.6rem;
            }

            :nth-child(10){
                color: #2032d4;
                font-size: 3rem;
            }

            :nth-child(11){
                color: #25bcd6;
                font-size: 2rem;
            }

            :nth-child(12){
                color: #51ca19;
                font-size: 2.6rem;
            }

        }
        @keyframes floatWords{
            from{
                transform: scale(0.5);
            }
            to{
                transform: scale(1.3);
            }
        }
    }
    >.incorrect__container{
        >h3{
            cursor: pointer;
            position: absolute;
            animation: floatWords 15s ease-in infinite;

            :first-child{
                color: #e62222;
                font-size: 2rem;
            }

            :nth-child(2){
                color: #b4b413;                
                font-size: 2.5rem;
            }

            :nth-child(3){
                color: #f02e2e;                
                font-size: 2rem;
            }

            :nth-child(4){
                color: #74be12;
                font-size: 1.8rem;
            }

            :nth-child(5){
                color: #1fbcd8;
                font-size: 2.5rem;
            }

            :nth-child(6){
                color: #8d24ca;
                font-size: 2.7rem;
            }

            :nth-child(7){
                color: #f02eb6;
                font-size: 2.7rem;
            }

            :nth-child(8){
                color: #1a8e92;
                font-size: 2.5rem;
            }

            :nth-child(9){
                color: #f02e2e;
                font-size: 1.6rem;
            }

            :nth-child(10){
                color: #2032d4;
                font-size: 3rem;
            }

            :nth-child(11){
                color: #25bcd6;
                font-size: 2rem;
            }

            :nth-child(12){
                color: #51ca19;
                font-size: 2.6rem;
            }

            :nth-child(13){
                color: #51ca19;
                font-size: 2.3rem;
            }

        }
        @keyframes floatWords{
            from{
                transform: scale(0.5);
            }
            to{
                transform: scale(1.3);
            }
        }
    }
    >.answered__container{
        h3{
            position: absolute;
            font-size: 2rem;
            animation: animateFoundWord 1s ease infinite;
            pointer-events: none;
        }
        @keyframes animateFoundWord{
            0%{
                color: #36D63A;
            }
            50%{
                color: #3c3c58;
            }
            100%{
                color: #36D63A;
            }
        }
    }
    >.time__counter{
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2rem;
        >h4{
            animation: animateCountDown 1s ease infinite;
        }
        @keyframes animateCountDown{
            0%{
                color: red;
            }
            50%{
                color: #4fb61f;
            }
            100%{
                color: red;
            }
        }
    }

`;

export default WordFlow

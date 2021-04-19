import React from 'react'
import styled from 'styled-components';

function WordFlow({tsCorrectWords, thirdStageFoundWords, clickWord, tsIncorrectWords, finishCountDown}) {
    return (
        <StyledWordFlowStage>
            <div className="time__counter">
                <h4>{finishCountDown}</h4>
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
                {thirdStageFoundWords.length >= 1 && (
                    <h4>Atrastie Vārdi({thirdStageFoundWords.length}):</h4>
                )}
                {thirdStageFoundWords.map((found) => (
                    <h3 key={found}>{found}</h3>
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
            0%{
                transform: scale(0.5);
            }
            100%{
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
            0%{
                transform: scale(0.5);
            }
            100%{
                transform: scale(1.3);
            }
        }
    }
    >.answered__container{
        h4{
            font-size: 2rem;
            
        }
        h3{
            font-size: 2rem;
            :nth-child(2){
                color: #e63131;
            }
        }
    }

`;

export default WordFlow

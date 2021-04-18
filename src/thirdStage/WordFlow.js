import React from 'react'
import styled from 'styled-components';

function WordFlow({tsCorrectWords, thirdStageFoundWords, clickWord, tsIncorrectWords}) {
    return (
        <StyledWordFlowStage>
            <div className="correct__container">
                {tsCorrectWords.map((correct) => (
                    <h3 onClick={() => clickWord(correct)}>{correct}</h3>
                ))}
            </div>            
            <div className="incorrect__container">
                {tsIncorrectWords.map((incorrect) => (
                    <h3>{incorrect}</h3>
                ))}
            </div>            
            <div className="answered__container">
                {thirdStageFoundWords.map((found) => (
                    <h3>{found}</h3>
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
                left: 60%;
                top: 20%;
                font-size: 3rem;
            }

            :nth-child(2){
                color: #b4b413;
                top: 30%;
                left: 70%;                
                font-size: 2.5rem;
            }

            :nth-child(3){
                color: #f02e2e;
                top: 70%;
                left: 20%;                
                font-size: 2rem;
            }

            :nth-child(4){
                left: 50%;
                color: #74be12;
                top: 40%;
                font-size: 1.8rem;
            }

            :nth-child(5){
                left: 65%;
                color: #1fbcd8;
                top: 45%;
                font-size: 2.5rem;
            }

            :nth-child(6){
                left: 40%;
                color: #8d24ca;
                top: 60%;
                font-size: 2.7rem;
            }

            :nth-child(7){
                left: 25%;
                top: 55%;
                color: #f02eb6;
                font-size: 2.7rem;
            }

            :nth-child(8){
                left: 40%;
                color: #1a8e92;
                top: 75%;
                font-size: 2.5rem;
            }

            :nth-child(9){
                left: 75%;
                color: #f02e2e;
                top: 35%;
                font-size: 1.6rem;
            }

            :nth-child(10){
                left: 80%;
                color: #2032d4;
                top: 72%;
                font-size: 3rem;
            }

            :nth-child(11){
                left: 15%;
                color: #25bcd6;
                top: 36%;
                font-size: 2rem;
            }

            :nth-child(12){
                left: 40%;
                color: #51ca19;
                top: 15%;
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
                right: 60%;
                bottom: 10%;
                font-size: 2rem;
            }

            :nth-child(2){
                color: #b4b413;
                bottom: 30%;
                right: 70%;                
                font-size: 2.5rem;
            }

            :nth-child(3){
                color: #f02e2e;
                bottom: 70%;
                right: 20%;                
                font-size: 2rem;
            }

            :nth-child(4){
                right: 50%;
                color: #74be12;
                bottom: 40%;
                font-size: 1.8rem;
            }

            :nth-child(5){
                right: 65%;
                color: #1fbcd8;
                bottom: 45%;
                font-size: 2.5rem;
            }

            :nth-child(6){
                right: 40%;
                color: #8d24ca;
                bottom: 60%;
                font-size: 2.7rem;
            }

            :nth-child(7){
                right: 25%;
                bottom: 55%;
                color: #f02eb6;
                font-size: 2.7rem;
            }

            :nth-child(8){
                right: 40%;
                color: #1a8e92;
                bottom: 75%;
                font-size: 2.5rem;
            }

            :nth-child(9){
                right: 75%;
                color: #f02e2e;
                bottom: 35%;
                font-size: 1.6rem;
            }

            :nth-child(10){
                right: 80%;
                color: #2032d4;
                bottom: 72%;
                font-size: 3rem;
            }

            :nth-child(11){
                right: 15%;
                color: #25bcd6;
                bottom: 36%;
                font-size: 2rem;
            }

            :nth-child(12){
                right: 40%;
                color: #51ca19;
                bottom: 15%;
                font-size: 2.6rem;
            }

            :nth-child(13){
                right: 30%;
                color: #51ca19;
                bottom: 25%;
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

`;

export default WordFlow

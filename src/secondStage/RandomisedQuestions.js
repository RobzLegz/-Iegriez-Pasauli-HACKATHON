import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllQuestions } from '../features/secondStageSlice';
import SSQuestionPopup from './popups/SSQuestionPopup';
import QuestionSection from './QuestionSection';

function RandomisedQuestions({ssQuestionState, openSecondStageQuestion, setSsAnswer, ssAnswer, closeSecondStageQuestion}) {
    const secondStageQs = useSelector(selectAllQuestions);
    
    return (
        <StyledRandomQs>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[0].transport[0].q} 
                    answerOptions={secondStageQs[0].transport[0].answerOptions} 
                    correctAnswer={secondStageQs[0].transport[0].correctAnswer} 
                    image={secondStageQs[0].transport[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[0].transport[1].q} 
                    answerOptions={secondStageQs[0].transport[1].answerOptions} 
                    correctAnswer={secondStageQs[0].transport[1].correctAnswer} 
                    image={secondStageQs[0].transport[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[0].transport[2].q} 
                    answerOptions={secondStageQs[0].transport[2].answerOptions} 
                    correctAnswer={secondStageQs[0].transport[2].correctAnswer} 
                    image={secondStageQs[0].transport[0].image} 
                />
            </li>

            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[1].energy[0].q} 
                    answerOptions={secondStageQs[1].energy[0].answerOptions} 
                    correctAnswer={secondStageQs[1].energy[0].correctAnswer}
                    image={secondStageQs[1].energy[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[1].energy[1].q} 
                    answerOptions={secondStageQs[1].energy[1].answerOptions} 
                    correctAnswer={secondStageQs[1].energy[1].correctAnswer}
                    image={secondStageQs[1].energy[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[1].energy[2].q} 
                    answerOptions={secondStageQs[1].energy[2].answerOptions} 
                    correctAnswer={secondStageQs[1].energy[2].correctAnswer}
                    image={secondStageQs[1].energy[0].image} 
                />
            </li>

            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[2].food[0].q} 
                    answerOptions={secondStageQs[2].food[0].answerOptions} 
                    correctAnswer={secondStageQs[2].food[0].correctAnswer}
                    image={secondStageQs[2].food[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[2].food[1].q} 
                    answerOptions={secondStageQs[2].food[1].answerOptions} 
                    correctAnswer={secondStageQs[2].food[1].correctAnswer}
                    image={secondStageQs[2].food[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[2].food[2].q} 
                    answerOptions={secondStageQs[2].food[2].answerOptions} 
                    correctAnswer={secondStageQs[2].food[2].correctAnswer}
                    image={secondStageQs[2].food[0].image} 
                />
            </li>
            
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[3].tourism[0].q} 
                    answerOptions={secondStageQs[3].tourism[0].answerOptions} 
                    correctAnswer={secondStageQs[3].tourism[0].correctAnswer}
                    image={secondStageQs[3].tourism[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[3].tourism[1].q} 
                    answerOptions={secondStageQs[3].tourism[1].answerOptions} 
                    correctAnswer={secondStageQs[3].tourism[1].correctAnswer}
                    image={secondStageQs[3].tourism[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[3].tourism[2].q} 
                    answerOptions={secondStageQs[3].tourism[2].answerOptions} 
                    correctAnswer={secondStageQs[3].tourism[2].correctAnswer}
                    image={secondStageQs[3].tourism[0].image} 
                />
            </li>

            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[4].waste[0].q} 
                    answerOptions={secondStageQs[4].waste[0].answerOptions} 
                    correctAnswer={secondStageQs[4].waste[0].correctAnswer}
                    image={secondStageQs[4].waste[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[4].waste[1].q} 
                    answerOptions={secondStageQs[4].waste[1].answerOptions} 
                    correctAnswer={secondStageQs[4].waste[1].correctAnswer}
                    image={secondStageQs[4].waste[0].image} 
                />
            </li>
            <li>
                <QuestionSection
                    openSecondStageQuestion={openSecondStageQuestion}
                    question={secondStageQs[4].waste[2].q} 
                    answerOptions={secondStageQs[4].waste[2].answerOptions} 
                    correctAnswer={secondStageQs[4].waste[2].correctAnswer}
                    image={secondStageQs[4].waste[0].image}
                />
            </li>
            {ssQuestionState && (
                <SSQuestionPopup 
                    ssAnswer={ssAnswer}
                    setSsAnswer={setSsAnswer}
                    closeSecondStageQuestion={closeSecondStageQuestion} 
                />
            )}
        </StyledRandomQs>
    )
}
const StyledRandomQs = styled.ul`
    >li{
        list-style: none;
        position: absolute;
        cursor: pointer;
        :first-child{
            top: 50%;
            right: 25%;
        }
        :nth-child(2){
            bottom: 10%;
            left: 10%;
        }
        :nth-child(3){
            bottom: 30%;
            left: 40%;
        }
        :nth-child(4){
            top: 10%;
            right: 30%;
        }
        :nth-child(5){
            top: 7%;
            left: 25%;
        }
        :nth-child(6){
            bottom: 10%;
            right: 30%;
        }
        :nth-child(7){
            top: 60%;
            right: 5%;
        }
        :nth-child(8){
            top: 40%;
            left: 33%;
        }
        :nth-child(9){
            bottom: 17%;
            left: 18%;
        }
        :nth-child(10){
            top: 60%;
            right: 30%;
        }
        :nth-child(11){
            top: 70%;
            right: 10%;
        }
        :nth-child(12){
            top: 34%;
            right: 18%;
        }
        :nth-child(13){
            top: 20%;
            right: 35%;
        }
        :nth-child(14){
            top: 50%;
            right: 40%;
        }
        :nth-child(15){
            top: 45%;
            right: 10%;
        }
    }
`;

export default RandomisedQuestions

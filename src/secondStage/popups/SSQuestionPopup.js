import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectActiveAnswers, selectActiveCorrectAnswer, selectActiveQuestion } from '../../features/secondStageSlice';
import CloseIcon from '@material-ui/icons/Close';

function SSQuestionPopup({closeSecondStageQuestion,setSsQuestionState, setSsAnswer, ssAnswer,ssQuestionState}) {

    const ssActiveQuestion = useSelector(selectActiveQuestion);
    const ssActiveAnswers = useSelector(selectActiveAnswers);
    const ssActiveCorrectAnswer = useSelector(selectActiveCorrectAnswer);

    return (
        <StyledSSQuestionPopup>
            <CloseIcon onClick={() => setSsQuestionState(false)} />
            <h3>{ssActiveQuestion}</h3>
            <select onChange={(e) => setSsAnswer(e.target.value)} value={ssAnswer}>
                <option></option>
                {ssActiveAnswers.map((activeAnswer) => (
                    <option key={activeAnswer}>{activeAnswer}</option>
                ))}
            </select>
            <button onClick={(e) => closeSecondStageQuestion(e, ssActiveCorrectAnswer)}>Iesniegt</button>
            <img src="secondStageImages/question-mark.svg" alt=""/>
        </StyledSSQuestionPopup>
    )
}
const StyledSSQuestionPopup = styled.form`
  
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    border-radius: 15px;
    height: 100%;
    background: white;
    top: 0;
    left: 0;
    text-align: center;
    border: 5px solid #2c85a4;
    animation: appear 1s;

  .MuiSvgIcon-root{
    color: #2f2f2f;
    height: 35px;
    width: 35px;
    position: absolute;
    right: 15px;
    top: 15px;
    cursor:pointer;
  }
  img{
    position: absolute;
    height: 25vh;
    width: 25vw;
    transform: translate(-50%,-50%);
    bottom: -50px;
    left: 50%;
  }
    h3{
      text-align: center;
      position: absolute;
      margin: 60px;
      font-size: 30px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
  
    }
    select{
      width: fit-content;
      min-width: 40%;
      margin-left: auto;
      margin-right: auto;
      font-family: "Poppins", sans-serif;
      font-size:16px;
      margin-top:200px;
      font-weight: 200;
      height: 30px;
      border-radius:5px ;
      border:3px solid lightgray;
    }
  button{
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    width: 300px;
    border: none;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    font-size:24px;
    font-family:"Josefin Sans", sans-serif;
    background-color:#9aca3c;
    color:white;
    :hover, :focus, :active{
      animation-name: pulse;
      animation-duration: 0.7s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
  @keyframes appear{
  from{
    opacity: 0;
    transform: scale(0);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
}
  @keyframes pulse {
    to {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @media(max-width: 800px){
    img{
      bottom: -90px;
    }
  }
  @media(max-width: 729px){
    img{
      display: none;
    }
  }
  @media(max-width: 575px){
    h3{
      font-size: 26px;
    }
  }
  @media(max-width: 535px){
    >button{
      margin-top:100px;
    }
  }
  @media(max-width: 458px){
    >button{
      width: 70%;
      margin-top:50px;
    }
  }
  @media(max-width: 400px){
    h3{
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      width: 100%;
      font-size: 20px;
    }
    select{
      margin-top: 150px;
    }
    .MuiSvgIcon-root{
      height: 25px;
      width: 25px;
    }
  }
  @media(max-width: 340px){
   button{
     margin-top: 30px;
   }
  }
`;

export default SSQuestionPopup


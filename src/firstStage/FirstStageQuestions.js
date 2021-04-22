import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectTheme,
  selectThemeImage,
  selectQuestions,
} from "../features/gameSlice";

function FirstStageQuestions({firstPartAnswer, answerCounter}) {
  const activeImage = useSelector(selectThemeImage);
  const activeTheme = useSelector(selectTheme);
  const activeQuestions = useSelector(selectQuestions);

  return (
    <FirstStageQPopup>
      {activeTheme !== "" && (
        <>
          <div className="image">
            <img src={activeImage} alt={activeTheme} />
          </div>
          <div className="text">
            <p>{activeQuestions[answerCounter].q}</p>
          </div>
          <div className="true__false--container">
            <button className="true__button" onClick={() => {
              firstPartAnswer(true);
            }}>👍 Patiess</button>
            <button className="false__button" onClick={() => {
              firstPartAnswer(false);
            }}>👎 Aplams</button>
          </div>
        </>
      )}
    </FirstStageQPopup>
  );
}

const FirstStageQPopup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  overflow: hidden;

  .image > img {
    width: 150px;
    height: 150px;
  }

  .text > p {
    padding: 5px;
    font-size: 40px;
    z-index: 10;
    font-weight: 600;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }

  > .true__false--container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-top: 50px;
    display: inline-block;

    > button {
      height: 50px;
      width: 55%;
      border-radius: 10px;
      border: none;
      color: white;
      font-weight: 600;
      font-size: 20px;
      font-family: 'Poppins', sans-serif;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;

      :hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }


    .true__button {
      background-color: #0fc80b;

      :hover {
        background-color: #14a710;
      }
    }

    .false__button {
      background-color: #ff0002;

      :hover {
        background-color: #de1012;
      }
    }
  }

  .text {
    margin-top: 30px;
    background-color: white;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 20px;
    width: 90%; 
  }

  .image {
    padding-left: 25px;
    padding-top: 25px;
    background-color: #c4e0c0;
    border-radius: 10px;
    height: 200px;
    width: 200px;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 .5rem #fff,
    inset 0 0 .5rem #fff,
    0 0 2rem #adcda7,
    inset 0 0 2rem #adcda7,
    0 0 4rem #adcda7,
    inset 0 0 4rem #adcda7;
    -webkit-animation-name: hvr-bob-float, hvr-bob;
    animation-name: hvr-bob-float, hvr-bob;
    -webkit-animation-duration: .3s, 1.5s;
    animation-duration: .3s, 1.5s;
    -webkit-animation-delay: 0s, .3s;
    animation-delay: 0s, .3s;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-direction: normal, alternate;
    animation-direction: normal, alternate;
  }

  @-webkit-keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @-webkit-keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
  @media(max-width: 1045px){
    .text>p{
      font-size: 36px;
    }
  }
  @media(max-width: 935px){
    .text>p{
      font-size: 32px;
    }
  }
  @media(max-width: 832px){
    .text>p{
      font-size: 28px;
    }
  }
  @media(max-width:422px){
    .true__false--container{
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      margin-top: 50px;
      display: inline-block;
      
      >button{
        width: 79%;
      }
    }
  }
  @media(max-height: 671px){
      margin-top: -50px;
  }
  @media(max-height: 637px){
    .true__false--container{
      margin-top: 20px;
    }
  }
  @media(max-height: 605px){
    margin-top: -80px;
    .true__false--container{
      margin-top: 0;
      >button{
        margin-top:10px;
      }
    }
  }
  @media(max-width: 320px){
    .text>p{
      font-size:16px;
    }
  }
  @media(max-width: 488px){
    .text>p{
      font-size:20px;
    }
  }
`;

export default FirstStageQuestions;

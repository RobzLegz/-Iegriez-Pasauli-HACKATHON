import React from "react";
import styled from "styled-components";

function Spinner({ wheelRef }) {

  return (
    <StyledSpinnerPage>
        <div className="wrapper">
        <h1>Veiksmes Rats</h1>
        <p>Iegriez, lai izpētītu!</p>
        </div>
        <SpinnerComponent ref={wheelRef}>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    <img src="firstStageResources/shirt.svg" alt="Shirt" />
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                <img src="firstStageResources/banana.svg" alt="banana" />
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                <img src="firstStageResources/burger.svg" alt="Burger" />
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                <img src="firstStageResources/headphone-symbol.svg" alt="Headphones" />
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    <img src="firstStageResources/longboard.svg" alt="Longboard" />
                </SpinnerOptionInnerEl>
            </SpinnerOption>
        </SpinnerComponent>
    </StyledSpinnerPage>
  );

}

const StyledSpinnerPage = styled.div`
  .wrapper {
    height: 130px;
    width: 40%;
    border-radius: 15px;
    text-align: center;
    position: absolute;
    vertical-align: middle;
    display: inline-block;
    color: white;
    background: linear-gradient(120deg, #fd5679, #d64259);
    top: 50px;
    padding: 10px;
    left: 30%;
    animation: Wrapper 1s, Wrapper 1s 4s reverse forwards,flicker 1.5s infinite alternate;
    h1{
      font-size: 42px;
      margin-bottom: 10px;
    }
    p{
      font-size: 30px;
      font-weight: 200;
    }
  }
@keyframes Wrapper {
  0% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes flicker {

  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    box-shadow: 0 0 .5rem #fff,
    inset 0 0 .5rem #fff,
    0 0 2rem #ec4163,
    inset 0 0 2rem #ec4163,
    0 0 4rem #ec4163,
    inset 0 0 4rem #ec4163;
  }
  20%, 24%, 55% {
    box-shadow: none;
  }
}
@media(max-width: 998px){
  .wrapper{
      h1{
        font-size: 36px;
        margin-bottom: 10px;
      }
      p{
        font-size: 24px;
        font-weight: 200;
      }
  }  
}
@media(max-width: 815px){
  .wrapper{
    width: 60%;
    left: 20%;
    top: 35px;
  }
  
}
@media(max-width: 439px){
  .wrapper{
    width: 90%;
    height: 110px;
    left: 5%;
  }
}
`;
const SpinnerComponent = styled.ul`
  margin-top: 210px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid lightgray;
 
  height: 70vh;
  max-height: 70vw;
  width: 70vw;
  max-width: 70vh;
  transition: transform 5s ease;

  @media(max-width: 552px){
    height: 90vh;
    max-height: 90vw;
    width: 90vw;
    max-width: 90vh;
    border: 5px solid lightgray;
  }
  @media(max-width: 610px){
    border: 5px solid lightgray;
  }
  @media(max-height:568px){
    margin-top: 160px;
  }
`;
const SpinnerOption = styled.li`
  
  :root {
    --main-color: #9aca3c;

    --green: #495f41;
    --lightgreen: #c4e0c0;
    --darkblue: #3c3c58;
    --light-brown: #ebe1d1;
    --light-brown1: #efeae4;
    --bereza: #2c85a4;
    --lightbereza: #c3e5ed;
    --orange: #ffa52f;
    --darkpink: #fd5679;
  }

  position: absolute;
  height: 50%;
  width: 50%;
  transform-origin: 100% 100%;
  transform: rotate(0deg) skewy(18deg);
  box-shadow: 0 0 0 2px #7e7a7a, inset 0 0 0 2px #7e7a7a;
  background: #D6C536;
  transition: 0.8s ease-out;

  :nth-child(2) {
    transform: rotate(72deg) skewy(18deg);
    background: #c3e5ed;
  }

  :nth-child(3) {
    transform: rotate(144deg) skewy(18deg);
    background: #E0E038;
  }

  :nth-child(4) {
    transform: rotate(216deg) skewy(18deg);
    background:  #36D63A;
  }

  :nth-child(5) {
    transform: rotate(288deg) skewy(18deg);
    background: #ffa52f;
  }

  > img {
    height: 80%;
    transition: 0.3s ease-in-out;
    transform: rotate(45deg);

  }
`;

const SpinnerOptionInnerEl = styled.div`
  margin: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 60%;
  border-radius: 50%;
  transform: skewy(-18deg) rotate(0deg);
  color: lightgray;
  transition: 0.4s ease-in-out;

  :nth-child(2) { 
    transform: skewy(-18deg) rotate(-72deg); 
  }
  :nth-child(3) { 
    transform: skewy(-18deg) rotate(-144deg); 
  }
  :nth-child(4) { 
    transform: skewy(-18deg) rotate(-216deg); 
  }
  :nth-child(5) { 
    transform: skewy(-18deg) rotate(-288deg); 
  }
  > img {
    width: 100px;
    height: 100px;
    transform: rotate(-40deg);
    margin-right: 10px;
    z-index:3000;
  }
  @media(max-width: 766px){
    >img{
      width: 70px;
      height: 70px;
    }
  }
  @media(max-width: 594px){
    >img{
      width: 60px;
      height: 60px;
    }
  }
  @media(max-width: 456px){
    
    >img{
      width: 50px;
      height: 50px;
    }
  }
  @media(max-width: 375px){
    >img{
      width: 45px;
      height: 45px;
    }
  }
  @media(max-width: 330px){
    >img{
      width: 40px;
      height: 40px;
    }
  }
`;

export default Spinner;

import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router';

function LandingPage({instructionState, setInstructionState}) {

    const history = useHistory();

    return (
        <StyledLandingPage>
            <header>
                <img className="infinity" src="landingPageResources/infinity.svg" alt="logo" />
                <button className="login" onClick={() => history.push("/login")}>Login</button>
            </header>

            <h1>Iegriez Pasauli</h1>
            <div className="earth"/>
            <div className="pogas">
                <button className="start" onClick={() => history.push("/game")}><span>Sākt spēli</span>
                    <div className="liquid"/>
                </button>
                <button id="instrukcija" onClick={() => setInstructionState(true)}> 
                    <span>Spēles Instrukcija</span>
                    <div className="liquid1"/>
                </button>
            </div>
            {instructionState && (
                 <StyledInstructions>
                 <CloseIcon className="close" onClick={() => setInstructionState(false)} />
                 <h2>Sveicināti spēles "Iegriez pasauli instrukcijā"!</h2>
                 <img src="landingPageResources/instructions.svg" alt=""/>
                 <ul>
                     <li><span>1.</span> Spiediet pogu "Sākt spēli".</li>
                     <li><span>2.</span> Lai iegrieztu ratu Jums ir jānospiež poga "Iegriezt".</li>
                     <li><span>3.</span> Rats Jums noteiks tēmu un pēc tam, Jums tiks uzdoti jautājumi par noteikto tēmu.</li>
                     <li><span>4.</span> 1.kārtā tiks uzdoti 5 jautājumi, par katru pareizo atbildi jūs saņemsiet 1 punktu.</li>
                     <li><span>5.</span> Pēc tam jūs nonāksiet Eiropas kartē, kur spiežot uz simbola Jūs dabūsiet jautājumu.</li>
                     <li><span>6.</span> Par katru pareizi atbildēto jautājumu Jūs saņemsiet 5 punktus.</li>
                     <li><span>7.</span> 3.kārtā Jūsu uzdevums ir pēc iespējas vairāk atlasīt pareizos vārdus vai vārdu savienojumus.</li>
                     <li><span>8.</span> Pēc 3.kārtas Jūsu uzzināsiet cik punktus nopelnījāt un kāda ir jūsu loma. </li>
                 </ul>
             </StyledInstructions>
            )}

        </StyledLandingPage>

    )
}
const StyledLandingPage = styled.div`
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
    --darpink: #fd5679;
  }
  
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: sticky;
  align-items: center;
  background: linear-gradient(120deg, #efeae4, #ebe1d1);
  font-family: 'Poppins', sans-serif;
  animation: pageInAnimation 1.75s;
  overflow: hidden;

  @keyframes pageInAnimation {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  header{
    width:90%;
    height: 75px;
    border-bottom: 2px solid lightgray;
  }
  header>img{
    height: 80px;
    width: 80px;
    margin-left:10px;
    
  }

  .login {
    margin-top: 15px;
    float: right;
    height: 50px;
    width: 180px;
    border-radius: 10px;
    background: #449eb7;
    font-size:32px;
    border: 4px solid #d0d0d0;
    box-shadow: none;
    :hover {
      background-color: #c3e5ed;
      color:#2f2f2f;
    }
  }

  button {
    height: 75px;
    width: 220px;
    border-radius: 50px;
    background-color: #ffa52f;
    color: white;
    margin-right: 30px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 32px;
    border: none;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
    position: relative;
    display: block;
    overflow: hidden;
    margin-left: 200px;
  }

  #instrukcija {
    margin-right: 200px;
  }

  #instrukcija > span {
    position: relative;
    color: #fff;
    font-size: 21px;
    font-family: 'Josefin Sans', sans-serif;
    z-index: 1;
  }

  .pogas {
    display: flex;
    flex-direction: row;
    margin-top: 75px;
  }

  button .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 220px;
    height: 200px;
    background: #ffa52f;
    box-shadow: inset 0 0 50px rgba(255, 0, 0, 0.5);
    transition: .5s;
  }

  button > span {
    position: relative;
    color: #fff;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 26px;
    letter-spacing: 1px;
    z-index: 1;
  }

  button .liquid::after,
  button .liquid::before {
    content: '';
    width: 175%;
    height: 175%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
  }

  button .liquid::before {
    border-radius: 45%;
    background: rgba(255, 0, 0, .1);
    animation: animate 5s linear infinite;
  }

  button .liquid::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, .5);
    animation: animate 10s linear infinite;
  }

  button:hover .liquid {
    top: -120px;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }

  button .liquid1 {
    position: absolute;
    top: -80px;
    left: 0;
    width: 220px;
    height: 200px;
    background: #3c3c58;
    box-shadow: inset 0 0 50px rgba(40, 35, 203, 0.5);
    transition: .5s;
  }

  button .liquid1::after,
  button .liquid1::before {
    content: '';
    width: 175%;
    height: 175%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: rgb(255, 255, 255);
  }

  button .liquid1::before {
    border-radius: 45%;
    background: rgba(255, 0, 0, .1);
    animation: animate1 5s linear infinite;
  }

  button .liquid1::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, .5);
    animation: animate1 10s linear infinite;
  }

  button:hover .liquid1 {
    top: -120px;
  }

  @keyframes animate1 {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }

  h1 {
    color: #9aca3c;
    font-size: 100px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 400px;
    font-weight: 800;
    text-align: center;
    opacity: 0.9;
    z-index: 1;
    -webkit-text-stroke: 5px black;
    position: absolute;
  }

  .earth {
    position: relative;
    height: 600px;
    width: 600px;
    background-image: url("landingPageResources/Earth.jpg");
    border-radius: 50%;
    margin-top: 70px;
    background-size: 1100px;
    box-shadow: inset 0 0 20px rgba(0, 0, 0, 1), 0 0 50px #4069ff;
    animation-name: spin;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 15s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.7s;
    transition-duration: 0.7s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }

  @keyframes spin {
    from {
      background-position-x: 0;
    }
    to {
      background-position-x: 1100px;
    }
  }

  .earth:hover {
    -webkit-transform: scale(1.1) rotate(7deg);
    transform: scale(1.1) rotate(7deg);
  }

  @media (max-width: 795px) {
    .earth {
      width: 300px;
      height: 300px;

    }
    .pogas {
      margin-top: 25px;
      display: inline-block;
    }

    #instrukcija {
      margin-top: 30px;
    }
  }
  @media (max-width: 1175px) {
    .earth {
      margin-top: 50px;
      height: 500px;
      width: 500px;
      background-size: 900px;
      animation-name: spin;
      animation-duration: 12s;
      -webkit-animation-duration: 12s;
      @keyframes spin {
        from {
          background-position-x: 0;
        }
        to {
          background-position-x: 900px;
        }
      }
    }
      h1 {
         font-size:80px;
         margin-top: 350px;
       }
    }
  @media (max-width: 903px) {
    
    h1 {
      font-size: 75px;
      margin-top: 350px;
      -webkit-text-stroke: 4px black;
    }
  }
  @media(max-width: 758px){
    h1{
      font-size:70px;
    }
  }
  @media(max-width: 710px){
    h1{
      font-size:65px;
    }
  }
  @media(max-width: 660px){
    h1{
      font-size:55px;
    }
  }
  @media (max-width: 565px) {
    .earth {
      width: 400px;
      height: 400px;
      background-size: 700px;
      animation-name: spin;
      animation-duration: 12s;
      -webkit-animation-duration: 12s;

      @keyframes spin {
        from {
          background-position-x: 0;
        }
        to {
          background-position-x: 700px;
        }
      }
    }
    h1 {
      font-size: 50px;
      margin-top: 300px;
      -webkit-text-stroke: 3px black;
    }
    .pogas{
      margin-top: 50px;
    }
  }
  @media(max-width:555px){
    .login{
      margin-top: -70px;
    }
  }
  @media(max-width:515px){
    h1{
      font-size:45px;
    }
  }
  @media (max-width: 467px) {
    .earth {
      width: 350px;
      height: 350px;
      background-size: 650px;
      animation-name: spin;
      animation-duration: 10s;
      -webkit-animation-duration: 10s;

      @keyframes spin {
        from {
          background-position-x: 0;
        }
        to {
          background-position-x: 650px;
        }
      }
    }

    h1 {
      font-size:40px;
      margin-top: 280px;
    }

    .pogas {
      margin-top: 55px;
    }
    
  }
  @media(max-width:416px){
    h1{
      font-size:37px;
    }
    .pogas{
      margin-top:25px;
    }
  }


  @media (max-width: 393px) {
    .earth {
      width: 300px;
      height: 300px;
      background-size: 550px;
      animation-name: spin;
      animation-duration: 12s;
      -webkit-animation-duration: 12s;
    }

    @keyframes spin {
      from {
        background-position-x: 0;
      }
      to {
        background-position-x: 550px;
      }
    }
    h1 {
      margin-top: 260px;
      font-size: 32px;
      -webkit-text-stroke: 2px black;
    }
    .pogas{
      margin-top: 70px;
    }
  }
  @media(max-width: 340px){
    .earth {
      width: 270px;
      height: 270px;
      background-size: 500px;
      animation-name: spin;
      animation-duration: 12s;
      -webkit-animation-duration: 12s;
    }
    @keyframes spin {
      from {
        background-position-x: 0;
      }
      to {
        background-position-x: 500px;
      }
    }

    h1{
        font-size:30px;
        margin-top: 250px;
      }
    .pogas{
      margin-top:50px;
    }
    .infinity{
      visibility: hidden;
    }
    .login{
      margin-right: 55px;
    }
  }
  @media (max-width: 321px) {
    .earth {
      width: 250px;
      height: 250px;
      background-size: 450px;
      animation-name: spin;
      animation-duration: 12s;
      -webkit-animation-duration: 12s;
    }
      @keyframes spin {
        from {
          background-position-x: 0;
        }
        to {
          background-position-x: 450px;
        }
      }
    
    h1 {
      font-size:30px;
      margin-top: 240px;
      -webkit-text-stroke: 2px black;
    }

    .pogas {
      margin-top:5px;
    }
    .start{
      height: 60px;
      width: 200px;
    }
    #instrukcija{
      margin-top: 20px;
      font-size: 15px;
      height: 60px;
      width: 200px;
    }
  }
`;

const StyledInstructions = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    color:black;
    width: 100%;
    min-height:100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    border-radius:10px;
    animation:instructions 0.75s;
    border: 5px solid #2c85a4;

   

  h2{
      font-size: 40px;
      margin: 60px;
      color:#2f2f2f;
      text-align: center;
      min-width: 100%;
      width: 100%;
      position: absolute;
    }
    span{
      font-weight: bold;
    }
  li{
    font-family: "Josefin Sans",sans-serif;
    font-size: 20px;
    padding: 15px;
    border-bottom: 2px solid #9aca3c;
  }
  img{
    height: 90px;
    width: 90px;
    margin-top: 130px;
    margin-bottom: 100px;
  }
    .close{
        height:37px;
        width:37px;
        position:absolute;
        top:15px;
        right:15px;
        cursor:pointer;
    }
    @keyframes instructions {
        from {
        opacity: 0;
        transform: translateX(10px);
        }
        to {
        opacity: 1;
        transform: translateX(0);
        }
    }
    h1{
        align-items: center;
        margin-top:auto;
        margin-bottom:auto;
    }
  @media(max-width: 781px){
    h2{
      font-size: 35px;
    }
  }
  @media(max-width: 560px){
    h2{
      font-size: 30px;
    }
    li{
      font-size: 16px;
    }
    .close{
      height:30px;
      width:30px;
    }
  }
  @media(max-width:373px){
    h2{
      font-size: 26px;
    }
    img{
      margin-top: 150px;
    }
  }
  
`;

export default LandingPage;

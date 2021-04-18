import React from 'react'
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router';

function LandingPage({instructionState, setInstructionState}) {

    const history = useHistory();

    return (
        <StyledLandingPage>
            <h1>Iegriez Pasauli</h1>
            <div className="earth"></div>
            <div className="pogas">
                <button onClick={() => history.push("/game")}><span>Sākt spēli</span>
                    <div className="liquid"></div>
                </button>
                <button id="instrukcija" onClick={() => setInstructionState(true)}> 
                    <span>Spēles instrukcija</span>
                    <div className="liquid1"></div>
                </button>
            </div>
            {instructionState && (
                <StyledIntsructions>
                    <CloseIcon className="close" onClick={() => setInstructionState(false)} />
                    <h1>Instrukcija</h1>
                </StyledIntsructions>
            )}
        </StyledLandingPage>
    )
}
const StyledLandingPage = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    position: sticky;
    align-items: center;
    background:linear-gradient(120deg,#fcf7f0,#EBE1D1);
    font-family:'Poppins', sans-serif;
    animation: pageInanimation 1.75s;
    overflow:hidden;

    @keyframes pageInanimation {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    
    button{
        height:75px;
        width:220px;
        border-radius:50px;
        background-color: #ffa52f;
        color:white;
        margin-right:30px;
        font-family: 'Josefin Sans', sans-serif;
        font-size:32px;
        border:none;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
        position: relative;
        display: block;
        overflow: hidden;
        margin-left:200px;
    }
    #instrukcija{
        margin-right:200px; 
    }
    #instrukcija > span{
        position: relative;
        color: #fff;
        font-size: 20px;
        font-family: 'Josefin Sans', sans-serif;
        z-index: 1;  
    }
    .pogas{
        display: flex;
        flex-direction: row;
        margin-top:90px;
        
    }
    button .liquid{
        position: absolute;
        top: -80px;
        left: 0;
        width: 220px;
        height: 200px;
        background: #ffa52f;
        box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
        transition: .5s;
    }
    button>span{
        position: relative;
        color: #fff;
        font-size: 20px;
        font-family: 'Josefin Sans', sans-serif;
        font-size:24px;
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
      
    button:hover .liquid{
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

    button .liquid1{
        position: absolute;
        top: -80px;
        left: 0;
        width: 220px;
        height: 200px;
        background: #3c3c58;
        box-shadow: inset 0 0 50px rgba(0, 0, 0, .5);
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
      
    button:hover .liquid1{
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
    h1{
        color:#9aca3c;
        font-size:100px;
        text-transform: uppercase;
        letter-spacing:2px;
        margin-top:200px;
        font-weight:800;
        text-align:center;
        opacity:0.9;
        z-index:1;
        -webkit-text-stroke: 5px black;
        position:absolute;
    }

    .earth{
        position:relative;
        height:600px;
        width:600px;
        background-image: url("landingPageResources/Earth.jpg");
        border-radius: 50%;
        margin-top:-50px;
        background-size:1100px;
        box-shadow: inset 0 0 20px rgba(0,0,0,1), 0 0 50px #4069ff;
        animation-name: spin;
        animation-duration:15s;
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

    @keyframes spin{
        from{
            background-position-x: 0;
        }
        to{
            background-position-x: 1100px;
        }
    }
    .earth:hover{
        -webkit-transform: scale(1.1) rotate(7deg);
        transform: scale(1.1) rotate(7deg);
    }
    
    @media (max-width:795px){
        .earth{
            width:300px;
            height:300px;

        }
        .pogas{
            display:inline-block;
            bottom:50px;
        }
        #instrukcija{
            margin-top:50px;
        }        
    }
    @media (max-width:1175px){
        .earth{
            margin-top:-50px;
            height:500px;
            width:500px;
            background-size:900px;
            animation-name: spin;
            animation-duration:12s;
            -webkit-animation-duration: 12s;
            @keyframes spin{
                from{
                    background-position-x: 0;
                }
                to{
                    background-position-x: 900px;
                }
            }
        }
        h1{
            font-size:80px;
            margin-top:150px;
        }
    }
  
    @media (max-width:903px){
        .earth{
            margin-top:-50px;
            height:500px;
            width:500px;
            background-size:900px;
            animation-name: spin;
            animation-duration:10s;
            -webkit-animation-duration: 10s;
            @keyframes spin{
                from{
                    background-position-x: 0;
                }
                to{
                    background-position-x: 900px;
                }
            }
        }
        h1{
            font-size:70px;
            margin-top: 150px;
            -webkit-text-stroke: 4px black;
        }
    }

    @media (max-width:565px){
        .earth{
            width:400px;
            height:400px;
            background-size:700px;
            animation-name: spin;
            animation-duration:12s;
            -webkit-animation-duration: 12s;

            @keyframes spin{
                from{
                    background-position-x: 0;
                }
                to{
                    background-position-x: 700px;
                }
            }
        }
        h1{
            font-size:70px;
        }
    }
    
    @media (max-width:467px){
        .earth{
            width:350px;
            height:350px;
            background-size:650px;
            animation-name: spin;
            animation-duration:10s;
            -webkit-animation-duration: 10s;

            @keyframes spin{
                from{
                    background-position-x: 0;
                }
                to{
                    background-position-x:650px;
                }
            }
        }

    }
    h1{
        margin-top:40px;
    } 


    @media (max-width:393px){
        .earth{
            width:300px;
            height:300px;
            background-size:550px;
            animation-name: spin;
            animation-duration:12s;
            -webkit-animation-duration: 12s;
        }

        @keyframes spin{
            from{
                background-position-x: 0;
            }
            to{
                background-position-x:550px;
            }
        }
        h1{
            margin-top:10px;
            font-size:60px;
        } 
    }
    @media (max-width:321px){
        .earth{
            width:250px;
            height:250px;
            background-size:450px;
            animation-name: spin;
            animation-duration:12s;
            -webkit-animation-duration: 12s;
            @keyframes spin{
                from{
                    background-position-x: 0;
                }
                to{
                    background-position-x: 450px;
                }
            }
        }
        h1{
            font-size:50px;
            -webkit-text-stroke: 3px black;
        }
        .pogas{ 
            margin-top:0px;
        }
    }
`;

const StyledIntsructions = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    color:black;
    width: 100%;
    min-height:100vh;
    height:fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    border-radius:10px;
    animation:instructions 0.75s;
    overflow:hidden;


    .close{
        height:37px;
        width:37px;
        position:absolute;
        top:25px;
        right:25px;
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
`;

export default LandingPage

import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { selectPoints } from '../features/userSlice'
import ReactRain from 'react-rain-animation';
import "react-rain-animation/lib/style.css";
import ReactConfetti from "react-confetti";

function FinishPage({playAgain,addToLeaderboard, setLeaderboardState, leaderboardState, setLeaderboardUsername, leaderboardUsername}) {
    const points = useSelector(selectPoints);

    return (
        <StyledFinishPage>
             <div className="results">
                <h3>{points < 35 ? "😞 Diemžēl" : " 🎉 Apsveicam!"} Jūs ieguvāt lomu </h3><br/> <h2>"{points < 35 ? "ŠVAKRITNIEKS" : points > 74 ? "APRITNIEKS" : "VIDRITNIEKS"}",</h2><br/><h3> un sasniedzāt {points} punktus!</h3>
            </div>
            {leaderboardState ? (
                <form>
                    <input type="text" value={leaderboardUsername} onChange={(e) => setLeaderboardUsername(e.target.value)} placeholder="lietotājvārds" />
                    <button onClick={(e) => addToLeaderboard(e)}>Labi</button>
                </form>
            ) : (
                <div className="end__button--container">
                    <button onClick={playAgain} id="again">Spēlēt vēlreiz</button>
                    <button id="best_results"><span>Labākie rezultāti</span></button>
                </div>
            )}
            {points < 35 ? (
                <ReactRain
                    numDrops="500"
                />
            ) : (
                <ReactConfetti/>
            )}            
        </StyledFinishPage>
    )
}
const StyledFinishPage = styled.div`

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
    -webkit-animation: animatezoom 2s;
    animation: animatezoom 2s;
    align-items: center;
    background: linear-gradient(120deg, #efeae4, #ebe1d1);
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    justify-content: center;


    @-webkit-keyframes animatezoom {
        from {
            -webkit-transform: scale(0)
        }
        to {
            -webkit-transform: scale(1)
        }
    }

    @keyframes animatezoom {
        from {
            transform: scale(0)
        }
        to {
            transform: scale(1)
        }
    }
    @-webkit-keyframes animating {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    @-moz-keyframes animating {
        0% {
        background-position: 0% 50%
        }
        50% {
        background-position: 100% 50%
        }
        100% {
        background-position: 0% 50%
        }
    }
    @keyframes animating {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
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

    .results {
        background: linear-gradient(white, floralwhite);
        background-size: 200% 200%;
        height: fit-content;
        border-radius: 15px;
        border: 5px solid #3a3a88;
        width: fit-content;
        max-width: 95%;
        margin-right: auto;
        margin-left: auto;
        padding: 25px;
        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
        -webkit-animation: animatezoom 2s, animating 3s ease infinite;
        animation: animatezoom 2s, animating 3s ease infinite;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
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

    .results > h3 {
        font-size: 3rem;
        text-align: center;
        -webkit-animation: animatezoom 2s, animating 3s ease infinite;
        animation: animatezoom 2s, animating 3s ease infinite;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
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

    .results > h2 {
        color: #9aca3c;
        font-size: 3rem;
        text-align: center;
        -webkit-animation: animatezoom 2s, animating 3s ease infinite;
        animation: animatezoom 2s, animating 3s ease infinite;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
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

    .end__button--container > button {
        height: 75px;
        width: 220px;
        border-radius: 100px;
        border: none;
        font-family: "Josefin Sans", sans-serif;
        font-size: 26px;
        padding: 5px;
        position: relative;
        bottom: 10px;
        margin-left: 200px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
        margin-right: 30px;
        color: white;
    }

    #again:hover {
        animation: jelly 1s;
    }

    #again {
        background: linear-gradient(120deg, #97ca93, #c4e0c0);
        background-size: 200% 200%;
        -webkit-animation: animating 3s ease infinite;
        -moz-animation: animating 3s ease infinite;
        animation: animating 3s ease infinite;
    }

    @keyframes jelly {
        25% {
            transform: scale(0.9, 1.1);
        }

        50% {
            transform: scale(1.1, 0.9);
        }

        75% {
            transform: scale(0.95, 1.05);
        }
    }

    .end__button--container {
        display: flex;
        flex-direction: row;
        margin-top: 75px;
    }

    #best_results {
        margin-right: 200px;
        background: linear-gradient(120deg, #27a5cf, #2c85a4);
        background-size: 200% 200%;
        -webkit-animation: animating 3s ease infinite;
        -moz-animation: animating 3s ease infinite;
        animation: animating 3s ease infinite;

        &:hover {
            animation: rotate 0.7s ease-in-out both;

            span {
                animation: storm 0.7s ease-in-out both;
                animation-delay: 0.06s;
            }

        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg) translate3d(0, 0, 0)
        }
        25% {
            transform: rotate(3deg) translate3d(0, 0, 0)
        }
        50% {
            transform: rotate(-3deg) translate3d(0, 0, 0)
        }
        75% {
            transform: rotate(1deg) translate3d(0, 0, 0)
        }
        100% {
            transform: rotate(0deg) translate3d(0, 0, 0)
        }
    }

    @keyframes storm {
        0% {
            transform: translate3d(0, 0, 0) translateZ(0)
        }
        25% {
            transform: translate3d(4px, 0, 0) translateZ(0)
        }
        50% {
            transform: translate3d(-3px, 0, 0) translateZ(0)
        }
        75% {
            transform: translate3d(2px, 0, 0) translateZ(0)
        }
        100% {
            transform: translate3d(0, 0, 0) translateZ(0)
        }
    }
`;
export default FinishPage

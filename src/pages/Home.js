import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import Spinner from '../spinner/Spinner';
import FortuneWheel from "../resources/fortune-wheel.svg";
import FirstStageQuestions from '../firstStage/FirstStageQuestions';

function Home({SpinTheWheel, wheelRef, spinAgain}) {
    return (
        <HomePage>
            <SpinnerContainer>
                <SpinnerArrow></SpinnerArrow>
                <Spinner wheelRef={wheelRef} />
                <Button disabled={!spinAgain} onClick={SpinTheWheel}>
                    <img src={FortuneWheel} alt="Fortune wheel"/>
                    <p>Iegriezt</p>
                </Button>
            </SpinnerContainer>
            <FirstStageQuestions />
        </HomePage>
    )
}
const HomePage = styled.div`
    padding: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const SpinnerContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    >button{
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border: 1px solid #3c3c58;
        >p{
            margin-left: 5px;
        }
    }
`;
const SpinnerArrow = styled.div`
    width: 0; 
    height: 0; 
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #3c3c58;
    margin-bottom: -10px;
    z-index: 10;
`;

export default Home

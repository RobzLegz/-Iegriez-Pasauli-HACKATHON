import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import Spinner from '../spinner/Spinner';
import FortuneWheel from "../resources/fortune-wheel.svg";

function Home({SpinTheWheel}) {
    return (
        <HomePage>
            <SpinnerContainer>
                <Spinner />
                <Button>
                    <img src={FortuneWheel} alt="Fortune wheel"/>
                    <p>Iegriezt</p>
                </Button>
            </SpinnerContainer>
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

export default Home

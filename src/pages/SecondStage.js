import React from 'react'
import styled from 'styled-components';
import MapImage from "../resources/europe-map.png";
import RandomisedQuestions from '../secondStage/RandomisedQuestions';

function SecondStage() {
    return (
        <StyledSecondStage>
            <div className="game__container">
                <img src={MapImage} alt="europe map"/>
                <RandomisedQuestions />      
            </div>  
        </StyledSecondStage>
    )
}
const StyledSecondStage = styled.div`
    background: #ebe1d1;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    >.game__container{
        position: relative;
        width: 90%;
        max-width: 900px; 
        >img{
            width: 100%;
        }
    }    
`;

export default SecondStage

import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectQuestions } from '../features/gameSlice';
import MapImage from "../resources/europe-map.png";

function SecondStage() {
  const activeQuestions = useSelector(selectQuestions);

  return (
        <StyledSecondStage>
            <div className="map__container">
                <img src={MapImage} alt="europe map"/>
                <div className="random__image--container">
                    
                </div>
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
    >.map__container{
        height: 100%;
        >img{
            height: 90%;
        }
    }
    
`;

export default SecondStage

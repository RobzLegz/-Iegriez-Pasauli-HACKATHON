import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectQuestions } from '../features/gameSlice';
import MapImage from "../resources/europe-map.png";

function SecondStage() {
  const activeQuestions = useSelector(selectQuestions);

  return (
        <StyledSecondStage>
            <img src={MapImage} alt="europe map"/>
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
`;

export default SecondStage

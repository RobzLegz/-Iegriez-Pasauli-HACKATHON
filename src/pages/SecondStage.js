import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllQuestions } from '../features/secondStageSlice';
import MapImage from "../resources/europe-map.png";
import QuestionSection from '../secondStage/QuestionSection';

function SecondStage() {
    const secondStageQs = useSelector(selectAllQuestions);

    return (
        <StyledSecondStage>
            <div className="map__container">
                <img src={MapImage} alt="europe map"/>
                <div className="random__image--container">
                    {secondStageQs[0].transport.map((transportQ) => (
                        <QuestionSection transportQ={transportQ} />
                    ))}
                    {secondStageQs[1].energy.map((energyQ) => (
                        <QuestionSection energyQ={energyQ} />
                    ))}
                    {secondStageQs[2].food.map((foodQ) => (
                        <QuestionSection foodQ={foodQ} />
                    ))}
                    {secondStageQs[3].tourism.map((tourismQ) => (
                        <QuestionSection tourismQ={tourismQ} />
                    ))}
                    {secondStageQs[4].waste.map((wasteQ) => (
                        <QuestionSection wasteQ={wasteQ} />
                    ))}
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
        width: 100%;
            display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        >img{
            width: 90%;
            max-width: 900px;
        }
    }
    
`;

export default SecondStage

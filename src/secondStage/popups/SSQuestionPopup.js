import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectActiveAnswers, selectActiveCorrectAnswer, selectActiveQuestion } from '../../features/secondStageSlice';

function SSQuestionPopup({closeSecondStageQuestion, setSsAnswer, ssAnswer}) {

    const ssActiveQuestion = useSelector(selectActiveQuestion);
    const ssActiveAnswers = useSelector(selectActiveAnswers);
    const ssActiveCorrectAnswer = useSelector(selectActiveCorrectAnswer);

    return (
        <StyledSSQuestionPopup>
            <h3>{ssActiveQuestion}</h3>
            <select onChange={(e) => setSsAnswer(e.target.value)} value={ssAnswer}>
                <option></option>
                {ssActiveAnswers.map((activeAnswer) => (
                    <option key={activeAnswer}>{activeAnswer}</option>
                ))}
            </select>
            <button onClick={(e) => closeSecondStageQuestion(e, ssActiveCorrectAnswer)}>Pārbaudīt</button>
        </StyledSSQuestionPopup>
    )
}
const StyledSSQuestionPopup = styled.form`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
    top: 0;
    left: 0;
`;

export default SSQuestionPopup

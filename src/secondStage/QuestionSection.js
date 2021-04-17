import React from 'react'
import styled from 'styled-components';

function QuestionSection({image}) {
    return (
        <StyledQuestionSection>
            <img src={image} alt="object"/>
        </StyledQuestionSection>
    )
}
const StyledQuestionSection = styled.div`
    >img{
        width: 50px;
        height: 50px;
    }
`;

export default QuestionSection

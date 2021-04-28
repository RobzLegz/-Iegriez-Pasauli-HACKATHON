import React from 'react'
import styled from 'styled-components';

function QuestionSection({image, question, answerOptions, correctAnswer, openSecondStageQuestion, id}) {
    return (
        <StyledQuestionSection>
            <img onClick={() => {
                openSecondStageQuestion(question, answerOptions, correctAnswer, id);
            }} src={image} alt="object" />
        </StyledQuestionSection>
    )
}
const StyledQuestionSection = styled.div`
    >img{
        width: 50px;
        height: 50px;
    }
  @media(max-width: 770px){
    >img{
      width: 40px;
      height: 40px;
    }
  }
  @media(max-width: 528px){
    >img{
      width: 30px;
      height: 30px;
    }
  }
  @media(max-width: 375px){
    >img{
      width: 25px;
      height: 25px;
    }
  }
`;

export default QuestionSection

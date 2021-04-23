import React from 'react'
import styled from 'styled-components';

function AdminPannel({adminQuestions}) {
    return (
        <StyledAdminPannel>
            <h1>admin pannel</h1>
            {adminQuestions.map((adminQuestion) => (
                <div className="qeustion__container" key={adminQuestion.choice_text}>
                    <p>{adminQuestion.question}</p>
                    <p>{adminQuestion.choice_text}</p>
                    <p>{adminQuestion.correct}</p>
                </div>
            ))}
        </StyledAdminPannel>
    )
}
const StyledAdminPannel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    >h1{
        margin-bottom: 20px;
    }
    >.qeustion__container{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid lightgray;
        height: 40px;
    }
`;

export default AdminPannel

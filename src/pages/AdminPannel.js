import React from 'react'
import styled from 'styled-components';

function AdminPannel({adminQuestions}) {
    return (
        <StyledAdminPannel>
            <h1>admin pannel</h1>
            {adminQuestions && adminQuestions.map((adminQuestion) => (
                <div className="qeustion__container" key={adminQuestion.id}>
                    <p>{adminQuestion.q}</p>
                    <div className="answer__options">
                        {adminQuestion.options.map((option) => (
                            <p key={option.question + option.choice_text}>{option.choice_text}</p>
                        ))}
                    </div>
                    <img src={adminQuestion.image} alt=""/>
                    <button>Saglabāt</button>
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
        height: fit-content;
        padding: 10px;
        >img{
            width: 40px;
            height: 40px;
        }
    }
`;

export default AdminPannel

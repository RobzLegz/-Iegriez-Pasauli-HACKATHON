import React from 'react'
import styled from 'styled-components';

function AdminPannel({wheelStops}) {
    return (
        <StyledAdminPannel>
            <h1>admin pannel</h1>
            {wheelStops && wheelStops.map((wheelStop) => (
                <div className="qeustion__container" key={wheelStop.deg}>
                    <img src={wheelStop.image} alt={wheelStop.value}/>
                    <div className="stage__questions">
                        {wheelStop && wheelStop.questions.map((firstStageQ) => (
                            <div className="stage__qna" key={firstStageQ.q}>
                                <p><strong>{firstStageQ.q}</strong></p>
                                <p>{firstStageQ.a.toString()}</p>
                            </div>
                        ))}
                    </div>
                    <div className="stage__questions">
                        
                    </div>
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
        flex-direction: column;
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
        >.answer__options{
            display: flex;
            >p{
                margin-left: 5px;
            }
        }
    }
`;

export default AdminPannel

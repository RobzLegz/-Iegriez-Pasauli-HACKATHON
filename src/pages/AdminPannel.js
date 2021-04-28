import React, { useState } from 'react'
import styled from 'styled-components';

function AdminPannel({wheelStops}) {
    const [questionVal, setQuestionVal] = useState("");

    return (
        <StyledAdminPannel>
            <h1>admin pannel</h1>
            {/* {wheelStops && wheelStops.map((wheelStop) => (
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
                        <div className="ss__qs">
                            <img src={wheelStop?.secondStageQuestions[0].transport[0].image} alt="lidmasina"/>
                            <input type="text" value={questionVal} onChange={(e) => setQuestionVal(e.target.value)} />
                            <div className="ss__qs--answers">
                                {wheelStop?.secondStageQuestions[0].transport[0].answerOptions.map((answerOption) => (
                                    <p>{answerOption}</p>
                                ))}
                            </div>
                            <p>{wheelStop?.secondStageQuestions[0].transport[0].xtraInfo}</p>
                        </div>
                        <div className="ss__qs">
                            <p><strong>{wheelStop?.secondStageQuestions[0].transport[1].q}</strong></p>
                            <div className="ss__qs--answers">
                                {wheelStop?.secondStageQuestions[0].transport[1].answerOptions.map((answerOption) => (
                                    <p>{answerOption}</p>
                                ))}
                            </div>
                            <p>{wheelStop?.secondStageQuestions[0].transport[1].xtraInfo}</p>
                        </div>
                        <div className="ss__qs">
                            <p><strong>{wheelStop?.secondStageQuestions[0].transport[2].q}</strong></p>
                            <div className="ss__qs--answers">
                                {wheelStop?.secondStageQuestions[0].transport[2].answerOptions.map((answerOption) => (
                                    <p>{answerOption}</p>
                                ))}
                            </div>
                            <p>{wheelStop?.secondStageQuestions[0].transport[2].xtraInfo}</p>
                        </div>
                    </div>
                </div>
            ))} */}
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
        >.stage__questions{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px;
            >.ss__qs{
                display: flex;
                flex-direction: column;
                align-items: center;
                >img{
                    width:30px;
                    height: 30px;
                }
            }
        }
    }
`;

export default AdminPannel

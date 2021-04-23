import React from 'react'

function AdminPannel({adminQuestions}) {
    return (
        <div>
            <h1>admin</h1>
            {adminQuestions.map((adminQuestion) => (
                <div key={adminQuestion.choice_text}>
                    <p>{adminQuestion.question}</p>
                    <p>{adminQuestion.choice_text}</p>
                    <p>{adminQuestion.correct}</p>
                </div>
            ))}
        </div>
    )
}

export default AdminPannel

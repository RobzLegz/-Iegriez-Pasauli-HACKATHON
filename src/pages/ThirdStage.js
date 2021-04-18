import React from 'react'

function ThirdStage({tsCorrectWords, tsIncorrectWords,startWordFlow, tsCountdownTimer}) {
    return (
        <div>
            {startWordFlow ? (
                <h1>assd</h1>
            ) : (
                <h1>{tsCountdownTimer}</h1>
            )}
        </div>
    )
}

export default ThirdStage

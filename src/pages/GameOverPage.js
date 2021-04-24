import React from 'react'

function GameOverPage({playAgain}) {
    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={playAgain}>Play again</button>
        </div>
    )
}

export default GameOverPage

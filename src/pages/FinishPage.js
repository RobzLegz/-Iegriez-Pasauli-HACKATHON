import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { selectPoints } from '../features/userSlice'

function FinishPage({playAgain,addToLeaderboard, setLeaderboardState, leaderboardState, setLeaderboardUsername, leaderboardUsername}) {
    const points = useSelector(selectPoints);

    return (
        <StyledFinishPage>
            <h3>{points < 35 ? "Diemžēl" : "Apsveicam"} Jūs ieguvāt lomu "{points < 35 ? "ŠVAKRITNIEKS" : points > 74 ? "APRITNIEKS" : "VIDRITNIEKS"}", un sasniedzāt {points} punktus!</h3>
            {leaderboardState ? (
                <form>
                    <input type="text" value={leaderboardUsername} onChange={(e) => setLeaderboardUsername(e.target.value)} placeholder="lietotājvārds" />
                    <button onClick={(e) => addToLeaderboard(e)}>Labi</button>
                </form>
            ) : (
                <div className="end__button--container">
                    <button onClick={playAgain}>Spēlēt vēlreiz</button>
                    <button onClick={() => setLeaderboardState(true)}>Labākie rezultāti</button>
                </div>
            )}
            
        </StyledFinishPage>
    )
}
const StyledFinishPage = styled.div`
    >h3{
        font-size: 1.4rem;
        text-align: center;
    }
`;

export default FinishPage

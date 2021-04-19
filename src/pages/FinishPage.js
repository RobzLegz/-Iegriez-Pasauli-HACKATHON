import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { selectPoints } from '../features/userSlice'

function FinishPage() {

    const points = useSelector(selectPoints);
    const history = useHistory();

    return (
        <StyledFinishPage>
            <h3>{points < 35 ? "Diemžēl" : "Apsveicam"} Jūs ieguvāt lomu "{points < 35 ? "ŠVAKRITNIEKS" : points > 74 ? "APRITNIEKS" : "VIDRITNIEKS"}", un sasniedzāt {points} punktus!</h3>
            <div className="end__button--container">
                <button onClick={() => history.push("/game")}>Spēlēt vēlreiz</button>
                <button>Labākie rezultāti</button>
            </div>
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

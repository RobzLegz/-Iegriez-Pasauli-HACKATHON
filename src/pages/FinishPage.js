import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { selectPoints } from '../features/userSlice'

function FinishPage() {

    const points = useSelector(selectPoints);

    return (
        <StyledFinishPage>
            <h3>{points < 35 ? "Diemžēl" : "Apsveicam"} Jūs ieguvāt lomu "{points < 35 ? "ŠVAKRITNIEKS" : points > 74 ? "APRITNIEKS" : "VIDRITNIEKS"}", un sasniedzāt {points} punktus!</h3>
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

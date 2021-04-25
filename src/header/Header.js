import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selectPoints } from '../features/userSlice';

function Header() {
    const points = useSelector(selectPoints);

    return (
        <StyledHeader>
            <h3>{points}</h3>
        </StyledHeader>
    )
}
const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
`;

export default Header

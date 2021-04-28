import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import {selectGameMinutes, selectGameSeconds } from '../features/gameSlice';
import { selectPoints } from '../features/userSlice';
import Money from './money.svg'

function Header() {
    const points = useSelector(selectPoints);
    const gameSeconds = useSelector(selectGameSeconds);
    const gameMinutes = useSelector(selectGameMinutes);

    return (
        <StyledHeader>
          <div className="header__left">
            <img src={Money} alt="Star"/>
            <h3>{points}</h3>
          </div>
          <div className="header__right">
            <h3>{gameMinutes < 10 ? "0" + gameMinutes : gameMinutes}.{gameSeconds < 10 ? "0" + gameSeconds : gameSeconds}</h3>
          </div>
        </StyledHeader>
    )
}
const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  font-family:"Josefin Sans", sans-serif;
  z-index:100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  width: 100%;
  >.header__left{
    display: flex;
  }
  h3{
    font-size: 30px;
    color: #2f2f2f;
  }
  img{
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
  @media(max-width: 320px){
    h3{
      font-size: 26px;
    }
    img{
      height: 25px;
      width: 25px;
    }
  }
`;

export default Header
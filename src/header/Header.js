import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import {selectGameMinutes, selectGameSeconds } from '../features/gameSlice';
import { selectPoints } from '../features/userSlice';
import Money from './money.svg'
import Timer from './clock.svg'

function Header() {
    const points = useSelector(selectPoints);
    const gameSeconds = useSelector(selectGameSeconds);
    const gameMinutes = useSelector(selectGameMinutes);

    return (
        <StyledHeader>
          <div className="header__left">
            <img src={Money} alt="Star" id="coin"/>
            <h3>{points}</h3>
          </div>
          <div className="header__right">
          <img src={Timer} alt="Clock" id="clock"/>
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
  padding: 0 10px;
  height: 60px;
  width: 100%;
  >.header__left{
    display: flex;
  }
  >.header__right{
    display: flex;
  }
  h3{
    margin-top: 5px;
    font-size: 30px;
    color: #2f2f2f;
  }
  #coin{
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
  #clock{
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
  @media(max-width: 320px){
    h3{
      font-size: 26px;
    }
    #coin{
      margin-top: 5px;
      height: 25px;
      width: 25px;
    }
    #clock{
      margin-top: 2px;
      height: 25px;
      width: 25px;
    }
  }
`;

export default Header
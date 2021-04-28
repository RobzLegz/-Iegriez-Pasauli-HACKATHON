import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selectPoints } from '../features/userSlice';
import Money from './money.svg'

function Header() {
    const points = useSelector(selectPoints);

    return (
        <StyledHeader>
            <img src={Money} alt="Star"/>
            <h3>{points}</h3>
        </StyledHeader>
    )
}
const StyledHeader = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    font-family:"Josefin Sans", sans-serif;
    z-index:1000;
    
    h3{
      font-size: 30px;
      margin-top: 5px;
      color: #2f2f2f;
    }
  img{
    float: right;
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
  @media(max-width: 320px){
    top: 10px;
    left: 0;
    h3{
      font-size: 26px;
      margin-top:1px;
    }
    img{
      height: 25px;
      width: 25px;
    }
  }
`;

export default Header
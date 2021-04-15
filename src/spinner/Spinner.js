import React from 'react'
import styled from 'styled-components';
import Banana from "../resources/banana.svg";
import Burger from "../resources/burger.svg";
import Headphones from "../resources/headphone-symbol.svg";
import Longboard from "../resources/longboard.svg";
import Shirt from "../resources/shirt.svg";

function Spinner() {
    return (
        <SpinnerComponent>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    <img src={Banana} alt="banana"/>
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    <img src={Burger} alt="Burger"/>
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    <img src={Headphones} alt="Headphones"/>
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    <img src={Longboard} alt="Longboard"/>
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    <img src={Shirt} alt="Shirt"/>
                </SpinnerOptionInnerEl>
            </SpinnerOption>
        </SpinnerComponent>
    )
}

const SpinnerComponent = styled.ul`
    width: 25rem;
    height: 25rem;
    border: 1px solid #3c3c58;
    position: relative;
    margin: 1rem auto;
    border-radius: 50%;
    list-style: none;
    overflow: hidden;
    background: #c4e0c0;
`;
const SpinnerOption = styled.li`
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 50%;
    transform-origin: 0% 100%;
    :first-child{
        transform: rotate(0deg) skewY(-60deg);
        >div{
            background: #495f41;
        }
    }
    :nth-child(2){
        transform: rotate(72deg) skewY(-60deg);
        >div{
            background: #ffa52f;
        }
    }
    :nth-child(3){
        transform: rotate(144deg) skewY(-60deg);
        >div{
            background: #495f41;
        }
    }
    :nth-child(4){
        transform: rotate(216deg) skewY(-60deg);
        >div{
            background: #ffa52f;
        }
    }
    :nth-child(5){
        transform: rotate(288deg) skewY(-60deg);
        >div{
            background: #495f41;
        }
    }
`;

const SpinnerOptionInnerEl = styled.div`
    position: absolute;
    left: -100%;
    width: 200%;
    height: 200%;
    text-align: center;
    display: block;
    transform: skewY(60deg) rotate(15deg);
    padding-top: 20px;
`;

export default Spinner

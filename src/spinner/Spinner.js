import React from 'react'
import styled from 'styled-components';
import Banana from "../resources/banana.svg";
import Burger from "../resources/burger.svg";
import Headphones from "../resources/headphone-symbol.svg";
import Longboard from "../resources/longboard.svg";
import Shirt from "../resources/shirt.svg";
import QuestionMark from "../resources/question-mark.svg"

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
    width: 300px;
    height: 300px;
    border: 1px solid #3c3c58;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    background: transparent;
`;
const SpinnerOption = styled.li`
    position: absolute;
    width: 50%;
    height: 50%;
    top: 0%;
    left: 0%;
    overflow: hidden;
    list-style: none;
    transform-origin: 0 150px;
    ::before{
        content: "";
        width: 50%;
        height: 50%;
        position: absolute;
        transform-origin: 0 150px;
        top: 0%;
        left: 0%;
        background: transparent;
    }
    :nth-child(1){
        transform: translateX(150px) rotate(0deg);
        z-index: 2;
        ::before{
            transform: rotate(100deg)
        }
        >div{
            background: #9ACA3C;
        }
    }
    :nth-child(2){
        z-index: 3;
        transform: translateX(150px) rotate(72deg);
        ::before{
            transform: rotate(100deg)
        }
        >div{
            background: #c4e0c0;
        }
    }
    :nth-child(3){
        z-index: 4;
        transform: translateX(150px) rotate(144deg);
        ::before{
            transform: rotate(160deg)
        }
        >div{
            background: #D6C536;
        }
    }
    :nth-child(4){
        z-index: 5;
        transform: translateX(150px) rotate(216deg);
        ::before{
            transform: rotate(100deg)
        }
        >div{
            background: #E0E038
        }
    }
    :nth-child(5){
        z-index: 6;
        transform: translateX(150px) rotate(288deg);
        ::before{
            transform: rotate(100deg)
        }
        >div{
            background: #6EE038
        }
    }
`;

const SpinnerOptionInnerEl = styled.div`
    transition: all 1s;
    width: 100%;
    height: 100%;
    transform-origin: 0 150px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    >img{
        width: 40px;
        height: 40px;
        object-fit: cover;
        transform: rotate(45deg);
        margin-right: 35px;
    }
`;

export default Spinner

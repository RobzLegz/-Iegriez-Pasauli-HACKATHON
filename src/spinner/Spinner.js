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
                    1
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    2
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    3
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    4
                </SpinnerOptionInnerEl>
            </SpinnerOption>
            <SpinnerOption>
                <SpinnerOptionInnerEl>
                    5
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
`;
const SpinnerOption = styled.li`
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
    
`;

export default Spinner

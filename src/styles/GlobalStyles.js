import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        /* ::-webkit-scrollbar {
            width: 10px;
        }
        ::-webkit-scrollbar-track {
            background: #ebe1d1
        }
        ::-webkit-scrollbar-thumb {
            background: #2c85a4;
            border: 1px solid  #3c3c58;
            border-radius: 10px;
            :hover {
                background: #3c3c58;
            }
        } */
        overflow: hidden;
    }
    button, 
    input{
        border-radius: 5px;
        outline: none;
    }
    button{
        cursor: pointer;
        margin-top: 20px;
        color: #3c3c58;
        font-size: 1rem;
        transition: background 0.3s ease;
    }
`;

export default GlobalStyles;

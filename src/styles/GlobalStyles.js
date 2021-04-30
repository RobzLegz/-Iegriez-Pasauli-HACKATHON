import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    div{
        overflow: hidden;
    }
    body{
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

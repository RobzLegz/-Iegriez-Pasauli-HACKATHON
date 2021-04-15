import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    button, 
    input,
    select{
        outline: none;
        border: 1px solid lightgray;
        background: #f9f9f9;
        color: #333;
        border-radius: 5px;
    }
    button{
        cursor: pointer;
    }
`;

export default GlobalStyles;

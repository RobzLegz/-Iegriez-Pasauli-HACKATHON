import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    button, 
    input{
        border-radius: 5px;
    }
    button{
        cursor: pointer;
        margin-top: 20px;
    }
`;

export default GlobalStyles;

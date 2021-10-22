import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
        font-family: "Encode Sans Expanded", sans-serif;
    }
    button{
        cursor: pointer;
    }
    :root{
        --red: #ff0000;
        --white: #f5f5f5;
        --black: #0c0d0d;
        --grey: #343336;
        --purple5: #5F4B75;
        --purple4: #4c2875;
        --purple3: #7E42C2;
        --purple2: #A054F5;
        --purple1: #C79EF7;
    }
`;

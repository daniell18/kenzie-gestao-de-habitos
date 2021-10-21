import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ConteinerModal = styled.div`
    width: 90%;
    height: 80%;
    left: 0;
    right: 0;
    

    background-color: white;
    opacity: inherit;
    border: solid 2px red;
    border-radius: 10px;
        
    .buttonClose{
        margin-top: 10px;

        width: 5%;
        background-color: red;
        border-radius: 5px;

        position: relative;
        right: -95% ;

        display: flex;
    }
    .buttonClose:hover{
        background-color: white;
        border: 2px solid red;
        right: 100%;

    }
    
`

export const ConteinerForm = styled.form`


`


import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;
    background-color:rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ConteinerModal = styled.div`
    width: 80%;
    height: 70%;
    top: 0px;
    background-color: var(--purple3);
    opacity: inherit;
    border: solid 2px var(--black);
    border-radius: 10px;
    position: fixed;

    .buttonClose{
       
        background-color: var(--purple3);
        position: fixed;
        left: 82%;
        display: flex;
        border: 0;
        font-size: 20px;
    }   
`;

export const ConteinerForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
    width: 100%;
    height: 90%;
    .nome{
        font-size: 25px;
        color: var(--black);
        margin-bottom: 20px;
        text-align:center;
    }
    h1{
        margin-bottom: 15px;
        font-size: 15px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
        color: var(--white);
        margin-bottom: 20px;
    }
    input{
        background-color: var(--purple3);
        width: 90%;
        height: 40px;
        border: solid 2px var(--black);
        border-radius: 30px;
        font-size: 15px;
        padding: 15px;
        box-shadow: 2px 2px 5px 1px;
        text-align:center;
    }
    input::placeholder {
        color: var(--white);
        text-align: center;
    }
    select{
        background-color: var(--white);
        width: 90%;
        height: 40px;
        border: solid 2px var(--black);
        border-radius: 30px;
        text-align:center;
        font-size:15px;
        padding-left: 15px;
        color: var(--black);
        box-shadow: 2px 2px 5px 1px;
    }
    button{
        background-color: var(--purple3);
        width: 50%;
        height: 40px;
        border: solid 2px var(--black);
        border-radius: 30px;
        font-size: 20px;
        box-shadow: 2px 2px 5px 1px;
        position: fixed;
        top: 60%;
    }
`;
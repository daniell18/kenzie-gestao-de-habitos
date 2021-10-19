import styled from "styled-components";

export const Conteiner = styled.div`
    width: 80%;
    height: 80px;
    display: flex;
    justify-content: space-between;

    background-color: #212324;
    margin: 3%;
    border-radius: 10px;
    padding: 10px;

    
    color: white;

    @media screen and (min-width: 800px){
        border-radius: 2px;
        width: 70%;
        height: 90px;

        background-color: #36A7F9
    }
`

export const ConteinerCard = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    text-align: center;

    @media screen and (min-width: 800px){
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;

        width: 80%;
    }    
`
export const Conteinername = styled.div`
    font-size: 18px;

    @media screen and (min-width: 800px){
        font-size: 23px;
    }
`
export const ConteinerDiscretion = styled.div`
    margin: 0;
    color: #949595;
    font-size: 12px;

    @media screen and (min-width: 800px){
        font-size: 15px;
        color: white;
    }
`

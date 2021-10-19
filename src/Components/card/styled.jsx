import styled from "styled-components";

export const Conteiner = styled.div`
    width: 80%;
    height: 80px;
    display: flex;
    justify-content: space-between;

    background-color: #212324;
    margin: 3%;
    border-radius: 10px;
    padding: 20px;

    color: white;
`

export const ConteinerCard = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    text-align: center;
`
export const Conteinername = styled.div`

`
export const ProgressBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        margin: 0;
        margin-left: 10px;
        color: #949595;
    }
`
export const Progress = styled.div`
    width: 40%;
    height: 3px;

    background-color: #444545;

    div{
        width:  ${({numberProgress})=>numberProgress}%;
        height: 100%;

        background-color: ${({colorProgress}) => colorProgress};
    }
`
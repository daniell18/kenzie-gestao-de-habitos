import { Conteiner, ConteinerCard, ProgressBar, Conteinername, Progress } from "./styled";

const Card = ({card}) =>{

    const number = card.numero;
    const color = card.cor;
    const name = card.nome;

    return <Conteiner color = {color} >
        icon
        <ConteinerCard>
            <Conteinername>
                {name}
            </Conteinername>
            <ProgressBar>
                <Progress   color = {color}
                            number = {number}>
                    <div></div>
                </Progress>
                <p>
                    {number}% done
                </p>
            </ProgressBar>
        </ConteinerCard>
    </Conteiner>
}

export default Card;
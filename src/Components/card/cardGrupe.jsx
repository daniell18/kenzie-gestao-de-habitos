import { Conteiner, ConteinerCard, ConteinerDiscretion, Conteinername} from "./styled";

const CardGrupe = ({api}) =>{

    const discretion = api.discrição;
    const name = api.nome;

    return <Conteiner>
        icon
        <ConteinerCard>
            <Conteinername>
                {name}
            </Conteinername>
            <ConteinerDiscretion>
                {discretion}
            </ConteinerDiscretion>
        </ConteinerCard>
    </Conteiner>
}

export default CardGrupe;
import { Conteiner, ConteinerCard, ConteinerDiscretion, Conteinername} from "./styled";

const CardGrupe = ({api}) =>{

    const discretion = api.discretion;
    const name = api.name;

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
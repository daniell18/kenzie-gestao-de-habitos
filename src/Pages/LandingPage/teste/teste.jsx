import CardGrupe from "../../../Components/card/cardGrupe"

const Teste = () => {

    const api = {
        name: "Grupo de corrida",
        discretion: "Grupo para correr com a galera"
    }

    return <div>
        <CardGrupe api = {api} />
    </div>
}

export default Teste
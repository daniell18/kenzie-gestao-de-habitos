import { Conteiner,ConteinerModal, ConteinerForm } from "./style"
import { useState } from "react"

const Modal = ({close, filtered, page}) =>{

    const [category, setCategory] = useState('')
    const [frequency, setFrequency] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [title, setTitle] = useState('')
    const [discretion, setDiscretion] = useState('')
    const [data, setData] = useState('')


    console.log(page)

    const obj = {}

    const criarObjHabitos = (event) =>{
        event.preventDefault();
        obj.title = title;
        obj.category = category;
        obj.frequency = frequency;
        obj.difficulty = difficulty;
        console.log(obj);
    }

    const criarObjGrupos = (event) =>{
        event.preventDefault();
        obj.title = title;
        obj.discretion = discretion;
        obj.category = category;
        console.log(obj);
    }

    const criarObjAtividades = (event) =>{
        event.preventDefault();
        obj.title = title;
        obj.data = data;
        console.log(obj);
    }

    const criarObjMetas = (event) =>{
        event.preventDefault();
        obj.title = title;
        obj.data = data;
        console.log(obj);
    }

    return <Conteiner>
       <ConteinerModal>         
                <button className = "buttonClose" 
                        onClick = {() => close(false)}>
                    close
                </button> 
            
            {page === "Habits"? 
            (<ConteinerForm  onSubmit = {criarObjGrupos} >

                <div className = "divTitle">
                    <h1>Nome</h1>
                    <input value = {title} onChange = {(event) => setTitle(event.target.value)}/>
                </div>

                <div className = "category">
                    <h1>Categoria</h1>
                    <select name = "Categoria"
                            onChange = {(event)=>setCategory(event.target.value)}>
                        <option value="Saude">Saude</option>
                        <option value="Educação">Educção</option>
                        <option value="Esporte">Esporte</option>
                        <option value="Happy Hour">Happy Hour</option>
                        <option value="Games">Games</option>
                        <option value="Trabalho">Trabalho</option>
                    </select>
                </div>

                <div>
                    <h1>Frequecia</h1>
                    <select name = "Frequencia"
                            onChange = {(event)=>setFrequency(event.target.value)}>
                        <option value="Diario">Diario</option>
                        <option value="Semanal">Semanal</option>
                        <option value="Quizenal">Quizenal</option>
                        <option value="Mensal">Mensal</option>
                    </select>
                </div>
                
                <div>
                    <h1>Dificuldade</h1>
                    <select name = "dificuldade"
                            onChange = {(event)=>setDifficulty(event.target.value)}>
                        <option value="easy">easy</option>
                        <option value="Regular">Regular</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <button type = "submt" >Criar</button>
            </ConteinerForm>)
            :(null)}

            {page ==="SubscriptionGroup" ? 
            (<ConteinerForm onSubmit = {criarObjGrupos}>

                <div className = "divTitle">
                    <h1>Nome do grupo</h1>
                    <input value = {title} onChange = {(event) => setTitle(event.target.value)}/>
                </div>

                <div className = "category">
                    <h1>Categoria</h1>
                    <select name = "Categoria"
                            onChange = {(event)=>setCategory(event.target.value)}>
                        <option value="Saude">Saude</option>
                        <option value="Educação">Educção</option>
                        <option value="Esporte">Esporte</option>
                        <option value="Happy Hour">Happy Hour</option>
                        <option value="Games">Games</option>
                        <option value="Trabalho">Trabalho</option>
                    </select>
                </div>

                <div className = "divTitle">
                    <h1>Discrição</h1>
                    <input  onChange = {(event) => setDiscretion(event.target.value)}/>
                </div>
                <button type = "submt" >Criar</button>

            </ConteinerForm>)
            :(null)}

            {page === "activities" ?
                (<ConteinerForm onSubmit = {criarObjAtividades}>
                
                    <div className = "divTitle">
                        <h1>Nome da atividade</h1>
                        <input onChange = {(event) => setTitle(event.target.value)}/>
                    </div>
                
                    <div >
                        <h1>Data</h1>
                        <input  type = "date" onChange = {(event) => setData(event.target.value)}/>
                    </div>
                
                    <button type = "submt" >Criar</button>
                
                </ConteinerForm>)
            :(null)
            }

            {page === "goals" ?
                (<ConteinerForm onSubmit = {criarObjMetas}>
                
                    <div className = "divTitle">
                        <h1>Nome da atividade</h1>
                        <input onChange = {(event) => setTitle(event.target.value)}/>
                    </div>
                
                    <div >
                        <h1>Data</h1>
                        <input  type = "date" onChange = {(event) => setData(event.target.value)}/>
                    </div>
                
                    <button type = "submt" >Criar</button>
                
                </ConteinerForm>)
            :(null)
            }

       </ConteinerModal>
    
    </Conteiner>
}

export default Modal;
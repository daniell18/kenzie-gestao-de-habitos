import { Conteiner, ConteinerModal, ConteinerForm } from "./style";
import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/Habits";
import axios from "axios";
import { LoginContext } from "../../Providers/Login";
const Modal = ({
  close,
  filtered,
  pages,
  setUpdateAct,
  setUpadteGoal,
  setSpecificGroup,
}) => {
  const [category, setCategory] = useState("");
  const [frequency, setFrequency] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [title, setTitle] = useState("");
  const [discretion, setDiscretion] = useState("");
  const [data, setData] = useState("");
  const { setHabitsUpdate, setPage, setHabits } = useContext(HabitsContext);
  const { updateLogin } = useContext(LoginContext);
  const token = JSON.parse(localStorage.getItem("@Kenziehabits:token"));
  const userID = JSON.parse(localStorage.getItem("@Kenziehabits:User"));
  const { getLogin } = useContext(LoginContext);
  const obj = {};
  const [idGroup] = useState(
    JSON.parse(localStorage.getItem("@Kenziehabits:SpecificGroup"))
  );
  const criarObjHabitos = (event) => {
    event.preventDefault();
    obj.title = title;
    obj.category = category;
    obj.frequency = frequency;
    obj.difficulty = difficulty;
    obj.achieved = false;
    obj.how_much_achieved = 0;
    obj.user = userID.id;
    axios
      .post("https://kenzie-habits.herokuapp.com/habits/", obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setHabitsUpdate(false);
        setHabits([]);
        setPage(1);
      });
  };
  const criarObjGrupos = (event) => {
    event.preventDefault();
    obj.name = title;
    obj.description = discretion;
    obj.category = category;
    axios
      .post("https://kenzie-habits.herokuapp.com/groups/", obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        getLogin(updateLogin);
      });
  };
  const criarObjAtividades = (event) => {
    event.preventDefault();
    obj.title = title;
    obj.realization_time = data;
    obj.group = idGroup[0].id;
    axios
      .post("https://kenzie-habits.herokuapp.com/activities/", obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setSpecificGroup(2);
      });
  };
  const criarObjMetas = (event) => {
    event.preventDefault();
    obj.title = title;
    obj.difficulty = difficulty;
    obj.how_much_achieved = 0;
    obj.group = idGroup[0].id;
    axios
      .post("https://kenzie-habits.herokuapp.com/goals/", obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSpecificGroup(2);
      });
  };
  return (
    <Conteiner>
      <ConteinerModal>
        <button className="buttonClose" onClick={() => close(false)}>
          X
        </button>
        {pages === "Habits" ? (
          <ConteinerForm onSubmit={criarObjHabitos}>
            <div className="divTitle">
              <h1 className="nome">Crie seu novo Hobie</h1>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                placeholder="Qual é o seu Hobie?"
              />
            </div>
            <div className="category">
              <h1>Categoria</h1>
              <select
                name="category"
                onChange={(event) => setCategory(event.target.value)}
                required
              >
                <option value="">selecione</option>
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
              <select
                name="frequency"
                onChange={(event) => setFrequency(event.target.value)}
                required
              >
                <option value="">selecione</option>
                <option value="Diario">Diario</option>
                <option value="Semanal">Semanal</option>
                <option value="Quizenal">Quizenal</option>
                <option value="Mensal">Mensal</option>
              </select>
            </div>
            <div>
              <h1>Dificuldade</h1>
              <select
                name="difficulty"
                onChange={(event) => setDifficulty(event.target.value)}
                required
              >
                <option value="">selecione</option>
                <option value="easy">easy</option>
                <option value="Regular">Regular</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <button type="submit">Criar</button>
          </ConteinerForm>
        ) : null}
        {pages === "SubscriptionGroup" ? (
          <ConteinerForm onSubmit={criarObjGrupos}>
            <div className="divTitle">
              <h1 className="nome">Crie Seu Grupo</h1>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                placeholder="Qual o nome do seu Grupo?"
              />
            </div>
            <div className="category">
              <h1>Categoria</h1>
              <select
                name="category"
                onChange={(event) => setCategory(event.target.value)}
                required
              >
                <option value="">selecione</option>
                <option value="Saude">Saude</option>
                <option value="Educação">Educção</option>
                <option value="Esporte">Esporte</option>
                <option value="Happy Hour">Happy Hour</option>
                <option value="Games">Games</option>
                <option value="Trabalho">Trabalho</option>
              </select>
            </div>
            <div className="divTitle">
              <h1>Discrição</h1>
              <input
                onChange={(event) => setDiscretion(event.target.value)}
                required
              />
            </div>
            <button type="submit">Criar</button>
          </ConteinerForm>
        ) : null}
        {pages === "activities" ? (
          <ConteinerForm onSubmit={criarObjAtividades}>
            <div className="divTitle">
              <h1 className="nome"> Crie sua nova atividade </h1>
              <input
                onChange={(event) => setTitle(event.target.value)}
                required
                placeholder="Qual a sua atividade?"
              />
            </div>
            <div>
              <h1>Data</h1>
              <input
                type="datetime-local"
                onChange={(event) => setData(event.target.value)}
                required
              />
            </div>
            <button type="submit">Criar</button>
          </ConteinerForm>
        ) : null}
        {pages === "goals" ? (
          <ConteinerForm onSubmit={criarObjMetas}>
            <div className="divTitle">
              <h1 className="nome">Crie suas metas</h1>
              <input
                onChange={(event) => setTitle(event.target.value)}
                required
                placeholder="Qual é sua meta?"
              />
            </div>
            <div>
              <h1>Dificuldade</h1>
              <select
                name="difficulty"
                onChange={(event) => setDifficulty(event.target.value)}
                required
              >
                <option value="">selecione</option>
                <option value="easy">easy</option>
                <option value="Regular">Regular</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <button type="submit">Criar</button>
          </ConteinerForm>
        ) : null}
      </ConteinerModal>
    </Conteiner>
  );
};
export default Modal;

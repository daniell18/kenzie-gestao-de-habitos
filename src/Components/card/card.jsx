import axios from "axios";
import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/Habits";
import {
  Conteiner,
  ConteinerCard,
  ProgressBar,
  Conteinername,
  Progress,
  CheckIn,
  Delete,
  ButtonSeeMore,
  ContainerGroups,
  Conteinerfull,
} from "./styled";

const Card = ({
  filtered,
  getGroup,
 
  filteredGroups,
  setFiltered
}) => {
  const color = "black";
  const { removeHabit } = useContext(HabitsContext);
  const token = JSON.parse(localStorage.getItem("@Kenziehabits:token"));
  const [filteredCat, setFilteredCat] = useState([]);
  let aux=[]
  const handleClick = (e) => {
    if (e.name) {
      getGroup(e.id);
    }
  };
  const handleDel = (item) => {
    if(item.users_on_group){
      axios
        .delete(`https://kenzie-habits.herokuapp.com/groups/${item.id}/unsubscribe/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((_) => {
          let aux=filtered.filter((e)=>e.id!==item.id)
          setFiltered(aux)
          localStorage.setItem("@Kenziehabits:SubscriptionGroup",JSON.stringify(aux))
        });
    }
    if (item.user) {
      axios
        .delete(`https://kenzie-habits.herokuapp.com/habits/${item.id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((_) => {
          removeHabit(item.id,filtered,setFiltered)
        });
    }
    if (item.realization_time) {
      axios
        .delete(`https://kenzie-habits.herokuapp.com/activities/${item.id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((_) => {
          let aux=filtered.filter((e)=>e.id!==item.id)
          setFiltered(aux)
          localStorage.setItem("@Kenziehabits:activities",JSON.stringify(aux))
        });
    }
    if (item.group && item.difficulty) {
      axios
        .delete(`https://kenzie-habits.herokuapp.com/goals/${item.id}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((_) => {
          let aux=filtered.filter((e)=>e.id!==item.id)
          setFiltered(aux)
          localStorage.setItem("@Kenziehabits:goals",JSON.stringify(aux))
        });
    }
  };
  const handleFilter = (event) => {
    if (filteredGroups) {
      setFilteredCat(filteredGroups.filter((item) => item.category === event));
    }
  };
  let val = 0;
  const handleUp = (item) => {
    val = { how_much_achieved: item.how_much_achieved };
    console.log(val);
    if (item.user) {
      if (val.how_much_achieved === 100) {
        val = {
          how_much_achieved: item.how_much_achieved,
          achieved: true,
        };
        console.log(val);
      }
      if (item.how_much_achieved < 100) {
        val = { how_much_achieved: item.how_much_achieved + 10 };
        console.log(val);
      }
      axios
        .patch(`https://kenzie-habits.herokuapp.com/habits/${item.id}/`, val, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          filtered.forEach((element,index) => {
              aux.push(element)
            if(element.id===item.id){
              if(element.how_much_achieved<100){
                aux[index].how_much_achieved+=10
              }
            }
            setFiltered(aux)
          });
        });
    }
    if (item.group && item.difficulty) {
      if (val.how_much_achieved === 100) {
        val = {
          how_much_achieved: item.how_much_achieved,
          achieved: true,
        };
        console.log(val);
      }
      if (item.how_much_achieved < 100) {
        val = { how_much_achieved: item.how_much_achieved + 10 };
        console.log(val);
      }
      axios
        .patch(`https://kenzie-habits.herokuapp.com/goals/${item.id}/`, val, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          filtered.forEach((element,index) => {
            aux.push(element)
          if(element.id===item.id){
            if(element.how_much_achieved<100){
              aux[index].how_much_achieved+=10
            }
          }
          setFiltered(aux)
        });
        });
    }
  };

  return (
    <>
      <ContainerGroups>
        <div>
          {filtered.map((item, index) => (
            <Conteiner key={index} color={color}>
              {console.log(item)}
              {item.title && item.frequency ? (
                <CheckIn onClick={() => handleUp(item)}> Check </CheckIn>
              ) : item.group && item.difficulty ? (
                <CheckIn onClick={() => handleUp(item)}> Check </CheckIn>
              ) : null}
              {!item.username && (
                <Delete onClick={() => handleDel(item)}> Delete </Delete>
              )}

              <ConteinerCard>
                <Conteinername>
                  {item.title ? <p>{item.title}</p> : <p>{item.name}</p>}
                  {item.username && (
                    <div>
                      <p>{item.username}</p>
                      <p>{item.email}</p>
                    </div>
                  )}
                  {item.difficulty}
                </Conteinername>
                {item.how_much_achieved ? (
                  <ProgressBar>
                    <Progress color={color} number={item.how_much_achieved}>
                      <div></div>
                    </Progress>
                    <p>{item.how_much_achieved}% done</p>
                  </ProgressBar>
                ) : (
                  <div>
                    <p>{item.description}</p>
                    {item.users_on_group && (
                      <ButtonSeeMore onClick={() => handleClick(item)}>
                        Ver mais
                      </ButtonSeeMore>
                    )}
                  </div>
                )}
              </ConteinerCard>
            </Conteiner>
          ))}
        </div>
        <div>
          {filteredGroups && (
            <div>
              <select
                name="category"
                onChange={(event) => handleFilter(event.target.value)}
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
              {filteredCat.map((item) => (
                <Conteinerfull>
                  <ConteinerCard>
                    <p>{item.name}</p>
                    <ButtonSeeMore onClick={() => handleClick(item)}>
                      Ver mais
                    </ButtonSeeMore>
                  </ConteinerCard>
                </Conteinerfull>
              ))}
            </div>
          )}
        </div>
      </ContainerGroups>
    </>
  );
};

export default Card;

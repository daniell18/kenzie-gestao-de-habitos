import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Conteiner,
  ConteinerCard,
  ProgressBar,
  Conteinername,
  Progress,
} from "./styled";

const Card = ({ filtered }) => {
  const [specificGroup, setSpecificGroup] = useState(-1);
  const history = useHistory();
  const color = "black";
  const getGroup = (id) => {
    fetch(`https://kenzie-habits.herokuapp.com/groups/${id}/`)
      .then((response) => response.json())
      .then((response) => {
        setSpecificGroup(response);
      });
  };
  useEffect(() => {
    localStorage.setItem(
      "@Kenziehabits:SpecificGroup",
      JSON.stringify([specificGroup])
    );
    localStorage.setItem(
      "@Kenziehabits:Members",
      JSON.stringify(specificGroup.users_on_group)
    );
    localStorage.setItem(
      "@Kenziehabits:activities",
      JSON.stringify(specificGroup.activities)
    );
    localStorage.setItem(
      "@Kenziehabits:goals",
      JSON.stringify(specificGroup.goals)
    );
    if (specificGroup !== -1) {
      history.push(`/member`);
    }
  }, [specificGroup]);

  const handleClick = (e) => {
    if (e.name) {
      getGroup(e.id);
    }
  };

  return (
    <>
      {filtered.map((item, index) => (
        <Conteiner key={index} color={color}>
          icon
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
                {!item.username && (
                  <button onClick={() => handleClick(item)}>Ver mais</button>
                )}
              </div>
            )}
          </ConteinerCard>
        </Conteiner>
      ))}
    </>
  );
};

export default Card;

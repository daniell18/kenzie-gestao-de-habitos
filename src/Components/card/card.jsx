import { useContext } from "react/cjs/react.development";
import { SpecificGroupContext } from "../../Providers/SpecificGroup";
import {
  Conteiner,
  ConteinerCard,
  ProgressBar,
  Conteinername,
  Progress,
} from "./styled";

const Card = ({ filtered }) => {
  const { getGroup } = useContext(SpecificGroupContext);
  const color = "black";
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
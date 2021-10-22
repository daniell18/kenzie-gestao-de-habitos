import {
  Conteiner,
  ConteinerCard,
  ProgressBar,
  Conteinername,
  Progress,
  CheckIn,
  Delete,
} from "./styled";


const Card = ({ filtered, getGroup }) => {
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
          <CheckIn> Check </CheckIn>
          <Delete> Delete </Delete>
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
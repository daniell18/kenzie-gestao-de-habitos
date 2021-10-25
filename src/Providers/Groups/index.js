import { createContext, useEffect, useState } from "react";
export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const [group, setGroup] = useState([]);
  const [page, setPage] = useState(1);
  const [update, setUpdate] = useState(false);
  let filtered;
  const idUser = JSON.parse(localStorage.getItem("@Kenziehabits:User")) || -99;
  useEffect(() => {
    if(update){
    fetch(`https://kenzie-habits.herokuapp.com/groups/?page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setGroup([...group, ...response.results]);
        if (response.next !== null) {
          setPage(page + 1);
        }
      });
    }
  }, [page, update]);

  if (page > 1 && idUser !== -99) {
    localStorage.setItem("@Kenziehabits:Groups", JSON.stringify(group));
  }

  return (
    <GroupContext.Provider value={{ filtered, setUpdate }}>
      {children}
    </GroupContext.Provider>
  );
};

import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const GroupContext = createContext([]);

export const GroupProvider = ({ children }) => {
  const [group, setGroup] = useState([]);
  const [page, setPage] = useState(1);
  let filtered;
  const idUser = JSON.parse(localStorage.getItem("@Kenziehabits:User")) || -99;
  useEffect(() => {
    fetch(`https://kenzie-habits.herokuapp.com/groups/?page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setGroup([...group, ...response.results]);
        if (response.next !== null) {
          setPage(page + 1);
        }
      });
  }, [page]);

  if (page > 1 && idUser !== -99) {
    localStorage.setItem("@Kenziehabits:Groups", JSON.stringify(group));
  }

  return (
    <GroupContext.Provider value={{ filtered }}>
      {children}
    </GroupContext.Provider>
  );
};

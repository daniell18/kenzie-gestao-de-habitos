import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [page, setPage] = useState(1);
  let filtered;
  let idUser = JSON.parse(localStorage.getItem("@Kenziehabits:User")) || -99;
  const [habitsUpdate, setHabitsUpdate] = useState(false);
  useEffect(() => {
    idUser = JSON.parse(localStorage.getItem("@Kenziehabits:User")) || -99;
    axios
      .get(`https://kenzie-habits.herokuapp.com/habits/?page=${page}`)
      .then((response) => {
        setHabits([...habits, ...response.data.results]);
        if (response.next !== null) {
          setPage(page + 1);
        }
      });
  }, [page, habitsUpdate]);

  if (page > 1 && idUser !== -99) {
    filtered = habits.filter((item) => item.user === idUser.id);
    localStorage.setItem("@Kenziehabits:Habits", JSON.stringify(filtered));
  }

  return (
    <HabitsContext.Provider value={{ habits, page, filtered, setHabitsUpdate, setPage, setHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

import axios from "axios";
import { createContext } from "react";
export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {

  let token = JSON.parse(localStorage.getItem("@Kenziehabits:token"));
 

  const newHabit=(setFiltered)=>{
    console.log(token)
   axios.get("https://kenzie-habits.herokuapp.com/habits/personal/",{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response)=>{
    setFiltered(response.data)
    localStorage.setItem("@Kenziehabits:Habits",JSON.stringify(response.data))
  })
  }
  const removeHabit=(id,filtered,setFiltered)=>{
    let aux=filtered.filter((item)=>item.id!==id)
    setFiltered(aux)
    localStorage.setItem("@Kenziehabits:Habits",JSON.stringify(aux))
  }
  return (
    <HabitsContext.Provider value={{ newHabit,removeHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};

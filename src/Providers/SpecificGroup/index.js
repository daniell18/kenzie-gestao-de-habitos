import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
export const SpecificGroupContext = createContext([]);

export const SpecificGroupProvider = ({ children }) => {
  const [specificGroup, setSpecificGroup] = useState(-1);
  const history = useHistory();

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

  return (
    <SpecificGroupContext.Provider value={{ specificGroup, getGroup }}>
      {children}
    </SpecificGroupContext.Provider>
  );
};

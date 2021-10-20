import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SubscriptionContext = createContext([]);

export const SubscriptionProvider = ({ children }) => {
  const [subscription, setSubscription] = useState([]);
  const [page] = useState(1);
  const [aux, setAux] = useState(false);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("@Kenziehabits:token"));
    axios
      .get(`https://kenzie-habits.herokuapp.com/groups/subscriptions/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setSubscription(response.data);
      });
  }, [page, aux]);

  localStorage.setItem(
    "@Kenziehabits:SubscriptionGroup",
    JSON.stringify(subscription)
  );

  return (
    <SubscriptionContext.Provider value={{ subscription, setAux }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

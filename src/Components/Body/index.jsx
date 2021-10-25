import Card from "../card/card";
import {
  ContainerBody,
  Sair,
  LogoSair,
  ParagrafoLogout,
  LogoutPage,
  ButtonPlus,
  GoHome,
} from "./Bodystyle";
import { GoPlus, GoHome as GoHome1 } from "react-icons/go";
import { useHistory } from "react-router";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../Providers/Login";

import { useState } from "react";
import Modal from "../modal/modal";
function Body({ color, pages, item }) {

  const history = useHistory();
  const { setAuthenticated } = useContext(LoginContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [setUpdateAct] = useState(false);
  const [filtered,setFiltered] =useState(
    JSON.parse(localStorage.getItem(`@Kenziehabits:${pages}`)) || [])
  const filteredGroups =
    JSON.parse(localStorage.getItem(`@Kenziehabits:Groups`)) || [];
  const [specificGroup, setSpecificGroup] = useState(-1);
  const [ setUpadteGoal] = useState(false);
  let id2 = JSON.parse(localStorage.getItem("@Kenziehabits:SpecificGroup"));
  //Esta aki porque quando estava em um provider o vercel dava erro
  const getGroup = (id) => {
    fetch(`https://kenzie-habits.herokuapp.com/groups/${id}/`)
      .then((response) => response.json())
      .then((response) => {
        setSpecificGroup(response);
      });
  };

  useEffect(() => {
    if (specificGroup === 2) {
      id2 = JSON.parse(localStorage.getItem("@Kenziehabits:SpecificGroup"));
      getGroup(id2[0].id);
    }
    if (specificGroup !== -1 && specificGroup !== 2) {
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
    }
  }, [specificGroup]);
  return (
    <>
      <ContainerBody color={color}>
        {pages === "SubscriptionGroup" ? (
          <Card
            setSpecificGroup={setSpecificGroup}
            setUpadteGoal={setUpadteGoal}
            filtered={filtered}
            filteredGroups={filteredGroups}
            getGroup={getGroup}
            setFiltered={setFiltered}
          />
        ) : (
          <Card
            setSpecificGroup={setSpecificGroup}
            setUpadteGoal={setUpadteGoal}
            filtered={filtered}
            getGroup={getGroup}
            setFiltered={setFiltered}
          />
        )}
        {pages === "logout" && (
          <LogoutPage>
            <LogoSair /> <ParagrafoLogout>Voce dejesa sair?</ParagrafoLogout>
            <Sair
              onClick={() => {
                localStorage.clear();
                history.push("/");
                setAuthenticated(false);
                localStorage.removeItem("@Kenziehabits:token")
                
              }}
            />
          </LogoutPage>
        )}
        {pages !== "logout" ? (
          <GoHome onClick={() => history.push("/home")}>
            {" "}
            <GoHome1 />{" "}
          </GoHome>
        ) : null}
        {pages !== "logout" && pages !== "Members" ? (
          <ButtonPlus
            className="buttonPlus"
            onClick={() => setIsModalVisible(true)}
          >
            <GoPlus />
          </ButtonPlus>
        ) : null}
        {isModalVisible ? (
          <Modal
            setSpecificGroup={setSpecificGroup}
            setUpadteGoal={setUpadteGoal}
            setUpdateAct={setUpdateAct}
            filtered={filtered}
            pages={pages}
            close={setIsModalVisible}
            setFiltered={setFiltered}
          />
        ) : null}
      </ContainerBody>
    </>
  );
}
export default Body;

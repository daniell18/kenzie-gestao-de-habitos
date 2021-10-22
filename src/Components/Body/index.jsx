import Card from "../card/card";
import {
  ContainerBody,
  Sair,
  LogoSair,
  ParagrafoLogout,
  LogoutPage,
  GoHome,
} from "./Bodystyle";
import { useHistory } from "react-router";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../Providers/Login";
import { HabitsContext } from "../../Providers/Habits";
import { useState } from "react";
import Modal from "../modal/modal";
function Body({ color, pages, item }) {
  const { setHabitsUpdate, setPage, setHabits } = useContext(HabitsContext);
  const history = useHistory();
  const { setAuthenticated } = useContext(LoginContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updataAct, setUpdateAct] = useState(false);
  const filtered =
    JSON.parse(localStorage.getItem(`@Kenziehabits:${pages}`)) || [];
  const [specificGroup, setSpecificGroup] = useState(-1);
  const [updateGoal, setUpadteGoal] = useState(false);
  let id2 = JSON.parse(localStorage.getItem("@Kenziehabits:SpecificGroup"));
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
        <Card filtered={filtered} getGroup={getGroup} />
        {pages === "logout" && (
          <LogoutPage>
            <LogoSair /> <ParagrafoLogout>Voce dejesa sair?</ParagrafoLogout>
            <Sair
              onClick={() => {
                localStorage.clear();
                history.push("/");
                setAuthenticated(false);
                setHabitsUpdate(false);
                setPage(1);
                setHabits([]);
              }}
            />
          </LogoutPage>
        )}
        {pages !== "logout" ? (<GoHome onClick={() => history.push("/home")}> home </GoHome>) : (null)}
        {pages !== "logout" && pages !== "Members" ? (
          <button
            className="buttonPlus"
            onClick={() => setIsModalVisible(true)}
          >
            +
          </button>
        ) : null}
        {isModalVisible ? (
          <Modal
            setSpecificGroup={setSpecificGroup}
            setUpadteGoal={setUpadteGoal}
            setUpdateAct={setUpdateAct}
            filtered={filtered}
            pages={pages}
            close={setIsModalVisible}
          />
        ) : null}
      </ContainerBody>
    </>
  );
}
export default Body;


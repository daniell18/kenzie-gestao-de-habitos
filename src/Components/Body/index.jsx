import Card from "../card/card";
import { ContainerBody, Sair, LogoSair, ParagrafoLogout, LogoutPage } from "./Bodystyle";
import { useHistory } from "react-router";
import { useContext } from "react";
import { LoginContext } from "../../Providers/Login";
import { HabitsContext } from "../../Providers/Habits";
import { Button } from "../Headers/HeadersStyle";
import {useState} from "react"
import Modal from "../modal/modal"

function Body({ color, page, item }) {

  const{setHabitsUpdate, setPage, setHabits} = useContext(HabitsContext)
  const history = useHistory();
  const {setAuthenticated} = useContext(LoginContext)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const filtered =
    JSON.parse(localStorage.getItem(`@Kenziehabits:${page}`)) || [];
 
  return (
    <>
      <ContainerBody color={color}>
        <Card filtered={filtered} />
        {page === "logout" && <LogoutPage> <LogoSair /> <ParagrafoLogout>Voce dejesa sair?</ParagrafoLogout> <Sair onClick={() => {localStorage.clear(); history.push("/"); setAuthenticated(false); setHabitsUpdate(false); setPage(1); setHabits([])}} /> </LogoutPage>}
        <Button onClick = {() => setIsModalVisible(true)} >criar mais </Button>
        {isModalVisible ? <Modal filtered = {filtered} page = {page} close = {setIsModalVisible}/> : null}
      </ContainerBody>
    </>
  );
}
export default Body;
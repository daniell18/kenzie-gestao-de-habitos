import Card from "../card/card";
import { ContainerBody, Sair, LogoSair, ParagrafoLogout, LogoutPage } from "./Bodystyle";
import { useHistory } from "react-router";
import { useContext } from "react";
import { LoginContext } from "../../Providers/Login";

function Body({ color, page}) {
  const history = useHistory();
  const {setAuthenticated} = useContext(LoginContext)
  const filtered =
    JSON.parse(localStorage.getItem(`@Kenziehabits:${page}`)) || [];
  return (
    <>
      <ContainerBody color={color}>
        <Card filtered={filtered} />
        {page === "logout" && <LogoutPage> <LogoSair /> <ParagrafoLogout>Voce dejesa sair?</ParagrafoLogout> <Sair onClick={() => {localStorage.clear(); history.push("/"); setAuthenticated(false)}} /> </LogoutPage>}
      </ContainerBody>
    </>
  );
}
export default Body;

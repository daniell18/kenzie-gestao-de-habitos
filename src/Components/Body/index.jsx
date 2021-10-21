import Card from "../card/card";
import { ContainerBody, Sair, LogoSair, ParagrafoLogout, LogoutPage } from "./Bodystyle";
import { useHistory } from "react-router";

function Body({ color, page}) {
  const history = useHistory();
  const filtered =
    JSON.parse(localStorage.getItem(`@Kenziehabits:${page}`)) || [];
  return (
    <>
      <ContainerBody color={color}>
        <Card filtered={filtered} />
        {page === "logout" && <LogoutPage> <LogoSair /> <ParagrafoLogout>Voce dejesa sair?</ParagrafoLogout> <Sair onClick={() => {history.push("/"); localStorage.clear()}} /> </LogoutPage>}
      </ContainerBody>
    </>
  );
}
export default Body;

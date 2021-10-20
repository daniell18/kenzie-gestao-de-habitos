import Card from "../card/card";
import { ContainerBody } from "./Bodystyle";

function Body({ color, page, item }) {
  const filtered =
    JSON.parse(localStorage.getItem(`@Kenziehabits:${page}`)) || [];
  return (
    <>
      <ContainerBody color={color}>
        <Card filtered={filtered} />
      </ContainerBody>
    </>
  );
}
export default Body;

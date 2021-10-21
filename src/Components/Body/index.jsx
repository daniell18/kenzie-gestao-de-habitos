import Card from "../card/card";
import { Button } from "../Headers/HeadersStyle";
import { ContainerBody } from "./Bodystyle";
import {useState} from "react"
import Modal from "../modal/modal"

function Body({ color, page, item }) {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const filtered =
    JSON.parse(localStorage.getItem(`@Kenziehabits:${page}`)) || [];
 
 
   /*    if(filtered[0].hasOwnProperty()){
        console.log("asdasd")
      }  */

  return (
    <>
      <ContainerBody color={color}>
        <Card filtered={filtered} />
        <Button onClick = {() => setIsModalVisible(true)} >criar mais </Button>
        {isModalVisible ? <Modal filtered = {filtered} page = {page} close = {setIsModalVisible}/> : null}
      </ContainerBody>
    </>
  );
}
export default Body;

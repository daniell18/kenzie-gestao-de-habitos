import { Redirect } from "react-router";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";

function Logout({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div>
        <Headers type="Perfil" />
        <Body color="#E2B1B1" page="logout">
        </Body>
      </div>
    </>
  );
}
export default Logout;

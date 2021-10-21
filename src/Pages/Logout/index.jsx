import { Redirect } from "react-router";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";

function Logout({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div>
        <Headers type="Perfil" />
        <Body color="#E2B1B1">
          <button>logout</button>
          <button>voltar</button>
        </Body>
      </div>
    </>
  );
}
export default Logout;

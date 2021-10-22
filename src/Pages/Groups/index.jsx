import { Redirect } from "react-router";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";

function Groups({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div>
        <Headers type="Perfil" />
        <Body color="#7e42c2" pages="SubscriptionGroup" />
      </div>
    </>
  );
}
export default Groups;

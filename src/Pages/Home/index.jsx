import { Redirect } from "react-router";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";

function Home({ authenticated }) {
  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div>
        <Headers type="Perfil" />
        <Body color="#4da7ad" pages="Habits" />
      </div>
    </>
  );
}
export default Home;

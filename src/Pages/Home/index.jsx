import { Redirect } from "react-router";
import { useContext } from "react/cjs/react.development";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";
import { HabitsContext } from "../../Providers/Habits";
function Home({ authenticated }) {
  const { filtered } = useContext(HabitsContext);

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div>
        <Headers type="Perfil" />
        <Body color="#4da7ad" page="Habits" item={filtered} />
      </div>
    </>
  );
}
export default Home;

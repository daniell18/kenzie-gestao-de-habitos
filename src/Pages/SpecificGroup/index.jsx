import { Redirect } from "react-router";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";

function SpecificGroup({ authenticated }) {
  const group = JSON.parse(
    localStorage.getItem("@Kenziehabits:SpecificGroup")
  ) || [];

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <div>
        <Headers type="Group" group={group} />
        <Body color="#7e42c2" page="activities" />
      </div>
    </>
  );
}
export default SpecificGroup;

import { Redirect } from "react-router";
import { useContext } from "react/cjs/react.development";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";
import { SpecificGroupContext } from "../../Providers/SpecificGroup";

function SpecificGroup({ authenticated }) {
  const { specificGroup } = useContext(SpecificGroupContext);
  const group = JSON.parse(
    localStorage.getItem("@Kenziehabits:SpecificGroup")
  ) || [specificGroup];

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

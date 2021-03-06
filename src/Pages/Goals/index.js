import { Redirect } from "react-router";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";
function Goals({ authenticated }) {
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
        <Body color="#E2B1B1" pages="goals" />
      </div>
    </>
  );
}
export default Goals;

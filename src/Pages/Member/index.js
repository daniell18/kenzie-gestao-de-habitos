import { Redirect } from "react-router";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";
function Member({ authenticated }) {
  const group = JSON.parse(
    localStorage.getItem("@Kenziehabits:SpecificGroup")
  ) || [];
  console.log(group);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div>
        <Headers type="Group" group={group} />
        <Body color="#4da7ad" pages="Members" />
      </div>
    </>
  );
}
export default Member;

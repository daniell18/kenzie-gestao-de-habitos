import { useContext } from "react/cjs/react.development";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";
import { SpecificGroupContext } from "../../Providers/SpecificGroup";
function Goals() {
  const { specificGroup } = useContext(SpecificGroupContext);
  const group = JSON.parse(
    localStorage.getItem("@Kenziehabits:SpecificGroup")
  ) || [specificGroup];
  console.log(group);
  return (
    <>
      <div>
        <Headers type="Group" group={group} />
        <Body color="#E2B1B1" page="goals" />
      </div>
    </>
  );
}
export default Goals;

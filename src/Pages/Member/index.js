import { useContext } from "react/cjs/react.development";
import Body from "../../Components/Body";
import Headers from "../../Components/Headers";
import { SpecificGroupContext } from "../../Providers/SpecificGroup";
function Member() {
  const { specificGroup } = useContext(SpecificGroupContext);
  const group = JSON.parse(
    localStorage.getItem("@Kenziehabits:SpecificGroup")
  ) || [specificGroup];
  return (
    <>
      <div>
        <Headers type="Group" group={group} />
        <Body color="#4da7ad" page="Members" />
      </div>
    </>
  );
}
export default Member;

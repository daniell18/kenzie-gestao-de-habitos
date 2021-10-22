import axios from "axios";
import { useHistory } from "react-router";
import logoLogin from "../../Images/logo.svg";
import {
  HeaderContainer,
  Icon,
  Infos,
  NavGroup,
  NavHome,
  NavLogout,
  NavMenu,
  ContainerInfo,
  LogoDesk,
  JoinGroup,
} from "./HeadersStyle";

function Headers({ type, group, page }) {
  const groupsub =
    JSON.parse(localStorage.getItem("@Kenziehabits:SpecificGroup")) || "";
  const user = JSON.parse(localStorage.getItem("@Kenziehabits:User")) || "";
  const token = JSON.parse(localStorage.getItem("@Kenziehabits:token"));

  const history = useHistory();
  const handleSub = (id) => {
    axios
      .post(`https://kenzie-habits.herokuapp.com/groups/${id}/subscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response));
  };
  return (
    <>
      {type === "Perfil" && (
        <HeaderContainer>
          <ContainerInfo>
            <LogoDesk src={logoLogin} />
            <Icon src="https://picsum.photos/200" alt="icon" />
            <Infos>
              <p>#id:{user.id}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </Infos>
          </ContainerInfo>

          <NavMenu>
            <NavHome onClick={() => history.push("/home")}>
              <p>Home</p>
            </NavHome>
            <NavGroup onClick={() => history.push("/groups")}>
              <p>Group</p>
            </NavGroup>
            <NavLogout onClick={() => history.push("/logout")}>
              <p>Logout</p>
            </NavLogout>
          </NavMenu>
        </HeaderContainer>
      )}
      {type === "Group" && (
        <HeaderContainer>
          <ContainerInfo>
            <LogoDesk onClick={() => history.push("/home")} src={logoLogin} />
            <Icon src="https://picsum.photos/200" alt="icon" />
            <Infos>
              <p>#id:{group[0].id}</p>
              <p>{group[0].name}</p>
            </Infos>
            {groupsub[0].users_on_group.find((item) => item.id === user.id) ? (
              <JoinGroup>Deixar o grupo</JoinGroup>
            ) : (
              <JoinGroup onClick={() => handleSub(groupsub[0].id)}>
                juntar-se
              </JoinGroup>
            )}
          </ContainerInfo>
          <JoinGroup onClick={() => history.push("/groups")}>
            Participe
          </JoinGroup>
          <NavMenu>
            <NavHome onClick={() => history.push("/member")}>
              <p>Membros</p>
            </NavHome>
            <NavGroup onClick={() => history.push("/activites")}>
              <p>Atividades</p>
            </NavGroup>
            <NavLogout onClick={() => history.push("/goals")}>
              <p>Metas</p>
            </NavLogout>
          </NavMenu>
        </HeaderContainer>
      )}
    </>
  );
}
export default Headers;

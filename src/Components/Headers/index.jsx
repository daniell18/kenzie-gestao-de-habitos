import { useHistory } from "react-router";
import { IoPersonAdd } from "react-icons/io5";
import {
  HeaderContainer,
  Icon,
  Infos,
  NavGroup,
  NavHome,
  NavLogout,
  NavMenu,
  ContainerInfo,
  Button,
} from "./HeadersStyle";

function Headers({ type, group }) {
  const user = JSON.parse(localStorage.getItem("@Kenziehabits:User")) || "";

  const history = useHistory();

  return (
    <>
      {type === "Perfil" && (
        <HeaderContainer>
          <ContainerInfo>
            <Icon src="https://picsum.photos/200" alt="icon" />
            <Infos>
              <p>#id:{user.id}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>Titulo</p>
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
            <Icon
              onClick={() => history.push("/home")}
              src="https://picsum.photos/200"
              alt="icon"
            />
            <Infos>
              <p>#id:{group[0].id}</p>
              <p>{group[0].name}</p>
            </Infos>
          </ContainerInfo>
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

import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Content, FormContainer, Logo} from "./styles";
import logoLogin from "../../Images/logoLogin.svg"


function Login() {
  
  return (
    <>
      <Container>
        <Content>
          <FormContainer>
          <Logo><img src={logoLogin}/></Logo>
            <h1>Login</h1>
            <div>
              <Input
                name="username"
                label="Username"
                placeholder="Digite seu usuário"
              ></Input>
            </div>
            <div>
              <Input
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
              ></Input>
            </div>
            <p>
              Não possui conta? <Link to="/signup">Cadastre-se aqui!</Link>
            </p>
          </FormContainer>
          <div>
              <Button type="submit">Entrar</Button>
            </div>
        </Content>
      </Container>
    </>
  );
}

export default Login;
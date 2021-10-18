import { Link} from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Content } from "./styles";
import { FormContainer } from "./styles";


function Login() {
  return (
    <>
      <Container>
        <Content>
          <FormContainer>
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
            <div>
              <Button type="submit">Entrar</Button>
            </div>
          </FormContainer>
        </Content>
      </Container>
    </>
  );
}

export default Login;
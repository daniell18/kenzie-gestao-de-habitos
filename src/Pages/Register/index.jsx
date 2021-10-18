import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Content, FormContainer, Logo} from "./styles";
import logoRegister from "../../Images/logoRegister.svg"


function Login() {
  return (
    <>
      <Container>
        <Content>
          <FormContainer>
          <Logo src={logoRegister}/>
            <h1>Register</h1>
            <div>
              <Input
                name="username"
                label="Username"
                placeholder="Digite seu usuário"
              ></Input>
            </div>
            <div>
              <Input
                name="email"
                label="Email"
                placeholder="Digite seu e-mail"
              ></Input>
            </div>
            <div>
              <Input
                name="email"
                label="Email"
                placeholder="Confirme seu e-mail"
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
            <div>
              <Input
                name="password"
                label="Senha"
                placeholder="Confirme sua senha"
                type="password"
              ></Input>
            </div>
            <p>
              Já possui conta? <Link to="/login">Faça login aqui.</Link>
            </p>
          </FormContainer>
          <div>
              <Button type="submit">Cadastrar</Button>
            </div>
        </Content>
      </Container>
    </>
  );
}

export default Login;
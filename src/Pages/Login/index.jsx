import { Link } from "react-router-dom";
import React from 'react';
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Content, FormContainer, Logo, Paragrafo, Logo2} from "./styles";
import logoLogin from "../../Images/logoLogin.svg"
import logo from "../../Images/logo.svg"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../Components/services";
import { Redirect, useHistory } from "react-router";

function Login({ auth, setAuth }) {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const submitForm = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        localStorage.setItem("@kabit:token", response.data.token);
        localStorage.setItem("@kabit:id", response.data.user.id);
        setAuth(true);
        return history.push("/");
      })
      .catch((err) => console.log(err));

    history.push("/");
  };

  if (auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
      <Logo src={logoLogin}/>
      <Logo2 src={logo}/>
        <Content>
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <h1>Login</h1>
            {!!errors.email?.message && <span>{errors.email.message}</span>}
            <div>
              <Input
                id="email"
                label="email"
                type="text"
                name="email"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              ></Input>
            </div>
            {!!errors.password?.message && <span>{errors.password.message}</span>}
            <div>
              <Input
                id="password"
                type="password"
                name="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              ></Input>
            </div>
            <Paragrafo>
              Não possui conta? <Link to="/signup">Cadastre-se aqui!</Link>
            </Paragrafo>
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
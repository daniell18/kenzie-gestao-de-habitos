import { Link } from "react-router-dom";
import React from "react";
import Button from "../../Components/Button";

import {
  Container,
  Content,
  ErrorSpan,
  FormContainer,
  InputItem,
  Logo,
  Logo2,
  Paragrafo,
} from "./styles";
import logoLogin from "../../Images/logoLogin.svg";
import logo from "../../Images/logo.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { LoginContext } from "../../Providers/Login";
import { HabitsContext } from "../../Providers/Habits";
import { GroupContext } from "../../Providers/Groups";

function Login({ authenticated }) {
  const { getLogin } = useContext(LoginContext);
  const { setUpdate } = useContext(GroupContext);
  const { setHabitsUpdate } = useContext(HabitsContext);
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();
  const submitForm = (e) => {
    getLogin(e);
    setHabitsUpdate(true);
    setUpdate(true);
  };

  if (authenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <Container>
        <Logo onClick={() => history.push("/")} src={logoLogin} />
        <Logo2 onClick={() => history.push("/")} src={logo} />
        <Content>
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <h1>Login</h1>
            {errors.username?.message && (
              <ErrorSpan>{errors.username.message}</ErrorSpan>
            )}
            <div>
              <InputItem
                id="username"
                label="username"
                name="username"
                {...register("username")}
              ></InputItem>
            </div>
            {!!errors.password?.message && (
              <ErrorSpan>{errors.password.message}</ErrorSpan>
            )}
            <div>
              <InputItem
                id="password"
                type="password"
                name="password"
                {...register("password")}
              ></InputItem>
            </div>
            <Paragrafo>
              Não possui conta? <Link to="/register">Cadastre-se aqui!</Link>
            </Paragrafo>
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

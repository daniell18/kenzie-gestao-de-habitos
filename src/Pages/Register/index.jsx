import Button from "../../Components/Button";

import { Container, Content, FormContainer, Logo, Paragrafo } from "./styles";
import logoRegister from "../../Images/logoRegister.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { api } from "../../Components/Services";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

function Register({ auth }) {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    emailConfirm: yup.string().oneOf([yup.ref("email")], "Emails diferentes"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 digitos"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const submitForm = (data) => {
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    axios
      .post("https://kenzie-habits.herokuapp.com/users/", newUser)
      .then((response) => {
        toast.success("Cadastro feito com sucesso!");
        return history.push("/login");
      })
      .catch((err) =>
        toast.error("Oops, algo deu errado. Tente utilizar outro E-mail.")
      );
  };

  if (auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <Content>
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <Logo onClick={() => history.push("/")} src={logoRegister} />
            <h1>Register</h1>
            <div>
              {!!errors.username?.message && (
                <span>{errors.username.message}</span>
              )}
              <input
                name="username"
                label="Username"
                placeholder="Digite seu usuário"
                {...register("username")}
              ></input>
            </div>
            <div>
              {!!errors.email?.message && <span>{errors.email.message}</span>}
              <input
                name="email"
                label="Email"
                placeholder="Digite seu e-mail"
                {...register("email")}
              ></input>
            </div>
            <div>
              {!!errors.emailConfirm?.message && (
                <span>{errors.emailConfirm.message}</span>
              )}
              <input
                name="email"
                label="Email"
                placeholder="Confirme seu e-mail"
                {...register("emailConfirm")}
              ></input>
            </div>
            <div>
              {!!errors.password?.message && (
                <span>{errors.password.message}</span>
              )}
              <input
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                {...register("password")}
              ></input>
            </div>
            <div>
              {!!errors.passwordConfirm?.message && (
                <span>{errors.passwordConfirm.message}</span>
              )}
              <input
                name="password"
                label="Senha"
                placeholder="Confirme sua senha"
                type="password"
                {...register("passwordConfirm")}
              ></input>
            </div>
            <Paragrafo>
              Já possui conta? <Link to="/login">Faça login aqui.</Link>
            </Paragrafo>
            <div>
              <Button type="submit">Cadastrar</Button>
            </div>
          </FormContainer>
        </Content>
      </Container>
    </>
  );
}

export default Register;

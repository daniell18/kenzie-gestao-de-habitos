import Button from "../../Components/Button";

import { Container, Content, FormContainer, Logo, Paragrafo, InputItem, ErrorSpan } from "./styles";
import logoRegister from "../../Images/logoRegister.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

function Register({ authenticated }) {
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

  if (authenticated) {
    return <Redirect to="/home" />;
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
                <ErrorSpan>{errors.username.message}</ErrorSpan>
              )}
              <InputItem
                name="username"
                label="Username"
                placeholder="Digite seu usuário"
                {...register("username")}
              ></InputItem>
            </div>
            <div>
              {!!errors.email?.message && <ErrorSpan>{errors.email.message}</ErrorSpan>}
              <InputItem
                name="email"
                label="Email"
                placeholder="Digite seu e-mail"
                {...register("email")}
              ></InputItem>
            </div>
            <div>
              {!!errors.emailConfirm?.message && (
                <ErrorSpan>{errors.emailConfirm.message}</ErrorSpan>
              )}
              <InputItem
                name="email"
                label="Email"
                placeholder="Confirme seu e-mail"
                {...register("emailConfirm")}
              ></InputItem>
            </div>
            <div>
              {!!errors.password?.message && (
                <ErrorSpan>{errors.password.message}</ErrorSpan>
              )}
              <InputItem
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                {...register("password")}
              ></InputItem>
            </div>
            <div>
              {!!errors.passwordConfirm?.message && (
                <ErrorSpan>{errors.passwordConfirm.message}</ErrorSpan>
              )}
              <InputItem
                name="password"
                label="Senha"
                placeholder="Confirme sua senha"
                type="password"
                {...register("passwordConfirm")}
              ></InputItem>
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

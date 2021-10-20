import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Container, Content, FormContainer, Logo, Paragrafo} from "./styles";
import logoRegister from "../../Images/logoRegister.svg"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { api } from "../../Services";
import { Redirect, useHistory } from "react-router";
import { toast } from "react-toastify";


function Register({ auth }) {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    emailConfirm: yup
    .string().oneOf([yup.ref("email")], "Emails diferentes"),
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
    api
      .post("/users", newUser)
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
      <Logo src={logoRegister}/>
        <Content>
          <FormContainer onSubmit={handleSubmit(submitForm)}>
            <h1>Register</h1>
            <div>
            {!!errors.username?.message && <span>{errors.username.message}</span>}
              <Input
                name="username"
                label="Username"
                placeholder="Digite seu usuário"
                {...register("username")}
              ></Input>
            </div>
            <div>
            {!!errors.email?.message && <span>{errors.email.message}</span>}
              <Input
                name="email"
                label="Email"
                placeholder="Digite seu e-mail"
                {...register("email")}
              ></Input>
            </div>
            <div>
            {!!errors.emailConfirm?.message && (
          <span>{errors.emailConfirm.message}</span>
        )}
              <Input
                name="email"
                label="Email"
                placeholder="Confirme seu e-mail"
                {...register("emailConfirm")}
              ></Input>
            </div>
            <div>
            {!!errors.password?.message && <span>{errors.password.message}</span>}
              <Input
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                {...register("password")}
              ></Input>
            </div>
            <div>
            {!!errors.passwordConfirm?.message && (
          <span>{errors.passwordConfirm.message}</span>
        )}
              <Input
                name="password"
                label="Senha"
                placeholder="Confirme sua senha"
                type="password"
                {...register("passwordConfirm")}
              ></Input>
            </div>
            <Paragrafo>
              Já possui conta? <Link to="/login">Faça login aqui.</Link>
            </Paragrafo>
          </FormContainer>
          <div>
              <Button type="submit">Cadastrar</Button>
            </div>
        </Content>
      </Container>
    </>
  );
}

export default Register;
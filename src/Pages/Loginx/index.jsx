import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { LoginContext } from "../../Providers/Login";
import { SubscriptionContext } from "../../Providers/Subscripitons";
import { HabitsContext } from "../../Providers/Habits";

function Loginx() {
  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatorio"),
    password: yup.string().required("Campo Obrigatorio"),
  });
  const { getLogin } = useContext(LoginContext);
  const { setAux } = useContext(SubscriptionContext);
  const { setHabitsUpdate } = useContext(HabitsContext);

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });
  const onHadleSubmit = (e) => {
    getLogin(e);
    setAux(true);
    setHabitsUpdate(true);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onHadleSubmit)}>
          <input placeholder="login" {...register("username")} />
          <input placeholder="password" {...register("password")} />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}
export default Loginx;

import { InputItem} from "./styles";

const Input = ({ placeholder, error, register, name, ...rest }) => {
  return register ? (
    <>
      <InputItem></InputItem>
    </>
  ) : (
    <InputItem placeholder={placeholder} {...rest} />
  );
};

export default Input;

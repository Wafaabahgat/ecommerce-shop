import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import FormInput from "./FormInput";
import FormModelAuth from "@models/form-model-auth";

const LoginForm = () => {
  return (
    <FormModelAuth ttl=" Hello,Friend !" disc="Log in to continue">
      <div className="flex flex-col items-center gap-3">
        <FormInput name="email" type="text" placeholder="Enter your Email" />
        <FormInput
          name="password"
          type="text"
          placeholder="Enter your Password"
        />
        <Button
          text="log in"
          className="text-white font-bold w-[500px] hover:text-color_danger"
        />
      </div>
      <div className="text-white flex item-center justify-center gap-x-24 m-3">
        <Link to="/forgetPassword" className="hover:text-color_danger">
          Forget password?
        </Link>
        <Link to="/register" className="hover:text-color_danger">
          Create an account
        </Link>
      </div>
    </FormModelAuth>
  );
};

export default LoginForm;

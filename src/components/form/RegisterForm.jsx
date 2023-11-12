import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import FormInput from "./FormInput";
import FormModelAuth from "@models/form-model-auth";

const RegisterForm = () => {
  return (
    <FormModelAuth ttl=" Hello,Friend !" disc="Create a new account">
      <div className="flex flex-col items-center gap-3">
        <FormInput type="text" placeholder="First_Name" />
        <FormInput type="text" placeholder="Last_Name" />
        <FormInput type="text" placeholder="Enter your Email" />
        <FormInput
          name="password"
          type="text"
          placeholder="Enter your Password"
        />
        <Button
          text="Sign Up"
          className="text-white font-bold w-[500px] hover:text-color_danger"
        />
      </div>
      <div className="text-white flex item-center justify-center m-3">
        Already a member? 
        <Link to="/login" className="hover:text-color_danger">
           Log in
        </Link>
      </div>
    </FormModelAuth>
  );
};

export default RegisterForm;

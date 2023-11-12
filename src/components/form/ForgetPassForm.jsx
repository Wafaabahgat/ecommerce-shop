import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import FormInput from "./FormInput";
import FormModelAuth from "@models/form-model-auth";
const ForgetPassForm = () => {
  return (
    <FormModelAuth ttl=" Hello,Friend !" disc="Please enter your email">
      <div className="flex flex-col items-center gap-2">
        <FormInput type="text" placeholder="Enter your Email" />
        <Button
          type="submit"
          text="submit"
          className="text-white font-bold w-[500px] hover:text-color_danger mb-5"
        />
      </div>
    </FormModelAuth>
  );
};

export default ForgetPassForm;

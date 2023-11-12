import Button from "../Ui/Button";
import FormInput from "./FormInput";
import FormModelAuth from "@models/form-model-auth";

const ResetPassForm = () => {
  return (
    <FormModelAuth ttl=" Hello,Friend !">
      <div className="flex flex-col items-center gap-2">
        <FormInput type="text" placeholder="Enter the code" />
        <FormInput
          name="password"
          type="text"
          placeholder="Enter a new Password"
        />
        <Button
          type="submit"
          text="submit"
          className="text-white font-bold w-[500px] hover:text-color_danger mb-5"
        />
      </div>
     
    </FormModelAuth>
  );
};

export default ResetPassForm;

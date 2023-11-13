import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import FormInput from "./FormInput";
import FormModelAuth from "@models/form-model-auth";
import { useEffect, useState } from "react";
// import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";

const RegisterForm = () => {
  const [first_Name, setFirst_Name] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error("Password don't match.");
    }
  };
 

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <>
      <ToastContainer />

      <FormModelAuth ttl=" Hello,Friend !" disc="Create a new account">
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={handleSignup}
        >
          <FormInput
            type="text"
            placeholder="First_Name"
            value={first_Name}
            onChange={(e) => setFirst_Name(e.target.value)}
          />
          <FormInput
            type="text"
            placeholder="Last_Name"
            value={last_Name}
            onChange={(e) => setLast_Name(e.target.value)}
          />
          <FormInput
            type="text"
            placeholder="Enter your Email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Enter your Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            name="Cpassword"
            type="password"
            placeholder="Enter your CPassword"
            autoComplete="new-password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <Button
            text="Sign Up"
            type="submit"
            className="text-white font-bold w-[500px] hover:text-color_danger"
          />
        </form>

        <div className="text-white flex item-center justify-center m-3">
          Already a member?
          <Link to="/login" className="hover:text-color_danger">
            Log in
          </Link>
        </div>
      </FormModelAuth>
    </>
  );
};

export default RegisterForm;

import { Link } from "react-router-dom";
import Button from "@Ui/Button";
import FormInput from "./FormInput";
import FormModelAuth from "@models/form-model-auth";
import { useState } from "react";
import Loader from "../Loader";
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebases/config";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      toast.error("Password don't match.");
    }

    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        window.location = "/login";
      })
      .catch((error) => {
        toast.error(error.massage);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FormModelAuth ttl=" Hello,Friend !" disc="Create a new account">
          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSignup}
          >
            <FormInput
              type="text"
              placeholder="First_Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <Button
              text="Continue with email"
              type="submit"
              className=" text-black bg-blue-900  font-bold w-[500px] hover:text-white"
            />
          </form>

          <div className="text-white flex item-center justify-center m-3">
            Already a member?
            <Link to="/login" className="hover:text-color_danger">
              Log in
            </Link>
          </div>
        </FormModelAuth>
      )}
    </>
  );
};

export default RegisterForm;

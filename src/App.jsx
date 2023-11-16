import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "@pages/root";
import Home from "@pages/home/Home";
import Contact from "@pages/contact/Contact";
import Register from "@pages/auth/Register";
import Login from "@pages/auth/Login";
import ForgetPassword from "@pages/auth/Forget_password";
import GuestUser from "./middleware/GuestUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      ////////////// Auth //////////////////

      {
        path: "/register",
        element: (
          <GuestUser>
            <Register />
          </GuestUser>
        ),
      },
      {
        path: "/login",
        element: (
          <GuestUser>
            <Login />
          </GuestUser>
        ),
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;

import "./index.css";
import ReactDOM from "react-dom/client";
import ".//index.css";
import { RouterProvider } from "react-router-dom";
import router from "./App";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import  Store  from "./redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </Provider>
  </>
);

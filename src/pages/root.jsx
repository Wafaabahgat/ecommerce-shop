import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

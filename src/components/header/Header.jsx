import { Link } from "react-router-dom";
import Menu from "../Ui/Menu";
const Header = () => {
  return (
    <div className="w-full bg-dark_blue fixed left-0 top-0 z-10 shadow-xl">
      <div className="m-auto flex justify-between items-center p-4 max-h-[100px]">
        <Link to="/">
          <div className="text-color_white font-bold text-3xl ml-6">
            e<span className="text-color_danger">Shop</span>.
          </div>
        </Link>
        <div>
          <ul className="text-color_white gap-3 flex text-lg">
            <li className="hover:text-color_danger active">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-color_danger">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default Header;

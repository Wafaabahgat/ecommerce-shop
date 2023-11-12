import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const UserCard = () => {
  return (
    <>
      <div className=" bg-color_white shadow-md rounded-md w-[210px] border-slate-400 border absolute top-16 right-1 z-50">
        <div className="text-xl">
          <ul className="text-dark_blue">
            <li className="hover:text-color_danger p-4">
              <Link to="/login">Login</Link>
            </li>
            <span className=" bg-slate-300 block h-[1px] "></span>
            <li className="hover:text-color_danger p-4">
              <Link to="/register">Register</Link>
            </li>
            <span className=" bg-slate-300 block h-[1px]"></span>
            <li className="hover:text-color_danger p-4">
              <Link to="/orders">My Orders</Link>
            </li>
            <span className=" bg-slate-300 block h-[1px]"></span>
            <li className="hover:text-color_danger flex items-center justify-center p-4">
              <Link to="/cart" className="flex items-center">
                <span>Cart</span>
                <FaShoppingCart />
                <span className="relative bottom-2 left-0">0</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserCard;

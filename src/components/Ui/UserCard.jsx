import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../Firebases/config";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import ShowOnLogin, { ShowOnLogout } from "./HideLink";

const UserCard = () => {
  // const [email, setemail] = useState("");
  const [displayName, setdisplayName] = useState("");
  const disptch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // console.log(user);
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          console.log(u1);
          setdisplayName(u1);
        } else {
          user.displayName;
        }
        setdisplayName(user.displayName);
        disptch(
          SET_ACTIVE_USER({
            email: user.email,
            useName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        console.log("No display name found"); // Add this line
        disptch(
          REMOVE_ACTIVE_USER({
            email: user.email,
            useName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
            isLoggedIn: false,
          })
        );
      }
    });
  }, [displayName, disptch]);

  return (
    <>
      <form className=" bg-color_white shadow-md rounded-md max-w-[400px] min-w-[210px] border-slate-400 border absolute top-16 right-1 z-50">
        <div className="text-xl">
          <ul className="text-dark_blue">
            <ShowOnLogin>
              <li className="p-4">
                <a className="flex gap-1 items-center">
                  <FaUserCircle />
                  {displayName}
                </a>
              </li>
              <span className="bg-slate-300 block h-[1px] "></span>
            </ShowOnLogin>

            <ShowOnLogout>
              <li className="hover:text-color_danger p-4">
                <Link to="/login">Login</Link>
              </li>
              <span className="bg-slate-300 block h-[1px] "></span>
              <li className="hover:text-color_danger p-4">
                <Link to="/register">Register</Link>
              </li>
              <span className="bg-slate-300 block h-[1px] "></span>
            </ShowOnLogout>

            <li className="hover:text-color_danger p-4">
              <Link to="/orders">My Orders</Link>
            </li>
            <span className="bg-slate-300 block h-[1px]"></span>
            <li className="hover:text-color_danger flex items-center justify-center p-4">
              <Link to="/cart" className="flex items-center">
                <span>Cart</span>
                <FaShoppingCart />
                <span className="relative bottom-2 left-0">0</span>
              </Link>
            </li>
            <ShowOnLogin>
              <span className=" bg-slate-300 block h-[1px]"></span>
              <li className="hover:text-color_danger p-4 flex items-center justify-center gap-1">
                <IoIosLogOut />
                <Link to="/login">Log out</Link>
              </li>
            </ShowOnLogin>
          </ul>
        </div>
      </form>
    </>
  );
};

export default UserCard;

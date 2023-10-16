import React, { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart items", cartItems);
  return (
    <div className="w-full flex justify-between shadow-md bg-gray-200">
      <div className="logo-container">
        <Link to={"/"}>
          <img className="w-32" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center pr-5">
        <ul className="flex gap-10 items-center text-xl">
          <li className="items-center">
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>
          <li>Login: {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("In cart", cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5 text-xl font-bold">
      Cart Items:
      <button
        className="border rounded-lg bg-red-400 px-5 py-3 ml-5"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto shadow-lg mt-10">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;

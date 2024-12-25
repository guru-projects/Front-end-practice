import React from "react";
import remove from "../assets/images/icon-remove-item.svg";

const Cart = ({ cartData, deleteItem }) => {
  const totalOrder =
    cartData.length > 0
      ? cartData.reduce((total, item) => total + item.price * item.count, 0)
      : 0;

  return (
    <div className="bg-slate-700 rounded-lg p-4 w-full flex-1 h-max">
      <h1 className="text-2xl text-red font-bold mb-4">Your Cart</h1>

      <div className="divide-y divide-slate-400">
        {cartData.map((item, index) => (
          <div
            className="flex items-center justify-between my-2 py-2"
            key={index}>
            <div>
              <p className="text-slate-100 mb-1">{item.name}</p>
              <p>
                <span className="font-bold text-red mr-4">{item.count}x</span>
                <span className="text-slate-400 text-sm font-light mr-2">
                  @${item.price}
                </span>
                <span className="text-slate-300 text-sm">
                  @${item.count * item.price}
                </span>
              </p>
            </div>
            <img
              src={remove}
              alt="remove"
              className="cursor-pointer border p-[2px] rounded-full"
              onClick={() => deleteItem(item)}
            />
          </div>
        ))}

        <div className="flex items-center justify-between py-6">
          <p className="text-slate-400">Order Total</p>{" "}
          <span className="text-2xl font-bold text-slate-300">
            ${totalOrder}
          </span>
        </div>
      </div>

      <button className="w-full text-center bg-red px-6 py-3 rounded-full text-slate-200">
        Confirm Order
      </button>
    </div>
  );
};

export default Cart;
